import { BootstrapWindow, Component, ComponentContext, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { AuthService, AuthUser, notAuthenticated, NotAuthenticated } from '../../core/auth';
import { RenderHTML } from '../../reusable';
import { ArticleButtonsSupport } from './buttons';
import { DeletePostBtnComponent } from './buttons/delete-post-btn.component';
import { EditPostBtnComponent } from './buttons/edit-post-btn.component';
import { CurrentArticle, noArticle } from './current-article';
import { CurrentArticleShare } from './current-article.share';

@Component(
    ['article-actions', Conduit__NS],
    {
      feature: {
        needs: [
          ArticleButtonsSupport,
          DeletePostBtnComponent,
          EditPostBtnComponent,
        ],
      },
    },
)
export class ArticleActionsComponent {

  @StateProperty()
  user: AuthUser | NotAuthenticated = notAuthenticated;

  @StateProperty()
  article: CurrentArticle = noArticle;

  constructor(private readonly _context: ComponentContext) {

    const authService = _context.get(AuthService);

    authService.user(user => {
      this.user = user;
    }).needs(_context).whenOff(() => {
      this.user = notAuthenticated;
    });
    CurrentArticleShare.articleFor(_context)(article => {
      this.article = article;
    });
  }

  @RenderHTML()
  render(): Node | undefined {

    const { document } = this._context.get(BootstrapWindow);
    const fragment = document.createDocumentFragment();

    if (this.article.slug && this.article.author.username === this.user.username) {

      const editBtn = fragment.appendChild(document.createElement('conduit-edit-post-btn'));

      editBtn.tabIndex = 0;

      const deleteBtn = fragment.appendChild(document.createElement('conduit-delete-post-btn'));

      deleteBtn.tabIndex = 0;
    } else {

      const followAuthorBtn = fragment.appendChild(document.createElement('conduit-follow-author-btn'));

      followAuthorBtn.tabIndex = 0;

      const favoritePostBtn = fragment.appendChild(document.createElement('conduit-favorite-post-btn'));

      favoritePostBtn.innerText = 'Favorite Post';
      favoritePostBtn.tabIndex = 0;
    }

    return fragment;
  }

}
