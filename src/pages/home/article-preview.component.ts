import { HandleNavLinks, HierarchyContext } from '@wesib/generic';
import { Component, ComponentContext, DomProperty, isElement } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { Article } from '../../core/articles';
import { escapeHtml } from '../../core/util';
import { RenderHTML } from '../../reusable';
import { ArticleMetaComponentsSupport } from '../article/article-meta-components-support.feature';
import { CurrentArticle, CurrentArticleTracker, NoArticle } from '../article/current-article';

@Component(
    ['article-preview', Conduit__NS],
    {
      feature: {
        needs: [
          ArticleMetaComponentsSupport,
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

  constructor(context: ComponentContext) {

    const hierarchy = context.get(HierarchyContext);

    context.whenOn(supply => {

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
  postMeta(): string | undefined {
    if (!this.article.slug) {
      return;
    }

    const postURL = `article/#/${encodeURIComponent(this.article.slug)}`;

    return `
<div class="post-meta">
<conduit-article-author></conduit-article-author>
<conduit-favorite-post></conduit-favorite-post>
</div>
<a href="${postURL}" class="preview-link">
<h1>${escapeHtml(this.article.title)}</h1>
<p class="post-content">${escapeHtml(this.article.description)}</p>
<span>Read more...</span>
</a>
`;
  }

}
