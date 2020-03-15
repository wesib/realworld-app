import { HandleNavLinks, HierarchyContext } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../../core';
import { RenderHTML } from '../../../reusable';
import { CurrentArticle } from '../current-article';

const noTags: readonly string[] = [];

@Component(
    ['article-tags', Conduit__NS],
    HandleNavLinks(),
)
export class ArticleTagsComponent {

  @StateProperty()
  tags: readonly string[] = noTags;

  constructor(private readonly _context: ComponentContext) {

    const hierarchy = _context.get(HierarchyContext);

    _context.whenOn(supply => {
      hierarchy.get(CurrentArticle)
          .tillOff(supply)
          .to(article => this.tags = article.slug ? article.tagList : noTags)
          .whenOff(() => this.tags = []);
    });
  }

  @RenderHTML()
  render(): Node | undefined {
    if (!this.tags.length) {
      return;
    }

    const { document } = this._context.get(BootstrapWindow);
    const ul = document.createElement('ul');

    this.tags.forEach(tag => {

      const li = ul.appendChild(document.createElement('li'));
      const a = li.appendChild(document.createElement('a'));

      a.href = `#/?tag=${encodeURIComponent(tag)}`;
      a.innerText = tag;
    });

    return ul;
  }

}
