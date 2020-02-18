import { ActivateNavLink, HandleNavLinks, Navigation } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext } from '@wesib/wesib';
import { noop } from 'call-thru';
import { afterAll } from 'fun-events';
import { AuthService, Conduit__NS, hashURL, setHashURL } from '../../common';

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
            page: [{ url }],
          }) => {

            const baseURL = new URL(document.baseURI);

            if (url.pathname !== baseURL.pathname) {
              return; // Not a home page
            }

            const hash = hashURL(url);
            const feed = hash.pathname.substring(1);

            if (!feed) {
              return; // Global feed
            }
            if (feed !== 'personal' /* invalid feed */ || !user /* not authenticated */) {
              // Redirect to global feed
              hash.pathname = '';
              navigation.replace(setHashURL(url, hash)).catch(noop);
            }
          },
      );
    });
  }

}
