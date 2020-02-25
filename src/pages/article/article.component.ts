import { HierarchyContext, Navigation, PageHashURLParam } from '@wesib/generic';
import { Component, ComponentContext, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../common';
import { ApiResponse } from '../../common/api';
import { Article, ArticleService, FeedSupport } from '../../common/articles';
import { LoaderComponent } from '../../generic/loader';
import { ArticleAuthorComponent } from './article-author.component';
import { CurrentArticle } from './current-article';

@Component(
    ['article', Conduit__NS],
    {
      feature: {
        needs: [
          ArticleAuthorComponent,
          FeedSupport,
          LoaderComponent,
        ],
      },
    },
)
export class ArticleComponent {

  private _response?: ApiResponse<Article>;

  constructor(private readonly _context: ComponentContext) {

    const articleService = _context.get(ArticleService);
    const navigation = _context.get(Navigation);

    _context.whenOn(supply => {
      navigation.read.tillOff(supply).consume(page => {

        const slug = page.get(PageHashURLParam).pathname.substring(0);

        return articleService.article(slug)(response => this.response = response);
      });
    });
  }

  get response(): ApiResponse<Article> | undefined {
    return this._response;
  }

  @StateProperty()
  set response(value: ApiResponse<Article> | undefined) {
    this._response = value;
    this._context.get(HierarchyContext).provide({ a: CurrentArticle, is: value && value.ok ? value.body : {} });
  }

}
