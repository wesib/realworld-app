import { ActivateNavLink, HandleNavLinks, Navigation } from '@wesib/generic';
import { Component, ComponentContext } from '@wesib/wesib';
import { noop } from 'call-thru';
import { afterAll } from 'fun-events';
import { AuthService, Conduit__NS } from '../../common';
import { hashURL, setHashURL } from '../../common/layout';

@Component(
    ['feed-toggle', Conduit__NS],
    ActivateNavLink({ active: 'active' }),
    HandleNavLinks(),
)
export class FeedToggleComponent {

  constructor(context: ComponentContext) {

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

            const hash = hashURL(url);
            const feed = hash.pathname.substring(1);

            if (!feed) {
              return;
            }
            if (feed !== 'personal' || !user) {
              hash.pathname = '';
              navigation.replace(setHashURL(url, hash)).catch(noop);
            }
          },
      );
    });
  }

}
