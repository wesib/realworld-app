import { BootstrapContext, BootstrapWindow } from '@wesib/wesib';
import { nextSkip } from 'call-thru';
import { AfterEvent, OnEvent, trackValue, ValueTracker } from 'fun-events';
import { DomEventDispatcher } from 'fun-events/dom';
import { ApiFetch, ApiRequest, ApiResponse } from '../api';
import { AuthService, LoginRequest, RegisterRequest, UpdateSettingsRequest } from './auth-service';
import { Authentication, AuthToken, AuthUser, NotAuthenticated } from './authentication';

const authTokenKey = 'wesib-conduit:auth';
const notAuthenticated: NotAuthenticated = {};

export class AuthService$ extends AuthService {

  private readonly _auth: ValueTracker<Authentication>;
  private readonly _token = trackValue<AuthToken | NotAuthenticated>(notAuthenticated);

  get authentication(): AfterEvent<[Authentication]> {
    return this._auth.read;
  }

  get token(): AfterEvent<[AuthToken | NotAuthenticated]> {
    return this._token.read;
  }

  constructor(private readonly _context: BootstrapContext) {
    super();

    const window = _context.get(BootstrapWindow);
    const storage = window.localStorage;

    this._auth = trackValue<Authentication>(toAuthentication(storage.getItem(authTokenKey)));
    this._token.by(this._auth.read.thru_(
        ({ token }) => this._token.it.token !== token ? { token } : nextSkip,
    ));
    this._auth.on(storeAuthToken);
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
