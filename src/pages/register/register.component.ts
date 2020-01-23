import { Component } from '@wesib/wesib';
import { Conduit__NS, enableNavigationLinks } from '../../common';

@Component(
    ['register', Conduit__NS],
    enableNavigationLinks(),
)
export class RegisterComponent {
}
