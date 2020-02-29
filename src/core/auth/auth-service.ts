import { ContextKey, ContextKey__symbol } from 'context-values';
import { AfterEvent, OnEvent } from 'fun-events';
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

  abstract readonly token: AfterEvent<[AuthToken | NotAuthenticated]>;

  abstract readonly authentication: AfterEvent<[Authentication]>;

  abstract login(request: LoginRequest): OnEvent<[ApiResponse<AuthUser>]>;

  abstract register(request: RegisterRequest): OnEvent<[ApiResponse<AuthUser>]>;

  abstract loadUser(): OnEvent<[ApiResponse<AuthUser>]>;

  abstract updateSettings(request: UpdateSettingsRequest): OnEvent<[ApiResponse<AuthUser>]>;

  abstract logout(): void;

}
