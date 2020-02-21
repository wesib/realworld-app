import { HandleNavLinks, Navigation, Page } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRender, Render } from '@wesib/wesib';
import { Conduit__NS, FeedService } from '../../common';
import { PageFeedParam } from './page-feed-param';

@Component(
    ['feed-tags', Conduit__NS],
    HandleNavLinks(),
)
export class FeedTagsComponent {

  private _tags: string[] = [];

  constructor(private readonly _context: ComponentContext) {

    const feedService = this._context.get(FeedService);

    _context.whenOn(supply => {
      feedService.tags().tillOff(supply)((...tags) => this.tags = tags);
    });
  }

  get tags(): string[] {
    return this._tags;
  }

  set tags(value: string[]) {

    const prev = this._tags;

    this._tags = value;
    this._context.updateState('tags', value, prev);
  }

  @Render()
  render(): ElementRender {

    const { document } = this._context.get(BootstrapWindow);
    const range = document.createRange();
    const { contentRoot }: { contentRoot: Element } = this._context;

    range.selectNodeContents(contentRoot);
    range.setStartAfter(contentRoot.childNodes[contentRoot.childNodes.length - 1]);

    const navigation = this._context.get(Navigation);
    let page: Page;

    navigation.read(p => {

      const prev = page;

      page = p;
      this._context.updateState('page', page, prev);
    });

    return () => {
      range.deleteContents();

      const fragment = document.createDocumentFragment();
      const request = page.get(PageFeedParam);

      this.tags.forEach(tag => {

        const target = navigation.with(PageFeedParam, { ...request, tag, offset: 0 }).pretend();

        if (target) {

          const a = fragment.appendChild(document.createElement('a'));

          a.href = target.url.href;
          a.innerText = tag;
        }
      });

      range.insertNode(fragment);
    };
  }

}
