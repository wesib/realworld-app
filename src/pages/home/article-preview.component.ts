import { HandleNavLinks } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, DomProperty, ElementRender, Render } from '@wesib/wesib';
import { Conduit__NS } from '../../common';
import { Article, ArticleService } from '../../common/articles';
import { escapeHtml } from '../../common/util';

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

  private _article: Article | undefined;
  private _contents: Node | undefined;

  constructor(private readonly _context: ComponentContext) {
  }

  get article(): Article | undefined {
    return this._article;
  }

  @DomProperty({ propertyKey: 'feedArticle' })
  set article(value: Article | undefined) {
    this._article = value;
    if (value) {
      this._context.get(ArticleService)
          .htmlContents(value)
          .then(contents => this.contents = contents)
          .catch(error => {
            console.log(`Failed to display article ${value.slug}`);
            this.contents = this._context.get(BootstrapWindow).document.createTextNode(`ERROR ${String(error)}`);
          });
    }
  }

  get contents(): Node | undefined {
    return this._contents;
  }

  set contents(value: Node | undefined) {

    const prev = this._contents;

    this._contents = value;
    this._context.updateState('contents', value, prev);
  }

  @Render()
  render(): ElementRender | void {
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
<p class="post-content"></p>
<span>Read more...</span>
</a>
`;

    return () => {

      const contents = this.contents;

      if (contents) {

        const postContent = content.querySelector('.post-content')!;

        postContent.innerHTML = '';
        postContent.appendChild(contents);
      }
    };
  }

}
