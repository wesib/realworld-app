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
import { Article, ArticleService } from '../../core/articles';
import { ArticlesSupport } from '../../core/articles/articles-support.feature';
import { RenderLoader } from '../../core/loader';
import { CurrentUserProfile, currentUserProfileBy, noUserProfile } from '../profile/current-user-profile';
import { FollowAuthorComponent } from '../profile/follow-author.component';
import { ArticleContentComponent } from './article-content.component';
import { ArticleMetaComponentsSupport } from './article-meta-components-support.feature';
import { CurrentArticle } from './current-article';

@Component(
    ['article', Conduit__NS],
    {
      feature: {
        needs: [
          ArticleContentComponent,
          ArticleMetaComponentsSupport,
          ArticlesSupport,
          FollowAuthorComponent,
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
    const author = currentUserProfileBy(
        this._response.read.keep.thru_(
            response => response && response.ok ? response.body.author : noUserProfile,
        ),
    );

    hierarchy.provide({
      a: CurrentArticle,
      is: this._response.read.keep.thru_(
          response => response && response.ok ? response.body : {},
      ),
    });
    hierarchy.provide({
      a: CurrentUserProfile,
      is: author,
    });
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
