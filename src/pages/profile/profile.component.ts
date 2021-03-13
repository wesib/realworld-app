import { AfterEvent, consumeEvents, mapAfter_, mapOn_, supplyOn, trackValue } from '@proc7ts/fun-events';
import { Navigation, Shared } from '@wesib/generic';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { ApiResponse, notAuthenticatedError } from '../../core/api';
import { RenderLoader } from '../../core/loader';
import { UserProfile, UserService, UserSupport } from '../../core/users';
import { CurrentUserProfile, currentUserProfileBy, noUserProfile } from './current-user-profile';
import { CurrentUserShare } from './current-user.share';
import { PageUserProfileParam } from './page-user-profile-param';
import { UserFeedToggleComponent } from './user-feed-toggle.component';
import { UserFeedComponent } from './user-feed.component';
import { UserInfoComponent } from './user-info.component';

@Component(
    ['profile', Conduit__NS],
    {
      feature: {
        needs: [
          UserFeedComponent,
          UserFeedToggleComponent,
          UserInfoComponent,
          UserSupport,
        ],
      },
    },
)
export class ProfileComponent {

  private readonly _response = trackValue<ApiResponse<UserProfile>>();

  @Shared(CurrentUserShare)
  readonly profile: AfterEvent<[CurrentUserProfile]>;

  constructor(context: ComponentContext) {

    const userService = context.get(UserService);
    const navigation = context.get(Navigation);
    const profile = currentUserProfileBy(
        this._response.read.do(
            mapAfter_(response => response && response.ok ? response.body : noUserProfile),
        ),
    );

    this.profile = profile.read;

    context.whenConnected(() => {
      navigation.read.do(
          mapOn_(page => {

            const param = page.get(PageUserProfileParam);

            return param.author || param.favorited;
          }),
          supplyOn(context),
          consumeEvents(username => {
            if (!username) {
              this.response = { ok: false, errors: notAuthenticatedError() };
              return;
            }
            if (this.response && this.response.ok && this.response.body.username === username) {
              return; // User didn't change
            }

            return userService.userProfile(username)(
                response => this.response = response,
            );
          }),
      );
    });
  }

  get response(): ApiResponse<UserProfile> | undefined {
    return this._response.it;
  }

  @RenderLoader()
  set response(value: ApiResponse<UserProfile> | undefined) {
    this._response.it = value;
  }

}
