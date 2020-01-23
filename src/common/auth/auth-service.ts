import { ContextKey, ContextKey__symbol, SingleContextKey } from 'context-values';
import { AfterEvent, OnEvent } from 'fun-events';
import { ApiResponse } from '../api';
import { AuthUser } from './auth-user';

export type AuthUserOrFailure = [] | [AuthUser] | [undefined, ApiResponse.Failure];

export interface SignInRequest {
  readonly email: string;
  readonly password: string;
}

const AuthService__key = new SingleContextKey<AuthService>('auth-service');

export abstract class AuthService {

  static get [ContextKey__symbol](): ContextKey<AuthService> {
    return AuthService__key;
  }

  abstract readonly user: AfterEvent<AuthUserOrFailure>;

  abstract signIn(request: SignInRequest): OnEvent<[ApiResponse<AuthUser>]>;

  abstract signOut(): void;

}
