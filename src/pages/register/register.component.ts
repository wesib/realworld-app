import { HandleNavLinks } from '@wesib/generic';
import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../../common';

@Component(
    ['register', Conduit__NS],
    HandleNavLinks(),
)
export class RegisterComponent {
}
