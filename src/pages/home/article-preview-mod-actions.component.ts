import { HierarchyContext, Navigation, PageHashURLParam } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, StateProperty } from '@wesib/wesib';
import { DomEventDispatcher } from 'fun-events/dom';
import { Conduit__NS } from '../../core';
import { ArticleService, ArticlesSupport } from '../../core/articles';
import { RenderHTML } from '../../reusable';
import { CurrentArticle, noArticle } from '../article/current-article';
import { ArticleUpdateEvent } from './article-update-event';

@Component(
    ['article-preview-mod-actions', Conduit__NS],
    {
      feature: {
        needs: ArticlesSupport,
      },
    },
)
export class ArticlePreviewModActionsComponent {

  @StateProperty()
  article: CurrentArticle = noArticle;

  constructor(private readonly _context: ComponentContext) {

    const hierarchy = _context.get(HierarchyContext);

    _context.whenOn(supply => {
      hierarchy.get(CurrentArticle)
          .tillOff(supply)(article => this.article = article)
          .whenOff(() => this.article = noArticle);
    });
  }

  @RenderHTML()
  render(): Node | undefined {

    const { article } = this;

    if (!article.slug) {
      return;
    }

    const { slug } = article;
    const context = this._context;
    const navigation = context.get(Navigation);
    const articleService = context.get(ArticleService);
    const { document } = context.get(BootstrapWindow);
    const fragment = document.createDocumentFragment();
    const edit = fragment.appendChild(createButton('Edit Article', 'ion-edit'));

    edit.classList.add('btn-outline-secondary');
    new DomEventDispatcher(edit).on('click').just(editArticle);

    const remove = fragment.appendChild(createButton('Delete Article', 'ion-trash-a'));

    remove.classList.add('btn-outline-danger');
    new DomEventDispatcher(remove).on('click').just(deleteArticle);

    return fragment;

    function createButton(label: string, icon: string): HTMLButtonElement {

      const button = document.createElement('button');

      button.type = 'button';
      button.className = 'btn btn-sm btn-outline-secondary';

      const i = button.appendChild(document.createElement('i'));

      i.className = icon;

      button.append(' ', label);

      return button;
    }

    function editArticle(): void {
      navigation.with(PageHashURLParam, encodeURIComponent(slug))
          .open('editor/')
          .catch(error => console.error('Failed to edit article', error));
    }

    function deleteArticle(): void {
      if (!confirm('Are you sure you want to delete this article?')) {
        return;
      }
      articleService.deleteArticle(slug).once(response => {
        if (response.ok) {
          context.dispatchEvent(new ArticleUpdateEvent(
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

}
