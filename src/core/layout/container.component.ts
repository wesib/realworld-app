import {
  Component,
  ComponentContext,
  DefaultNamespaceAliaser,
  ElementRenderer,
  Render,
  StateProperty,
} from '@wesib/wesib';
import { css__naming, QualifiedName } from 'namespace-aliaser';
import { Authentication, AuthService } from '../auth';
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

  @StateProperty()
  auth: Authentication = {};

  constructor(private readonly _context: ComponentContext) {
    _context.whenOn(connectSupply => {
      _context.get(AuthService).authentication().tillOff(connectSupply).to(auth => {
        this.auth = auth;
      });
    });
  }

  @Render()
  render(): ElementRenderer {

    const nsAlis = this._context.get(DefaultNamespaceAliaser);
    const authenticatedClass = css__naming.name(authenticatedClassQName, nsAlis);
    const notAuthenticatedClass = css__naming.name(notAuthenticatedClassQName, nsAlis);
    const { classList }: Element = this._context.element;

    return () => {
      if (this.auth.token) {
        classList.remove(notAuthenticatedClass);
        classList.add(authenticatedClass);
      } else {
        classList.remove(authenticatedClass);
        classList.add(notAuthenticatedClass);
      }
    };
  }

}
