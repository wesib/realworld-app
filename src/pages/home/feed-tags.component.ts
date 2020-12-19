import { supplyAfter, supplyOn } from '@proc7ts/fun-events';
import { HandleNavLinks, Navigation, Page } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { FeedService } from '../../core/feed';
import { PageFeedParam } from './page-feed-param';

@Component(
    ['feed-tags', Conduit__NS],
    HandleNavLinks(),
)
export class FeedTagsComponent {

  @StateProperty()
  private tags: string[] = [];

  @StateProperty()
  private page?: Page;

  constructor(private readonly _context: ComponentContext) {

    const feedService = this._context.get(FeedService);
    const navigation = this._context.get(Navigation);

    _context.whenConnected(() => {
      navigation.read.do(supplyAfter(_context))(page => this.page = page);
      feedService.tags.do(supplyOn(_context))((...tags) => this.tags = tags);
    });
  }

  @Render()
  render(): ElementRenderer {

    const { document } = this._context.get(BootstrapWindow);
    const range = document.createRange();
    const { contentRoot } = this._context;

    range.selectNodeContents(contentRoot);
    range.setStartAfter(contentRoot.childNodes[contentRoot.childNodes.length - 1]);

    return () => {
      range.deleteContents();
      if (!this.page) {
        return;
      }

      const navigation = this._context.get(Navigation);
      const fragment = document.createDocumentFragment();
      const request = this.page.get(PageFeedParam);

      this.tags.forEach(tag => {

        const target = navigation.with(PageFeedParam, { ...request, tag, feed: undefined, offset: 0 }).pretend();

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
