import { afterAll, AfterEvent, mapAfter_, supplyAfter, trackValue } from '@proc7ts/fun-events';
import { HandleNavLinks, Shared } from '@wesib/generic';
import {
  Attribute,
  BootstrapWindow,
  Component,
  ComponentContext,
  isElement,
  StateProperty,
  statePropertyPathTo,
} from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { Article } from '../../core/articles';
import { AuthService, AuthUser, notAuthenticated, NotAuthenticated } from '../../core/auth';
import { RenderHTML } from '../../reusable';
import { ArticleButtonsSupport } from '../article/buttons';
import { CurrentArticle, CurrentArticleTracker, noArticle, NoArticle } from '../article/current-article';
import { CurrentArticleShare } from '../article/current-article.share';
import { ArticleListShare } from './article-list.share';

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

  private readonly _slug = trackValue<string>();
  private readonly _article = new CurrentArticleTracker();

  @StateProperty()
  user: AuthUser | NotAuthenticated = notAuthenticated;

  @Shared(CurrentArticleShare)
  readonly currentArticle: AfterEvent<[CurrentArticle]>;

  constructor(private readonly _context: ComponentContext) {
    this._article.byArticles(afterAll({
      list: ArticleListShare.articlesFor(_context),
      slug: this._slug,
    }).do(
        mapAfter_(({ list: [list], slug: [slug] }) => slug ? list.bySlug(slug) : noArticle),
    ));
    this._article.on((newArticle, oldArticle) => {
      _context.updateState(
          statePropertyPathTo('article'),
          newArticle,
          oldArticle,
      );
    });

    this.currentArticle = this._article.read;

    const authService = _context.get(AuthService);

    authService.user.do(supplyAfter(_context))(user => {
      this.user = user;
    }).whenOff(() => {
      this.user = notAuthenticated;
    });
  }

  get slug(): string | undefined {
    return this._slug.it;
  }

  @Attribute({ updateState: false })
  set slug(value: string | undefined) {
    this._slug.it = value;
  }

  get article(): Article | NoArticle {
    return this._article.it;
  }

  @RenderHTML()
  postMeta(): Node | undefined {
    if (!this.article.slug) {
      return;
    }

    const { author } = this.article;
    const { document } = this._context.get(BootstrapWindow);
    const fragment = document.createDocumentFragment();
    const meta = fragment.appendChild(document.createElement('div'));

    meta.className = 'post-meta';

    meta.appendChild(document.createElement('conduit-article-author'));

    if (this.user.username === author.username) {

      const editBtn = meta.appendChild(document.createElement('conduit-edit-post-btn'));

      editBtn.tabIndex = 0;

      const deleteBtn = meta.appendChild(document.createElement('conduit-delete-post-btn'));

      deleteBtn.tabIndex = 0;
    } else {

      const favoriteBtn = meta.appendChild(document.createElement('conduit-favorite-post-btn'));

      favoriteBtn.tabIndex = 0;
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

    return fragment;
  }

}
