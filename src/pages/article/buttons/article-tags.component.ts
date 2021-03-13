import { HandleNavLinks } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../../core';
import { RenderHTML } from '../../../reusable';
import { CurrentArticleShare } from '../current-article.share';

const noTags: readonly string[] = [];

@Component(
    ['article-tags', Conduit__NS],
    HandleNavLinks(),
)
export class ArticleTagsComponent {

  @StateProperty()
  tags: readonly string[] = noTags;

  constructor(private readonly _context: ComponentContext) {
    CurrentArticleShare.articleFor(_context)(article => {
      this.tags = article.slug ? article.tagList : noTags;
    }).whenOff(() => {
      this.tags = noTags;
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
