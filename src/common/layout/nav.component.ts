import { ComponentNode, ElementNode, Navigation } from '@wesib/generic';
import { Component, ComponentContext } from '@wesib/wesib';
import { afterAll, DomEventDispatcher, EventSupply } from 'fun-events';
import { Conduit__NS } from '../conduit.ns';

const activeClass = 'active';

@Component(['nav', Conduit__NS])
export class NavComponent {

  constructor(context: ComponentContext) {

    const node = context.get(ComponentNode);
    const navigation = context.get(Navigation);

    context.whenOn(supply => {

      const navLinks = node.select('a', { all: true, deep: true });
      const linkSupplies = new Map<ElementNode, EventSupply>();

      navLinks.track.tillOff(supply)((added, removed) => {
        removed.forEach(link => {

          const linkSupply = linkSupplies.get(link);

          if (linkSupply) {
            linkSupplies.delete(link);
            linkSupply.off();
          }
        });
        added.forEach(
            link => {

              const element: Element = link.element;
              const linkSupply = new DomEventDispatcher(element)
                  .on('click')
                  .instead(() => {
                    if (!element.classList.contains(activeClass)) {
                      navigation.open(element.getAttribute('href') || '');
                    }
                  })
                  .needs(supply);

              linkSupplies.set(link, linkSupply);
            },
        );
      });
      afterAll({
        links: navLinks,
        page: navigation,
      })({
        supply,
        receive(
            _ctx,
            {
              links: [links],
              page: [page],
            },
        ) {

          const pageDir = dirName(page.url);
          let activeElement: Element | undefined;
          let activeDir = '';

          links.forEach(link => {

            const element: HTMLAnchorElement = link.element;
            const linkDir = dirName(new URL(element.href));

            element.classList.remove(activeClass);

            if (pageDir.startsWith(linkDir) && activeDir.length < linkDir.length) {
              activeElement = element;
              activeDir = linkDir;
            }
          });

          if (activeElement) {
            activeElement.classList.add(activeClass);
          }
        },
      });
    });
  }

}

function dirName(url: URL): string {

  const path = url.pathname;

  if (path.endsWith('/')) {
    return path;
  }

  return path + '/';
}
