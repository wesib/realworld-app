import { HierarchyContext } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRender, Render } from '@wesib/wesib';
import { Conduit__NS } from '../../common';
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

  constructor(private readonly _context: ComponentContext) {
  }

  @Render()
  render(): ElementRender {

    const document = this._context.get(BootstrapWindow).document;
    const hierarchy = this._context.get(HierarchyContext);
    const range = document.createRange();

    range.selectNodeContents(this._context.contentRoot);

    let articles: FeedArticleList;

    hierarchy.get(FeedArticleList)(list => {

      const prev = articles;

      articles = list;
      this._context.updateState('articles', list, prev);
    });

    return () => {
      range.deleteContents();
      if (!articles.articlesCount) {
        return;
      }

      const fragment = document.createDocumentFragment();

      articles.articles.forEach(article => {

        const element: any = fragment.appendChild(document.createElement('conduit-article-preview'));

        element.feedArticle = article;
      });

      range.insertNode(fragment);
    };
  }

}
