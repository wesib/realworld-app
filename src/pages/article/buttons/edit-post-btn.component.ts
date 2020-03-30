import { HierarchyContext, Navigation, PageHashURLParam, PageHashURLSupport } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../../core';
import { RenderHTML } from '../../../reusable';
import { CurrentArticle, noArticle } from '../current-article';

@Component(
    ['edit-post-btn', Conduit__NS],
    {
      feature: {
        needs: PageHashURLSupport,
      },
    },
)
export class EditPostBtnComponent {

  @StateProperty()
  article: CurrentArticle = noArticle;

  constructor(private readonly _context: ComponentContext) {

    const navigation = _context.get(Navigation);
    const hierarchy = _context.get(HierarchyContext);

    hierarchy.get(CurrentArticle)
        .to(article => this.article = article)
        .whenOff(() => this.article = noArticle);
    this._context.on('click').to(() => {
      if (this.article.slug) {
        editArticle(this.article.slug);
      }
    });

    function editArticle(slug: string): void {
      navigation.with(PageHashURLParam, encodeURIComponent(slug))
          .open('editor/')
          .catch(error => console.error('Failed to edit article', error));
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

    i.className = 'ion-edit';
    fragment.append(' Edit Article');

    return fragment;
  }

}
