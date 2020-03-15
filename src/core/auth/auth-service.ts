import { ContextKey, ContextKey__symbol } from 'context-values';
import { AfterEvent, EventReceiver, EventSupply, OnEvent } from 'fun-events';
import { ApiResponse } from '../api';
import { AuthService__key } from './auth-service.key.impl';
import { Authentication, AuthToken, AuthUser, NotAuthenticated } from './authentication';

export interface LoginRequest {
  readonly email: string;
  readonly password: string;
}

export interface RegisterRequest {
  readonly username: string;
  readonly email: string;
  readonly password: string;
}

export interface UpdateSettingsRequest {
  readonly email: string;
  readonly username: string;
  readonly password?: string;
  readonly bio?: string;
  readonly image?: string;
}

export abstract class AuthService {

  static get [ContextKey__symbol](): ContextKey<AuthService> {
    return AuthService__key;
  }

  abstract token(): AfterEvent<[AuthToken | NotAuthenticated]>;
  abstract token(receiver: EventReceiver<[AuthToken | NotAuthenticated]>): EventSupply;

  abstract authentication(): AfterEvent<[Authentication]>;
  abstract authentication(receiver: EventReceiver<[Authentication]>): EventSupply;

  abstract user(): AfterEvent<[AuthUser | NotAuthenticated]>;
  abstract user(receiver: EventReceiver<[AuthUser | NotAuthenticated]>): EventSupply;

  abstract requireUser(): AfterEvent<[AuthUser | NotAuthenticated]>;
  abstract requireUser(receiver: EventReceiver<[AuthUser | NotAuthenticated]>): EventSupply;

  abstract login(request: LoginRequest): OnEvent<[ApiResponse<AuthUser>]>;

  abstract register(request: RegisterRequest): OnEvent<[ApiResponse<AuthUser>]>;

  abstract loadUser(): OnEvent<[ApiResponse<AuthUser>]>;

  abstract updateSettings(request: UpdateSettingsRequest): OnEvent<[ApiResponse<AuthUser>]>;

  abstract logout(): void;

}
