import { HandleNavLinks, HierarchyContext } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, DomProperty, isElement, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { Article } from '../../core/articles';
import { AuthService, AuthUser, notAuthenticated, NotAuthenticated } from '../../core/auth';
import { RenderHTML } from '../../reusable';
import { ArticleButtonsSupport } from '../article/buttons';
import { CurrentArticle, CurrentArticleTracker, NoArticle } from '../article/current-article';

@Component(
    ['article-preview', Conduit__NS],
    {
      feature: {
        needs: [
          ArticleButtonsSupport,
        ],
      },
    },
    HandleNavLinks({
      href(event) {

        let target = event.target as Element;

        for (;;) {

          const href = target.getAttribute('href');

          if (href != null) {
            return href;
          }

          const { parentNode } = target;

          if (!parentNode || !isElement(parentNode)) {
            return;
          }

          target = parentNode;
        }
      },
    }),
)
export class ArticlePreviewComponent {

  private readonly _article = new CurrentArticleTracker();

  @StateProperty()
  user: AuthUser | NotAuthenticated = notAuthenticated;

  constructor(private readonly _context: ComponentContext) {

    const authService = _context.get(AuthService);
    const hierarchy = _context.get(HierarchyContext);

    _context.whenOn(supply => {
      authService.user()
          .tillOff(supply)
          .to(user => this.user = user)
          .whenOff(() => this.user = notAuthenticated);

      const off = hierarchy.provide({ a: CurrentArticle, is: this._article });

      supply.whenOff(off);
    });
  }

  get article(): Article | NoArticle {
    return this._article.it;
  }

  @DomProperty({ propertyKey: 'feedArticle' })
  set article(value: Article | NoArticle) {
    this._article.set(value);
  }

  @RenderHTML()
  postMeta(): Node | undefined {
    if (!this.article.slug) {
      return;
    }

    console.log('[article', this.article.slug);

    const { author } = this.article;
    const { document } = this._context.get(BootstrapWindow);
    const fragment = document.createDocumentFragment();
    const meta = fragment.appendChild(document.createElement('div'));

    meta.className = 'post-meta';
    meta.appendChild(document.createElement('conduit-article-author'));
    if (this.user.username === author.username) {
      meta.appendChild(document.createElement('conduit-edit-post-btn')).tabIndex = 0;
      meta.appendChild(document.createElement('conduit-delete-post-btn')).tabIndex = 0;
    } else {
      meta.appendChild(document.createElement('conduit-favorite-post-btn')).tabIndex = 0;
    }

    const previewLink = fragment.appendChild(document.createElement('a'));

    previewLink.className = 'preview-link';
    previewLink.setAttribute('href', `article/#/${encodeURIComponent(this.article.slug)}`);

    const title = previewLink.appendChild(document.createElement('h1'));

    title.innerText = this.article.title;

    const description = previewLink.appendChild(document.createElement('p'));

    description.innerText = this.article.description;

    const readMore = previewLink.appendChild(document.createElement('span'));

    readMore.innerText = 'Read more...';
    previewLink.appendChild(document.createElement('conduit-article-tags'));

    console.log(']article', this.article.slug);

    return fragment;
  }

}
