import { Navigation } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRender, Render } from '@wesib/wesib';
import { DomEventDispatcher } from 'fun-events/dom';
import { Conduit__NS, FeedService, PageFeedParam } from '../../common';

@Component(['feed-tags', Conduit__NS])
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

    const navigation = this._context.get(Navigation);
    const { document } = this._context.get(BootstrapWindow);
    const range = document.createRange();
    const { contentRoot }: { contentRoot: Element } = this._context;

    range.selectNodeContents(contentRoot);
    range.setStartAfter(contentRoot.childNodes[contentRoot.childNodes.length - 1]);

    return () => {
      range.deleteContents();

      const fragment = document.createDocumentFragment();

      this.tags.forEach(tag => {

        const a = fragment.appendChild(document.createElement('a'));

        a.href = '';
        a.innerText = tag;
        new DomEventDispatcher(a).on('click').instead(() => {

          const request = navigation.page.get(PageFeedParam);

          navigation.with(PageFeedParam, { ...request, tag, offset: 0 }).open();
        });
      });

      range.insertNode(fragment);
    };
  }

}
