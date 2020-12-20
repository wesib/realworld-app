import { afterAll, supplyAfter } from '@proc7ts/fun-events';
import { ActivateNavLink, ComponentNode, HandleNavLinks, Navigation, PageHashURLSupport } from '@wesib/generic';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { FeedRequest } from '../../core/feed';
import { PageUserProfileParam } from './page-user-profile-param';

const favoriteURLPattern = /#\/.+\/favorite$/;

@Component(
    ['user-feed-toggle', Conduit__NS],
    {
      feature: {
        needs: PageHashURLSupport,
      },
    },
    ActivateNavLink({ active: 'active' }),
    HandleNavLinks(),
)
export class UserFeedToggleComponent {

  constructor(context: ComponentContext) {

    const navigation = context.get(Navigation);

    context.whenConnected(() => {
      afterAll({
        page: navigation,
        links: context.get(ComponentNode).select('a', { all: true, deep: true }),
      }).do(supplyAfter(context))(
          ({
            page: [page],
            links: [links],
          }) => {
            for (const node of links) {

              const element = node.element as HTMLAnchorElement;
              const profileParam = page.get(PageUserProfileParam);
              const user = profileParam.author || profileParam.favorited;
              let request: FeedRequest;

              if (favoriteURLPattern.test(element.href)) {
                request = { favorited: user };
              } else {
                request = { author: user };
              }

              const targetPage = navigation.with(PageUserProfileParam, request).pretend();

              if (targetPage) {

                const href = targetPage.url.href;

                if (element.href !== href) {

                  const clone = element.cloneNode(true) as HTMLLinkElement;

                  clone.href = href;
                  element.replaceWith(clone);
                }
              }
            }
          },
      );
    });
  }

}
