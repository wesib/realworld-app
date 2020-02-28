import { HierarchyContext } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../common';
import { CurrentArticle } from './current-article';

@Component(['favorite-post', Conduit__NS])
export class FavoritePostComponent {

  @StateProperty()
  private _post?: { favorited: boolean; favoritesCount: number };

  constructor(private readonly _context: ComponentContext) {

    const hierarchy = _context.get(HierarchyContext);

    _context.whenOn(supply => {
      hierarchy.get(CurrentArticle).tillOff(supply)(article => {
        this._post = article.slug
            ? { favorited: article.favorited, favoritesCount: article.favoritesCount }
            : undefined;
      });
    });
  }

  @Render()
  render(): ElementRenderer {

    const { contentRoot }: { contentRoot: HTMLElement } = this._context;
    const { document } = this._context.get(BootstrapWindow);
    const icon = document.createElement('i');

    contentRoot.insertBefore(icon, contentRoot.childNodes[0]);

    const counter = contentRoot.appendChild(document.createElement('span'));

    counter.className = 'counter';

    return () => {
      icon.className = this._post && this._post.favorited ? 'ion-heart' : 'ion-ios-heart-outline';
      counter.innerText = this._post && this._post.favoritesCount ? String(this._post.favoritesCount) : '';
      contentRoot.className = this._post && this._post.favorited ? 'btn-secondary' : 'btn-outline-secondary';
    };
  }

}
