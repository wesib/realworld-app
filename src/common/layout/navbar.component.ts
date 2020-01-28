import { ActivateNavLink, HandleNavLinks } from '@wesib/generic';
import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../conduit.ns';

@Component(
    ['navbar', Conduit__NS],
    HandleNavLinks(),
    ActivateNavLink({ active: 'active' }),
)
export class NavbarComponent {
}
