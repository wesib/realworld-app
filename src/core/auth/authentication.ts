import { ApiResponse } from '../api';

export interface AuthToken {
  readonly token: string;
  readonly email?: undefined;
  readonly username?: undefined;
  readonly failure?: undefined;
}

export interface NotAuthenticated {
  readonly token?: undefined;
  readonly email?: undefined;
  readonly username?: undefined;
  readonly failure?: ApiResponse.Failure;
}

export type Authentication =
    | NotAuthenticated
    | AuthToken
    | AuthUser;

export interface AuthUser {
  readonly email: string;
  readonly token: string;
  readonly username: string;
  readonly bio?: string;
  readonly image?: string;
  readonly failure?: undefined;
}
