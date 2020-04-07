import { HierarchyContext } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { noArticles } from '../../core/feed';
import { renderNow } from '../../core/util';
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
  articles: FeedArticleList = noArticles;

  constructor(private readonly _context: ComponentContext) {

    const hierarchy = _context.get(HierarchyContext);

    hierarchy.get(FeedArticleList)
        .to(list => this.articles = list)
        .whenOff(() => this.articles = noArticles);
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

      const fragment = document.createDocumentFragment();

      this.articles.articles.forEach(article => {

        const previewElt: any = fragment.appendChild(document.createElement('conduit-article-preview'));

        previewElt.feedArticle = article;
        renderNow(previewElt, this._context);
      });

      range.insertNode(fragment);
    };
  }

}
