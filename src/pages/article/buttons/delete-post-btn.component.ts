import { HierarchyContext } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../../core';
import { ArticleService, ArticlesSupport } from '../../../core/articles';
import { RenderHTML } from '../../../reusable';
import { CurrentArticle, noArticle } from '../current-article';
import { ArticleEvent } from './article-event';

@Component(
    ['delete-post-btn', Conduit__NS],
    {
      feature: {
        needs: ArticlesSupport,
      },
    },
)
export class DeletePostBtnComponent {

  @StateProperty()
  article: CurrentArticle = noArticle;

  constructor(private readonly _context: ComponentContext) {

    const articleService = _context.get(ArticleService);
    const hierarchy = _context.get(HierarchyContext);

    _context.whenOn(supply => {
      hierarchy.get(CurrentArticle)
          .tillOff(supply)
          .to(article => this.article = article)
          .whenOff(() => this.article = noArticle);
      _context.on('click').just(() => {
        if (this.article.slug) {
          deleteArticle(this.article.slug);
        }
      });
    });

    function deleteArticle(slug: string): void {
      if (!confirm('Are you sure you want to delete this article?')) {
        return;
      }
      articleService.deleteArticle(slug).once(response => {
        if (response.ok) {
          _context.dispatchEvent(new ArticleEvent(
              'conduit:article',
              {
                bubbles: true,
                detail: { removed: slug },
              },
          ));
        } else {
          console.error('Failed to remove article', response.errors);
        }
      });
    }
  }

  @RenderHTML()
  render(): Node | undefined {

    const { article } = this;

    if (!article.slug) {
      return;
    }

    const { document } = this._context.get(BootstrapWindow);
    const fragment = document.createDocumentFragment();

    const i = fragment.appendChild(document.createElement('i'));

    i.className = 'ion-trash-a';
    fragment.append(' Delete Article');

    return fragment;


  }

}
