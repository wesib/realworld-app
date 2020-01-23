import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../conduit.ns';
import { enableNavigationLinks } from '../navigation';

@Component(
    ['footer', Conduit__NS],
    enableNavigationLinks(),
)
export class FooterComponent {
}
