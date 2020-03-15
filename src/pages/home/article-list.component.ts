import { HierarchyContext } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { ArticlePreviewComponent } from './article-preview.component';
import { FeedArticleList } from './feed-article-list';

@Component(
    ['article-list', Conduit__NS],
    {
      feature: {
        needs: ArticlePreviewComponent,
      },
    },
)
export class ArticleListComponent {

  @StateProperty()
  articles: FeedArticleList = { articles: [], articlesCount: 0 };

  constructor(private readonly _context: ComponentContext) {

    const hierarchy = _context.get(HierarchyContext);

    _context.whenOn(supply => {
      hierarchy.get(FeedArticleList).tillOff(supply).to(list => this.articles = list);
    });
  }

  @Render()
  render(): ElementRenderer {

    const document = this._context.get(BootstrapWindow).document;
    const range = document.createRange();

    range.selectNodeContents(this._context.contentRoot);

    return () => {
      range.deleteContents();
      if (!this.articles.articlesCount) {
        return;
      }
      console.log('LIST');

      const fragment = document.createDocumentFragment();

      this.articles.articles.forEach(article => {

        const element: any = fragment.appendChild(document.createElement('conduit-article-preview'));

        element.feedArticle = article;
      });

      range.insertNode(fragment);
    };
  }

}
