import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../conduit.ns';
import { EnableNavigationLinks } from '../navigation';

@Component(['navbar', Conduit__NS])
@EnableNavigationLinks({ active: 'active' })
export class NavbarComponent {
}
