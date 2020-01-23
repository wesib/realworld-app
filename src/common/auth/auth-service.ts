import { ContextKey, ContextKey__symbol } from 'context-values';
import { AfterEvent, OnEvent } from 'fun-events';
import { ApiResponse } from '../api';
import { AuthService__key } from './auth-service.key.impl';
import { AuthUser } from './auth-user';

export type AuthUserOrFailure = [] | [AuthUser] | [undefined, ApiResponse.Failure];

export interface SignInRequest {
  readonly email: string;
  readonly password: string;
}

export abstract class AuthService {

  static get [ContextKey__symbol](): ContextKey<AuthService> {
    return AuthService__key;
  }

  abstract readonly user: AfterEvent<AuthUserOrFailure>;

  abstract signIn(request: SignInRequest): OnEvent<[ApiResponse<AuthUser>]>;

  abstract signOut(): void;

}
