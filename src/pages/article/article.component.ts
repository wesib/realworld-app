import { HandleNavLinks, HierarchyContext, Navigation, PageHashURLParam } from '@wesib/generic';
import {
  BootstrapWindow,
  Component,
  ComponentContext,
  ElementRenderer,
  Render,
  StateProperty,
  statePropertyPathTo,
} from '@wesib/wesib';
import { trackValue } from 'fun-events';
import { Conduit__NS } from '../../core';
import { ApiResponse } from '../../core/api';
import { Article, ArticleService, ArticlesSupport } from '../../core/articles';
import { RenderLoader } from '../../core/loader';
import { CurrentUserProfile, currentUserProfileBy, noUserProfile } from '../profile/current-user-profile';
import { FollowAuthorBtnComponent } from '../profile/follow-author-btn.component';
import { ArticleCommentsComponent } from './article-comments.component';
import { ArticleContentComponent } from './article-content.component';
import { ArticleButtonsSupport } from './buttons';
import { CurrentArticle, CurrentArticleTracker, noArticle } from './current-article';
import { NewArticleCommentComponent } from './new-article-comment.component';

@Component(
    ['article', Conduit__NS],
    {
      feature: {
        needs: [
          ArticleCommentsComponent,
          ArticleContentComponent,
          ArticleButtonsSupport,
          ArticlesSupport,
          FollowAuthorBtnComponent,
          NewArticleCommentComponent,
        ],
      },
    },
    HandleNavLinks(),
)
export class ArticleComponent {

  private readonly _response = trackValue<ApiResponse<Article>>();

  constructor(private readonly _context: ComponentContext) {

    const articleService = _context.get(ArticleService);
    const navigation = _context.get(Navigation);
    const hierarchy = this._context.get(HierarchyContext);
    const article = new CurrentArticleTracker().byArticles(
        this._response.read.keep.thru_(
            response => response && response.ok ? response.body : noArticle,
        ),
    );
    const author = currentUserProfileBy(
        this._response.read.keep.thru_(
            response => response && response.ok ? response.body.author : noUserProfile,
        ),
    );

    hierarchy.provide({ a: CurrentArticle, is: article });
    hierarchy.provide({ a: CurrentUserProfile, is: author });
    _context.whenOn(supply => {
      navigation.read.tillOff(supply).consume(page => {

        const slug = decodeURIComponent(page.get(PageHashURLParam).pathname.substring(1));

        return articleService.article(slug)(response => this.response = response);
      });
    });
  }

  get response(): ApiResponse<Article> | undefined {
    return this._response.it;
  }

  @StateProperty()
  @RenderLoader()
  set response(value: ApiResponse<Article> | undefined) {
    this._response.it = value;
  }

  @Render({ path: statePropertyPathTo('response') })
  render(): ElementRenderer {

    const { document } = this._context.get(BootstrapWindow);

    return () => {

      const { response } = this;

      if (response && response.ok) {
        document.getElementById('article:title')!.innerText = response.body.title;
      }
    };
  }

}
