export interface AuthUser {
  readonly email: string;
  readonly token: string;
  readonly username?: string;
  readonly bio?: string;
  readonly image?: string;
}
