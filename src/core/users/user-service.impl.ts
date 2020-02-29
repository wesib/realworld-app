import { BootstrapContext } from '@wesib/wesib';
import { OnEvent } from 'fun-events';
import { ApiFetch, ApiRequest, ApiResponse } from '../api';
import { UserProfile } from './user-profile';
import { UserService } from './user-service';

export class UserService$ implements UserService {

  private readonly _fetch: ApiFetch;

  constructor(context: BootstrapContext) {
    this._fetch = context.get(ApiFetch);
  }

  userProfile(username: string): OnEvent<[ApiResponse<UserProfile>]> {

    const apiRequest: ApiRequest<UserProfile> = {
      path: 'profiles/' + encodeURIComponent(username),
      init: {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
      respondAs: 'profile',
    };

    return this._fetch(apiRequest);
  }

  followUser(username: string, follow?: boolean): OnEvent<[ApiResponse<UserProfile>]> {

    const apiRequest: ApiRequest<UserProfile> = {
      path: 'profiles/' + encodeURIComponent(username) + '/follow',
      init: {
        method: follow ? 'POST' : 'DELETE',
        headers: {
          Accept: 'application/json',
        },
      },
      respondAs: 'profile',
      auth: true,
    };

    return this._fetch(apiRequest);
  }

}
