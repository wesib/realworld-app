import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../conduit.ns';
import { enableNavigationLinks } from '../navigation';

@Component(
    ['navbar', Conduit__NS],
    enableNavigationLinks({ active: 'active' }),
)
export class NavbarComponent {
}
