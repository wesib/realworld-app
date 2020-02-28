import { HierarchyContext } from '@wesib/generic';
import { Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../common';
import { escapeHtml } from '../../common/util';
import { CurrentUserProfile, noUserProfile } from './current-user-profile';

@Component(['follow-author', Conduit__NS])
export class FollowAuthorComponent {

  @StateProperty()
  private author: CurrentUserProfile = noUserProfile;

  constructor(private readonly _context: ComponentContext) {

    const hierarchy = _context.get(HierarchyContext);

    _context.whenOn(supply => {
      hierarchy.get(CurrentUserProfile).tillOff(supply)(profile => {
        this.author = profile;
      });
    });
  }

  @Render()
  render(): ElementRenderer {

    const { contentRoot }: { contentRoot: Element } = this._context;

    return () => {
      if (this.author.username) {
        contentRoot.className = this.author.following ? 'btn-outline-primary' : 'btn-outline-secondary';
        contentRoot.innerHTML = `<i class="ion-plus-round"></i> Follow ${escapeHtml(this.author.username)}`;
      } else {
        contentRoot.innerHTML = '';
      }

    };
  }

}
