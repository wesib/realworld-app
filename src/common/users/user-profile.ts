export interface UserProfile {
  readonly username: string;
  readonly bio?: string;
  readonly image?: string;
  readonly following: boolean;
}
