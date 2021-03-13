import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { ArticleList, noArticles } from '../../core/feed';
import { renderNow } from '../../core/util';
import { ArticleListShare } from './article-list.share';
import { ArticlePreviewComponent, ArticlePreviewEl } from './article-preview.component';

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
  articles: ArticleList = noArticles;

  constructor(private readonly _context: ComponentContext) {
    ArticleListShare.articlesFor(_context)(list => {
      this.articles = list;
    }).whenOff(() => {
      this.articles = noArticles;
    });
  }

  @Render()
  render(): ElementRenderer {

    const document = this._context.get(BootstrapWindow).document;
    const range = document.createRange();

    range.selectNodeContents(this._context.contentRoot);

    return () => {
      range.deleteContents();
      if (!this.articles.count) {
        return;
      }

      const fragment = document.createDocumentFragment();

      this.articles.list.forEach(article => {

        const previewElt = fragment.appendChild(document.createElement('conduit-article-preview') as ArticlePreviewEl);

        previewElt.feedArticle = article;
        renderNow(previewElt, this._context);
      });

      range.insertNode(fragment);
    };
  }

}
