import { ActivateNavLink, HandleNavLinks, Navigation } from '@wesib/generic';
import { Component, ComponentContext } from '@wesib/wesib';
import { noop } from 'call-thru';
import { afterAll } from 'fun-events';
import { AuthService, Conduit__NS } from '../../common';

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

            const feed = url.searchParams.get('feed');

            if (!feed) {
              return;
            }
            if (feed !== 'personal' || !user) {

              const newURL = new URL(url.href);

              newURL.searchParams.delete('feed');
              navigation.replace(newURL).catch(noop);
            }
          },
      );
    });
  }

}
