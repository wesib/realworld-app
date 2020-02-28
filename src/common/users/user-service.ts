import { ContextRef, SingleContextKey } from 'context-values';
import { OnEvent } from 'fun-events';
import { ApiResponse } from '../api';
import { UserProfile } from './user-profile';

export interface UserService {

  userProfile(username: string): OnEvent<[ApiResponse<UserProfile>]>;

  followUser(username: string, follow?: boolean): OnEvent<[ApiResponse<UserProfile>]>;

}

export const UserService: ContextRef<UserService> = (
    /*#__PURE__*/ new SingleContextKey<UserService>('user-service')
);
