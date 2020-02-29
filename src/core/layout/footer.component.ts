import { HandleNavLinks } from '@wesib/generic';
import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../conduit.ns';

@Component(
    ['footer', Conduit__NS],
    HandleNavLinks(),
)
export class FooterComponent {
}
