import { HandleNavLinks, HierarchyContext } from '@wesib/generic';
import { Component, ComponentContext, DomProperty, domPropertyPathTo } from '@wesib/wesib';
import { trackValue } from 'fun-events';
import { Conduit__NS } from '../../core';
import { escapeHtml } from '../../core/util';
import { RenderHTML } from '../../reusable';
import { ArticleMetaComponentsSupport } from '../article/article-meta-components-support.feature';
import { CurrentArticle } from '../article/current-article';

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

          if (!parentNode) {
            return;
          }
          target = parentNode as Element;
        }
      },
    }),
)
export class ArticlePreviewComponent {

  private readonly _article = trackValue<CurrentArticle>({});

  constructor(context: ComponentContext) {

    const hierarchy = context.get(HierarchyContext);

    context.whenOn(supply => {

      const off = hierarchy.provide({ a: CurrentArticle, is: this._article.read });

      supply.whenOff(off);
    });
  }

  get article(): CurrentArticle {
    return this._article.it;
  }

  @DomProperty({ propertyKey: 'feedArticle' })
  set article(value: CurrentArticle) {
    this._article.it = value;
  }

  @RenderHTML({ path: domPropertyPathTo('article') })
  get postMeta(): string | undefined {
    if (!this.article.slug) {
      return;
    }

    const postURL = `article/#/${encodeURIComponent(this.article.slug)}`;

    return `
<div class="post-meta">
<conduit-article-author></conduit-article-author>
<conduit-favorite-post1></conduit-favorite-post1>
</div>
<a href="${postURL}" class="preview-link">
<h1>${escapeHtml(this.article.title)}</h1>
<p class="post-content">${escapeHtml(this.article.description)}</p>
<span>Read more...</span>
</a>
`;
  }

}
