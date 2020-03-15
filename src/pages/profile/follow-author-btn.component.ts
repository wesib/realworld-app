import { HierarchyContext } from '@wesib/generic';
import { Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { UserService, UserSupport } from '../../core/users';
import { escapeHtml } from '../../core/util';
import { CurrentUserProfile, noUserProfile } from './current-user-profile';

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

    const hierarchy = _context.get(HierarchyContext);
    const userService = _context.get(UserService);

    _context.whenOn(supply => {
      hierarchy.get(CurrentUserProfile).tillOff(supply).to(profile => {
        this.author = profile;
      });
    });
    _context.on('click').to(() => {

      const { author } = this;

      if (author.username) {

        const follow = !author.following;

        author.update({
          ...author,
          following: follow,
        });
        userService.followUser(author.username, follow).to(
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

    const { contentRoot }: { contentRoot: Element } = this._context;

    return () => {
      if (this.author.username) {
        contentRoot.className = this.author.following ? 'btn-secondary' : 'btn-outline-secondary';
        contentRoot.innerHTML = `<i class="ion-plus-round"></i> Follow ${escapeHtml(this.author.username)}`;
      } else {
        contentRoot.innerHTML = '';
      }

    };
  }

}
