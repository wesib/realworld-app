import { UserProfile } from '../users';

export interface Comment {
  readonly id: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly body: string;
  readonly author: UserProfile;
}
