import { BootstrapContext, BootstrapWindow } from '@wesib/wesib';
import { nextArgs, NextCall, valuesProvider } from 'call-thru';
import {
  AfterEvent,
  afterEventBy,
  eventSupply,
  nextOnEvent,
  OnEvent,
  OnEventCallChain,
  trackValue,
  ValueTracker,
} from 'fun-events';
import { DomEventDispatcher } from 'fun-events/dom';
import { ApiFetch, ApiRequest, ApiResponse } from '../api';
import { AuthService, LoginRequest, RegisterRequest } from './auth-service';
import { Authentication, AuthUser, AuthUserOrFailure } from './authentication';

const authTokenKey = 'wesib-conduit:auth';

export class AuthService$ extends AuthService {

  readonly user: AfterEvent<AuthUserOrFailure>;
  private readonly _auth: ValueTracker<Authentication>;

  get authentication(): AfterEvent<[Authentication]> {
    return this._auth.read;
  }

  constructor(private readonly _context: BootstrapContext) {
    super();

    const window = _context.get(BootstrapWindow);
    const storage = window.localStorage;

    this._auth = trackValue<Authentication>(toAuthToken(storage.getItem(authTokenKey)));
    this._auth.on(storeAuthToken);
    this.user = this.authentication.keep.thru(authUser);
    new DomEventDispatcher(window).on<StorageEvent>('storage')(({ key, newValue }) => {
      if (key === authTokenKey) {

        const token = newValue || undefined;

        if (this._auth.it.token !== token) {
          this._auth.it = toAuthToken(token);
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

    function authUser(auth: Authentication): NextCall<OnEventCallChain, AuthUserOrFailure> {
      if (auth.email) {
        return nextArgs(auth);
      }
      if (auth.failure) {
        return nextArgs(undefined, auth.failure);
      }
      if (!auth.token) {
        return nextArgs();
      }
      return nextOnEvent(fetchCurrentUser(auth.token));
    }

    function fetchCurrentUser(token: string): AfterEvent<AuthUserOrFailure> {

      const apiFetch: ApiFetch = _context.get(ApiFetch);
      const apiRequest: ApiRequest<AuthUser> = {
        path: 'user',
        init: {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        },
        respondAs: 'user',
        auth: false,
      };

      return afterEventBy<AuthUserOrFailure>(
          receiver => {
            apiFetch(apiRequest).thru_(
                (response: ApiResponse<AuthUser>): NextCall<OnEventCallChain, AuthUserOrFailure> => {
                  if (response.ok) {
                    return nextArgs(response.body);
                  }
                  return nextArgs(undefined, response);
                },
            )({
              supply: eventSupply().needs(receiver.supply), // Do not abort after user received
              receive(ctx, ...event) {
                receiver.receive(ctx, ...event);
              },
            });
          },
          valuesProvider(),
      );
    }
  }

  login(request: LoginRequest): OnEvent<[ApiResponse<AuthUser>]> {
    return this._request('users/login', request);
  }

  register(request: RegisterRequest): OnEvent<[ApiResponse<AuthUser>]> {
    return this._request('users', request);
  }

  logout(): void {
    this._auth.it = {};
  }

  private _request(path: string, request: LoginRequest | RegisterRequest): OnEvent<[ApiResponse<AuthUser>]> {

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

function toAuthToken(token: string | null | undefined): Authentication {
  return token ? { token } : {};
}
