import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../conduit.ns';
import { EnableNavigationLinks } from '../navigation';

@Component(['footer', Conduit__NS])
@EnableNavigationLinks()
export class FooterComponent {
}
