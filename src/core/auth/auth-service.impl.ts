import { DomEventDispatcher } from '@frontmeans/dom-events';
import {
  AfterEvent,
  afterThe,
  digAfter,
  EventKeeper,
  mapAfter_,
  mapOn_,
  OnEvent,
  trackValue,
  trackValueBy,
  valueOn_,
  ValueTracker,
} from '@proc7ts/fun-events';
import { valueProvider } from '@proc7ts/primitives';
import { BootstrapContext, BootstrapWindow } from '@wesib/wesib';
import { ApiFetch, ApiRequest, ApiResponse, notAuthenticatedError } from '../api';
import { AuthService, LoginRequest, RegisterRequest, UpdateSettingsRequest } from './auth-service';
import { Authentication, AuthToken, AuthUser, notAuthenticated, NotAuthenticated } from './authentication';

const authTokenKey = 'wesib-conduit:auth';

export class AuthService$ extends AuthService {

  readonly user: AfterEvent<[AuthUser | NotAuthenticated]>;
  readonly requireUser: AfterEvent<[AuthUser | NotAuthenticated]>;

  private readonly _auth: ValueTracker<Authentication>;
  private readonly _token = trackValue<AuthToken | NotAuthenticated>(notAuthenticated);

  constructor(private readonly _context: BootstrapContext) {
    super();

    const window = _context.get(BootstrapWindow);
    const storage = window.localStorage;

    this._auth = trackValue<Authentication>(toAuthentication(storage.getItem(authTokenKey)));
    this._token.by(this.authentication.do(
        valueOn_(({ token }) => this._token.it.token !== token && { token }),
    ));

    this._auth.on(storeAuthToken);

    let userRequest: [AuthToken | AuthUser, ValueTracker<AuthUser | NotAuthenticated>] | undefined;

    this.requireUser = this.authentication.do(
        digAfter((auth): EventKeeper<[AuthUser | NotAuthenticated]> => {
          if (!auth.token) {
            // No token. Can not authenticate.
            return afterThe<[NotAuthenticated]>({
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

            return tracker;
          }
          if (userRequest) {
            // Some user is loading.

            const [requestToken, responseTracker] = userRequest;

            if (requestToken.token === auth.token) {
              // The right user is loading.
              return responseTracker;
            }
            // Stop loading the wrong user.
            responseTracker.byNone();
          }

          // Request user settings.
          const tracker = trackValueBy<AuthUser | NotAuthenticated>(
              this.loadUser().do(
                  mapAfter_(
                      (response: ApiResponse<AuthUser>): AuthUser | NotAuthenticated => response.ok
                          ? response.body
                          : { failure: response },
                      valueProvider(notAuthenticated),
                  ),
              ),
          );

          userRequest = [auth, tracker];

          return tracker;
        }),
    );

    this.user = this.requireUser.do(
        mapAfter_(user => user.username ? user : notAuthenticated),
    );
    new DomEventDispatcher(window).on<StorageEvent>('storage')(({ key, newValue }) => {
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

  get token(): AfterEvent<[AuthToken | NotAuthenticated]> {
    return this._token.read;
  }

  get authentication(): AfterEvent<[Authentication]> {
    return this._auth.read;
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

    return apiFetch(apiRequest).do(
        mapOn_(response => {
          if (response.ok) {
            this._setUserSettings(response.body);
          }
          return response;
        }),
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

    return apiFetch(apiRequest).do(
        mapOn_(response => {
          if (response.ok) {
            this._setUserSettings(response.body);
          }
          return response;
        }),
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

    return apiFetch(apiRequest).do(
        mapOn_(response => {
          this._auth.it = response.ok ? response.body : { failure: response };
          return response;
        }),
    );
  }

}

function toAuthentication(token: string | null | undefined): Authentication {
  return token ? { token } : notAuthenticated;
}
