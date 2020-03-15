import { HierarchyContext } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { CurrentUserProfile, noUserProfile } from './current-user-profile';
import { FollowAuthorBtnComponent } from './follow-author-btn.component';

@Component(
    ['user-info', Conduit__NS],
    {
      feature: {
        needs: FollowAuthorBtnComponent,
      },
    },
)
export class UserInfoComponent {

  @StateProperty()
  private profile: CurrentUserProfile = noUserProfile;

  constructor(private readonly _context: ComponentContext) {

    const hierarchy = _context.get(HierarchyContext);

    hierarchy.get(CurrentUserProfile).to(
        profile => this.profile = profile,
    );
  }

  @Render()
  render(): ElementRenderer {

    const { document } = this._context.get(BootstrapWindow);

    return () => {

      const { profile } = this;
      document.getElementById('user:image')?.setAttribute('src', profile.username && profile.image || '');

      const username = document.getElementById('user:username');

      if (username) {
        username.innerText = profile.username || '';
      }

      const bio = document.getElementById('user:bio');

      if (bio) {
        bio.innerText = profile.username && profile.bio || '';
      }
    };
  }

}
