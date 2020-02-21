import { ContextKey, ContextKey__symbol } from 'context-values';
import { AfterEvent, OnEvent } from 'fun-events';
import { ApiResponse } from '../api';
import { AuthService__key } from './auth-service.key.impl';
import { Authentication, AuthUser, AuthUserOrFailure } from './authentication';

export interface LoginRequest {
  readonly email: string;
  readonly password: string;
}

export interface RegisterRequest {
  readonly username: string;
  readonly email: string;
  readonly password: string;
}

export abstract class AuthService {

  static get [ContextKey__symbol](): ContextKey<AuthService> {
    return AuthService__key;
  }

  abstract readonly authentication: AfterEvent<[Authentication]>;

  abstract readonly user: AfterEvent<AuthUserOrFailure>;

  abstract login(request: LoginRequest): OnEvent<[ApiResponse<AuthUser>]>;

  abstract register(request: RegisterRequest): OnEvent<[ApiResponse<AuthUser>]>;

  abstract logout(): void;

}
