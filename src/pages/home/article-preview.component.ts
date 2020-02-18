import { HandleNavLinks } from '@wesib/generic';
import { Component, ComponentContext, DomProperty, Render } from '@wesib/wesib';
import { Article, Conduit__NS, escapeHtml } from '../../common';

@Component(
    ['article-preview', Conduit__NS],
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

  constructor(private readonly _context: ComponentContext) {
  }

  @DomProperty({ propertyKey: 'feedArticle' })
  article: Article | undefined;

  @Render()
  render(): void {
    if (!this.article) {
      return;
    }

    const content = this._context.contentRoot as Element;
    const { author } = this.article;
    const profileURL = `profile/#${encodeURIComponent(author.username)}`;
    const profileImage = author.image ? `<img src="${encodeURI(author.image)}"/>` : '';
    const username = escapeHtml(author.username);
    const postDate = new Date(this.article.createdAt).toDateString();
    const postURL = `article/#${encodeURIComponent(this.article.slug)}`;
    const favIconClass = this.article.favorited ? 'ion-heart' : 'ion-ios-heart-outline';

    content.innerHTML = `
<div class="post-meta">
<a href="${profileURL}">${profileImage}</a>
<div class="info">
    <a href="${profileURL}" class="author">${username}</a>
    <span class="date">${postDate}</span>
</div>
<button class="btn btn-outline-primary btn-sm float-right">
  <i class="${favIconClass}"></i> ${this.article.favoritesCount}
</button>
</div>
<a href="${postURL}" class="preview-link">
<h1>${escapeHtml(this.article.title)}</h1>
<p>${this.article.body}</p>
<span>Read more...</span>
</a>
`;
  }

}
