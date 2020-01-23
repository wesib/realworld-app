import { Component } from '@wesib/wesib';
import { Conduit__NS, enableNavigationLinks } from '../../common';

@Component(
    ['login', Conduit__NS],
    enableNavigationLinks(),
)
export class LoginComponent {
}
