import { afterAll } from '@proc7ts/fun-events';
import { noop } from '@proc7ts/primitives';
import { ActivateNavLink, HandleNavLinks, Navigation } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { AuthService } from '../../core/auth';
import { FeedRequest } from '../../core/feed';
import { PageFeedParam } from './page-feed-param';

@Component(
    ['feed-toggle', Conduit__NS],
    ActivateNavLink({ active: 'active' }),
    HandleNavLinks(),
)
export class FeedToggleComponent {

  @StateProperty()
  request: FeedRequest = {};

  constructor(private readonly _context: ComponentContext) {

    const { document } = _context.get(BootstrapWindow);
    const navigation = _context.get(Navigation);
    const authService = _context.get(AuthService);

    _context.whenConnected(() => {
      afterAll({
        auth: authService.authentication(),
        page: navigation,
      }).tillOff(_context).to(
          ({
            auth: [{ token }],
            page: [page],
          }) => {

            const { url } = page;
            const baseURL = new URL(document.baseURI);

            if (url.pathname !== baseURL.pathname) {
              return; // Not a home page
            }

            const request = this.request = page.get(PageFeedParam);
            const { feed } = request;

            if (feed !== '/personal-feed') {
              return; // Global feed
            }
            if (!token /* not authenticated */) {
              // Redirect to global feed
              navigation.with(PageFeedParam, {}).replace().catch(noop);
            }
          },
      );
    });
  }

  @Render()
  render(): ElementRenderer {

    const navigation = this._context.get(Navigation);
    const { document } = this._context.get(BootstrapWindow);
    const { element }: { element: Element } = this._context;
    const ul = element.querySelector('ul')!;
    const range = document.createRange();

    range.setStartAfter(ul.appendChild(document.createComment('[TAG[')));
    range.setEndBefore(ul.appendChild(document.createComment(']TAG]')));

    return () => {
      range.deleteContents();

      const { tag } = this.request;

      if (!tag) {
        return;
      }

      const target = navigation.with(PageFeedParam, { tag }).pretend();

      if (!target) {
        return;
      }

      const li = document.createElement('li');

      li.className = 'nav-item';

      const a = li.appendChild(document.createElement('a'));

      a.className = 'nav-link';
      a.innerText = `#${tag}`;
      a.setAttribute('href', target.url.hash);

      range.insertNode(li);
    };
  }

}
