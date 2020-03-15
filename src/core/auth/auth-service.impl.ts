import { BootstrapContext, BootstrapWindow } from '@wesib/wesib';
import { nextArg, nextSkip } from 'call-thru';
import {
  AfterEvent,
  afterSent,
  EventReceiver,
  EventSupply,
  nextAfterEvent,
  OnEvent,
  trackValue,
  trackValueBy,
  ValueTracker,
} from 'fun-events';
import { DomEventDispatcher } from 'fun-events/dom';
import { ApiFetch, ApiRequest, ApiResponse, notAuthenticatedError } from '../api';
import { AuthService, LoginRequest, RegisterRequest, UpdateSettingsRequest } from './auth-service';
import { Authentication, AuthToken, AuthUser, NotAuthenticated } from './authentication';

const authTokenKey = 'wesib-conduit:auth';
const notAuthenticated: NotAuthenticated = {};

export class AuthService$ extends AuthService {

  private readonly _auth: ValueTracker<Authentication>;
  private readonly _token = trackValue<AuthToken | NotAuthenticated>(notAuthenticated);

  constructor(private readonly _context: BootstrapContext) {
    super();

    const window = _context.get(BootstrapWindow);
    const storage = window.localStorage;

    this._auth = trackValue<Authentication>(toAuthentication(storage.getItem(authTokenKey)));
    this._token.by(this.authentication().thru_(
        ({ token }) => this._token.it.token !== token ? { token } : nextSkip,
    ));

    this._auth.on(storeAuthToken);
    new DomEventDispatcher(window).on<StorageEvent>('storage').to(({ key, newValue }) => {
      if (key === authTokenKey) {

        const token = newValue || undefined;

        if (this._auth.it.token !== token) {
          this._auth.it = toAuthentication(token);
        }
      }
    });

    function storeAuthToken({ token }: Authentication): void {
      if (token) {
        storage.setItem(authTokenKey, token);
      } else {
        storage.removeItem(authTokenKey);
      }
    }
  }

  token(): AfterEvent<[AuthToken | NotAuthenticated]>;
  token(receiver: EventReceiver<[AuthToken | NotAuthenticated]>): EventSupply;
  token(
      receiver?: EventReceiver<[AuthToken | NotAuthenticated]>,
  ): AfterEvent<[AuthToken | NotAuthenticated]> | EventSupply {
    return (this.token = this._token.read().F)(receiver);
  }

  authentication(): AfterEvent<[Authentication]>;
  authentication(receiver: EventReceiver<[Authentication]>): EventSupply;
  authentication(receiver?: EventReceiver<[Authentication]>): AfterEvent<[Authentication]> | EventSupply {
    return (this.authentication = this._auth.read().F)(receiver);
  }

  user(): AfterEvent<[AuthUser | NotAuthenticated]>;
  user(receiver: EventReceiver<[AuthUser | NotAuthenticated]>): EventSupply;
  user(
      receiver?: EventReceiver<[AuthUser | NotAuthenticated]>,
  ): AfterEvent<[AuthUser | NotAuthenticated]> | EventSupply {
    return (this.user = this.requireUser().keepThru(
        user => user.username ? user : notAuthenticated,
    ).F)(receiver);
  }

  requireUser(): AfterEvent<[AuthUser | NotAuthenticated]>;
  requireUser(receiver: EventReceiver<[AuthUser | NotAuthenticated]>): EventSupply;
  requireUser(
      receiver?: EventReceiver<[AuthUser | NotAuthenticated]>,
  ): AfterEvent<[AuthUser | NotAuthenticated]> | EventSupply {

    let userRequest: [AuthToken | AuthUser, ValueTracker<AuthUser | NotAuthenticated>] | undefined;

    return (this.requireUser = this.authentication().keepThru(
        auth => {
          if (!auth.token) {
            // No token. Can not authenticate.
            return nextArg<NotAuthenticated>({
              failure: {
                ok: false,
                errors: notAuthenticatedError(),
              },
            });
          }
          if (auth.email) {
            // User authenticated.

            const tracker = trackValue(auth);

            userRequest = [auth, tracker];

            return nextAfterEvent(tracker);
          }
          if (userRequest) {
            // Some user is loading.

            const [requestToken, responseTracker] = userRequest;

            if (requestToken.token === auth.token) {
              // The right user is loading.
              return nextAfterEvent(responseTracker);
            }
            // Stop loading the wrong user.
            responseTracker.byNone();
          }

          // Request user settings.
          const tracker = trackValueBy<AuthUser | NotAuthenticated>(
              afterSent<[AuthUser | NotAuthenticated]>(
                  this.loadUser().thru_(
                      response => response.ok ? response.body : { failure: response },
                  ),
                  () => [notAuthenticated],
              ),
          );

          userRequest = [auth, tracker];

          return nextAfterEvent(tracker);
        },
    ).F)(receiver);
  }

  login(request: LoginRequest): OnEvent<[ApiResponse<AuthUser>]> {
    return this._request('users/login', request);
  }

  register(request: RegisterRequest): OnEvent<[ApiResponse<AuthUser>]> {
    return this._request('users', request);
  }

  loadUser(): OnEvent<[ApiResponse<AuthUser>]> {

    const apiFetch: ApiFetch = this._context.get(ApiFetch);
    const apiRequest: ApiRequest<AuthUser> = {
      path: 'user',
      init: {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
      respondAs: 'user',
      auth: true,
    };

    return apiFetch(apiRequest).thru_(
        response => {
          if (response.ok) {
            this._setUserSettings(response.body);
          }
          return response;
        },
    );
  }

  updateSettings(request: UpdateSettingsRequest): OnEvent<[ApiResponse<AuthUser>]> {

    const apiFetch: ApiFetch = this._context.get(ApiFetch);
    const apiRequest: ApiRequest<AuthUser> = {
      path: 'user',
      init: {
        method: 'PUT',
        body: JSON.stringify({ user: request }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
      respondAs: 'user',
      auth: true,
    };

    return apiFetch(apiRequest).thru_(
        response => {
          if (response.ok) {
            this._setUserSettings(response.body);
          }
          return response;
        },
    );
  }

  logout(): void {
    this._auth.it = notAuthenticated;
  }

  private _setUserSettings(user: AuthUser): void {
    this._auth.it = {
      ...user,
      token: this._token.it.token || user.token, // Do not update token here, as this would cause multiple user reloads
    };
  }

  private _request(
      path: string,
      request: object,
  ): OnEvent<[ApiResponse<AuthUser>]> {

    const apiFetch: ApiFetch = this._context.get(ApiFetch);
    const apiRequest: ApiRequest<AuthUser> = {
      path,
      init: {
        method: 'POST',
        body: JSON.stringify({ user: request }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
      respondAs: 'user',
      auth: false,
    };

    return apiFetch(apiRequest).thru_(
        response => {
          if (response.ok) {
            this._auth.it = response.body;
          } else if (response.ok === false) {
            this._auth.it = { failure: response };
          }
          return response;
        },
    );
  }

}

function toAuthentication(token: string | null | undefined): Authentication {
  return token ? { token } : notAuthenticated;
}
