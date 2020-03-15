import { ActivateNavLink, HandleNavLinks } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { DomEventDispatcher } from 'fun-events/dom';
import { AuthService, AuthUser, notAuthenticated, NotAuthenticated } from '../auth';
import { Conduit__NS } from '../conduit.ns';

@Component(
    ['navbar', Conduit__NS],
    HandleNavLinks(),
    ActivateNavLink({ active: 'active' }),
)
export class NavbarComponent {

  @StateProperty()
   user: AuthUser | NotAuthenticated = notAuthenticated;

  constructor(private readonly _context: ComponentContext) {

    const authService = _context.get(AuthService);

    _context.whenOn(supply => {
      authService.user()
          .tillOff(supply)
          .to(user => this.user = user)
          .whenOff(() => this.user = notAuthenticated);
    });
  }

  @Render()
  render(): ElementRenderer {

    const authService = this._context.get(AuthService);
    const { document } = this._context.get(BootstrapWindow);
    const { element }: { element: Element } = this._context;
    const ul = element.querySelector('ul')!;
    const range = document.createRange();

    range.setStartAfter(ul.appendChild(document.createComment('[USER-NAV[')));
    range.setEndBefore(ul.appendChild(document.createComment(']USER-NAV]')));

    return () => {
      range.deleteContents();

      const { username } = this.user;

      if (username) {

        const logout = createItem('', 'ion-log-out', '');

        new DomEventDispatcher(logout).on('click').to(() => {
          authService.logout();
        });
        range.insertNode(logout);
        range.insertNode(createItem(username, 'ion-person', `profile/#/${encodeURIComponent(username)}`));
      }
    };

    function createItem(label: string, icon: string, href: string): HTMLLIElement {

      const item = document.createElement('li');

      item.className = 'nav-item';

      const a = item.appendChild(document.createElement('a'));

      a.className = 'nav-link';
      a.setAttribute('href', href);

      const i = a.appendChild(document.createElement('i'));

      i.className = icon;
      a.append(' ', label);

      return item;
    }
  }

}
