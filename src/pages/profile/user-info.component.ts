import { HierarchyContext } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../common';
import { FollowAuthorComponent } from './follow-author.component';
import { CurrentUserProfile, noUserProfile } from './current-user-profile';

@Component(
    ['user-info', Conduit__NS],
    {
      feature: {
        needs: FollowAuthorComponent,
      },
    },
)
export class UserInfoComponent {

  @StateProperty()
  private profile: CurrentUserProfile = noUserProfile;

  constructor(private readonly _context: ComponentContext) {

    const hierarchy = _context.get(HierarchyContext);

    hierarchy.get(CurrentUserProfile)(
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
