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
import { ApiFetch, ApiRequest, ApiResponse } from '../api';
import { AuthService, AuthUserOrFailure, LoginRequest, RegisterRequest } from './auth-service';
import { AuthUser } from './auth-user';

const authTokenKey = 'wesib-conduit:auth';
type Authentication = AuthUser | string | null;

export class AuthService$ extends AuthService {

  readonly user: AfterEvent<AuthUserOrFailure>;
  private readonly _auth: ValueTracker<Authentication>;

  constructor(private readonly _context: BootstrapContext) {
    super();

    const storage = _context.get(BootstrapWindow).localStorage;

    this._auth = trackValue(storage.getItem(authTokenKey));
    this._auth.on(updateAuthToken);
    this.user = this._auth.read.keep.thru(authUser);

    function updateAuthToken(newAuth: Authentication): void {
      if (!newAuth) {
        storage.removeItem(authTokenKey);
      } else {
        storage.setItem(authTokenKey, typeof newAuth === 'string' ? newAuth : newAuth.token);
      }
    }

    function authUser(auth: Authentication): NextCall<OnEventCallChain, AuthUserOrFailure> {
      if (!auth) {
        return nextArgs();
      }
      if (typeof auth === 'string') {
        return nextOnEvent(fetchCurrentUser(auth));
      }
      return nextArgs(auth);
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
    return this._request(request);
  }

  register(request: RegisterRequest): OnEvent<[ApiResponse<AuthUser>]> {
    return this._request(request);
  }

  logout(): void {
    this._auth.it = null;
  }

  private _request(request: LoginRequest | RegisterRequest): OnEvent<[ApiResponse<AuthUser>]> {

    const apiFetch: ApiFetch = this._context.get(ApiFetch);
    const apiRequest: ApiRequest<AuthUser> = {
      path: 'users',
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
          } else {
            this._auth.it = null;
          }
          return response;
        },
    );
  }

}
