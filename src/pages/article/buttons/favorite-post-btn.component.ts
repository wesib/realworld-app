import { HierarchyContext } from '@wesib/generic';
import {
  BootstrapWindow,
  Component,
  ComponentContext,
  ContentRoot,
  ElementRenderer,
  Render,
  StateProperty,
} from '@wesib/wesib';
import { Conduit__NS } from '../../../core';
import { ArticleService, ArticlesSupport } from '../../../core/articles';
import { CurrentArticle, noArticle } from '../current-article';

@Component(
    ['favorite-post-btn', Conduit__NS],
    {
      feature: {
        needs: ArticlesSupport,
      },
    },
)
export class FavoritePostBtnComponent {

  @StateProperty()
  article: CurrentArticle = noArticle;

  constructor(private readonly _context: ComponentContext) {

    const hierarchy = _context.get(HierarchyContext);
    const articleService = _context.get(ArticleService);

    hierarchy.get(CurrentArticle)(article => {
      this.article = article;
    });
    _context.on('click')(() => {

      const { article } = this;

      if (article.slug) {

        const like = !article.favorited;

        article.update({
          ...article,
          favorited: like,
        });
        articleService.likeArticle(article.slug, like)(
            response => {
              if (this.article.slug) {
                if (response.ok) {
                  this.article.update(response.body);
                } else {
                  this.article.update(article);
                  console.error(`Failed to like article ${article.slug}`, response.errors);
                }
              }
            },
        );
      }
    });
  }

  @Render()
  render(): ElementRenderer {

    const { contentRoot, element } = this._context as { contentRoot: ContentRoot; element: Element };
    const { document } = this._context.get(BootstrapWindow);
    const icon = document.createElement('i');

    contentRoot.insertBefore(icon, contentRoot.childNodes[0]);

    const counter = contentRoot.appendChild(document.createElement('span'));

    counter.className = 'counter';

    return () => {
      icon.className = this.article.slug && this.article.favorited ? 'ion-heart' : 'ion-ios-heart-outline';
      counter.innerText = this.article.slug && this.article.favoritesCount ? String(this.article.favoritesCount) : '';
      element.className = this.article.slug && this.article.favorited ? 'btn-success' : 'btn-outline-success';
    };
  }

}
