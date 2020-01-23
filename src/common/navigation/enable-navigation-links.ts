import { ComponentNode, ComponentTreeSupport, ElementNode, ElementPickMode, Navigation } from '@wesib/generic';
import { BootstrapWindow, ComponentDef, DefaultNamespaceAliaser } from '@wesib/wesib';
import { afterAll, DomEventDispatcher, EventSupply } from 'fun-events';
import { css__naming, QualifiedName } from 'namespace-aliaser';

export function enableNavigationLinks(
    {
      select = 'a',
      pick = { all: true, deep: true },
      active,
    }: {
      select?: string;
      pick?: ElementPickMode;
      active?: QualifiedName;
    } = {},
): ComponentDef {
  return {
    feature: {
      needs: ComponentTreeSupport,
    },
    define(defContext) {

      const activeClass = active && css__naming.name(active, defContext.get(DefaultNamespaceAliaser));
      const base = new URL(defContext.get(BootstrapWindow).document.baseURI);

      defContext.whenComponent(context => {

        const node = context.get(ComponentNode);
        const navigation = context.get(Navigation);

        context.whenOn(supply => {

          const navLinks = node.select(select, pick);
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
                      .on<KeyboardEvent>('click')(
                          event => {
                            if (!activeClass || !element.classList.contains(activeClass)) {

                              const href = element.getAttribute('href') || '';

                              if (new URL(href, base).hostname === base.hostname) {
                                navigation.open(href);
                                event.preventDefault();
                              }
                              // Navigate to absolute URL otherwise
                            }
                          },
                      )
                      .needs(supply);

                  linkSupplies.set(link, linkSupply);
                },
            );
          });

          if (activeClass) {
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
          }
        });
      });
    },
  };
}

function dirName(url: URL): string {

  const path = url.pathname;

  if (path.endsWith('/')) {
    return path;
  }

  return path + '/';
}
