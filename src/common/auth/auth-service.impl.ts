import { BootstrapContext, BootstrapWindow } from '@wesib/wesib';
import { nextArgs, valuesProvider } from 'call-thru';
import { AfterEvent, afterEventBy, afterThe, eventSupply, OnEvent, trackValue, ValueTracker } from 'fun-events';
import { ApiFetch, ApiResponse } from '../api';
import { AuthService as AuthService_, AuthUserOrFailure, LoginRequest } from './auth-service';
import { AuthUser } from './auth-user';

const authTokenKey = 'wesib-conduit:auth';
type Authentication = AuthUser | string | null;

export class AuthService extends AuthService_ {

  readonly user: AfterEvent<AuthUserOrFailure>;
  private readonly _auth: ValueTracker<Authentication>;

  constructor(private readonly _context: BootstrapContext) {
    super();

    const storage = _context.get(BootstrapWindow).localStorage;

    this._auth = trackValue(storage.getItem(authTokenKey));
    this._auth.on(updateAuthToken);
    this.user = this._auth.read.keep.dig(authUser);

    function updateAuthToken(newAuth: Authentication): void {
      if (!newAuth) {
        storage.removeItem(authTokenKey);
      } else {
        storage.setItem(authTokenKey, typeof newAuth === 'string' ? newAuth : newAuth.token);
      }
    }

    function authUser(auth: Authentication): AfterEvent<AuthUserOrFailure> {
      if (!auth) {
        return afterThe();
      }
      if (typeof auth === 'string') {
        return fetchCurrentUser(auth);
      }
      return afterThe(auth);
    }

    function fetchCurrentUser(token: string): AfterEvent<AuthUserOrFailure> {

      const apiFetch: ApiFetch<AuthUser> = _context.get(ApiFetch);

      return afterEventBy<AuthUserOrFailure>(
          receiver => {
            apiFetch({
              path: 'user',
              init: {
                headers: {
                  Authorization: `Token ${token}`,
                },
              },
              auth: false,
            }).thru_(
                (response: ApiResponse<AuthUser>) => {
                  if (response.ok) {
                    return nextArgs<AuthUserOrFailure, unknown>(response.body);
                  }
                  return nextArgs<AuthUserOrFailure, unknown>(undefined, response);
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

    const apiFetch: ApiFetch<AuthUser> = this._context.get(ApiFetch);

    return apiFetch({
      path: 'users/login',
      init: {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
      auth: false,
    }).thru_(
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

  logout(): void {
    this._auth.it = null;
  }

}
