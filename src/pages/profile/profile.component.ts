import { HierarchyContext, Navigation } from '@wesib/generic';
import { Component, ComponentContext } from '@wesib/wesib';
import { trackValue } from 'fun-events';
import { Conduit__NS } from '../../core';
import { ApiResponse, notAuthenticatedError } from '../../core/api';
import { RenderLoader } from '../../core/loader';
import { UserProfile, UserService, UserSupport } from '../../core/users';
import { CurrentUserProfile, currentUserProfileBy, noUserProfile } from './current-user-profile';
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

  constructor(context: ComponentContext) {

    const userService = context.get(UserService);
    const navigation = context.get(Navigation);
    const hierarchy = context.get(HierarchyContext);
    const profile = currentUserProfileBy(
        this._response.read.keep.thru_(
            response => response && response.ok ? response.body : noUserProfile,
        ),
    );

    hierarchy.provide({ a: CurrentUserProfile, is: profile });
    context.whenOn(supply => {
      navigation.read
          .thru_(
              page => {

                const param = page.get(PageUserProfileParam);

                return param.author || param.favorited;
              },
          )
          .tillOff(supply)
          .consume(username => {
            if (!username) {
              this.response = { ok: false, errors: notAuthenticatedError() };
              return;
            }
            if (this.response && this.response.ok && this.response.body.username === username) {
              return; // User didn't change
            }
            return userService.userProfile(username)(response => this.response = response);
          });
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
