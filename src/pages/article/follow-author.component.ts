import { HierarchyContext } from '@wesib/generic';
import { Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../common';
import { UserProfile } from '../../common/users';
import { escapeHtml } from '../../common/util';
import { CurrentArticle } from './current-article';

@Component(['follow-author', Conduit__NS])
export class FollowAuthorComponent {

  @StateProperty()
  private author?: UserProfile;

  constructor(private readonly _context: ComponentContext) {

    const hierarchy = _context.get(HierarchyContext);

    _context.whenOn(supply => {
      hierarchy.get(CurrentArticle).tillOff(supply)(article => {
        this.author = article.slug ? article.author : undefined;
      });
    });
  }

  @Render()
  render(): ElementRenderer {

    const { contentRoot }: { contentRoot: Element } = this._context;

    return () => {
      if (this.author) {
        contentRoot.className = this.author.following ? 'btn-outline-primary' : 'btn-outline-secondary';
        contentRoot.innerHTML = `<i class="ion-plus-round"></i> Follow ${escapeHtml(this.author.username)}`;
      } else {
        contentRoot.innerHTML = '';
      }

    };
  }

}
