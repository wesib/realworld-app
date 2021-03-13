import { escapeHTML } from '@frontmeans/httongue';
import { Component, ComponentContext, ContentRoot, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { UserService, UserSupport } from '../../core/users';
import { CurrentUserProfile, noUserProfile } from './current-user-profile';
import { CurrentUserShare } from './current-user.share';

@Component(
    ['follow-author-btn', Conduit__NS],
    {
      feature: {
        needs: UserSupport,
      },
    },
)
export class FollowAuthorBtnComponent {

  @StateProperty()
  private author: CurrentUserProfile = noUserProfile;

  constructor(private readonly _context: ComponentContext) {

    const userService = _context.get(UserService);

    CurrentUserShare.userFor(_context)(profile => {
      this.author = profile;
    });
    _context.on('click')(() => {

      const { author } = this;

      if (author.username) {

        const follow = !author.following;

        author.update({
          ...author,
          following: follow,
        });
        userService.followUser(author.username, follow)(
            response => {
              if (this.author.username) {
                if (response.ok) {
                  this.author.update(response.body);
                } else {
                  this.author.update(author);
                  console.error(`Failed to follow user ${author.username}`, response.errors);
                }
              }
            },
        );
      }
    });
  }

  @Render()
  render(): ElementRenderer {

    const { contentRoot, element } = this._context as { contentRoot: ContentRoot; element: Element };

    return () => {
      if (this.author.username) {
        element.className = this.author.following ? 'btn-secondary' : 'btn-outline-secondary';
        contentRoot.innerHTML = `<i class="ion-plus-round"></i> Follow ${escapeHTML(this.author.username)}`;
      } else {
        contentRoot.innerHTML = '';
      }

    };
  }

}
