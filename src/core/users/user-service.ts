import { ContextRef, SingleContextKey } from '@proc7ts/context-values';
import { OnEvent } from '@proc7ts/fun-events';
import { ApiResponse } from '../api';
import { UserProfile } from './user-profile';

export interface UserService {

  userProfile(username: string): OnEvent<[ApiResponse<UserProfile>]>;

  followUser(username: string, follow?: boolean): OnEvent<[ApiResponse<UserProfile>]>;

}

export const UserService: ContextRef<UserService> = (
    /*#__PURE__*/ new SingleContextKey<UserService>('user-service')
);
