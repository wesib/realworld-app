import { Component, ComponentContext, DefaultNamespaceAliaser, ElementRender, Render } from '@wesib/wesib';
import { css__naming, QualifiedName } from 'namespace-aliaser';
import { AuthService, AuthUser } from '../auth';
import { Conduit__NS } from '../conduit.ns';
import { MainComponent } from './main.component';
import { NavbarComponent } from './navbar.component';

const authenticatedClassQName: QualifiedName = ['authenticated', Conduit__NS];
const notAuthenticatedClassQName: QualifiedName = ['not-authenticated', Conduit__NS];

@Component({
  name: ['container', Conduit__NS],
  feature: {
    needs: [MainComponent, NavbarComponent],
  },
})
export class ContainerComponent {

  private _user?: AuthUser;

  constructor(private readonly _context: ComponentContext) {
    _context.whenOn(connectSupply => {
      _context.get(AuthService).user.tillOff(connectSupply)((user?, _failure?) => {
        this.user = user;
      });
    });
  }

  get user(): AuthUser | undefined {
    return this._user;
  }

  set user(value: AuthUser | undefined) {

    const oldValue = this._user;

    this._user = value;
    this._context.updateState('user', value, oldValue);
  }

  @Render()
  render(): ElementRender {

    const nsAlis = this._context.get(DefaultNamespaceAliaser);
    const authenticatedClass = css__naming.name(authenticatedClassQName, nsAlis);
    const notAuthenticatedClass = css__naming.name(notAuthenticatedClassQName, nsAlis);
    const { classList }: Element = this._context.element;

    return () => {
      if (this.user) {
        classList.remove(notAuthenticatedClass);
        classList.add(authenticatedClass);
      } else {
        classList.remove(authenticatedClass);
        classList.add(notAuthenticatedClass);
      }
    };
  }

}
