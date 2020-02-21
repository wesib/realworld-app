import { ActivateNavLink, HandleNavLinks, Navigation } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext } from '@wesib/wesib';
import { noop } from 'call-thru';
import { afterAll } from 'fun-events';
import { AuthService, Conduit__NS, PageFeedParam } from '../../common';

@Component(
    ['feed-toggle', Conduit__NS],
    ActivateNavLink({ active: 'active' }),
    HandleNavLinks(),
)
export class FeedToggleComponent {

  constructor(context: ComponentContext) {

    const { document } = context.get(BootstrapWindow);
    const navigation = context.get(Navigation);
    const authService = context.get(AuthService);

    context.whenOn(supply => {
      afterAll({
        user: authService.user,
        page: navigation,
      }).tillOff(supply)(
          ({
            user: [user],
            page: [page],
          }) => {

            const { url } = page;
            const baseURL = new URL(document.baseURI);

            if (url.pathname !== baseURL.pathname) {
              return; // Not a home page
            }

            const { feed } = page.get(PageFeedParam);

            if (feed !== '/personal-feed') {
              return; // Global feed
            }
            if (!user /* not authenticated */) {
              // Redirect to global feed
              navigation.with(PageFeedParam, {}).replace().catch(noop);
            }
          },
      );
    });
  }

}
