import { SetInputName } from '@wesib/generic/input';
import { Component } from '@wesib/wesib';
import { inText } from 'input-aspects';
import { Conduit__NS } from '../../core';
import { UseConduitInput } from '../../core/input';

@Component(
    ['user-bio', Conduit__NS],
    UseConduitInput({
      select: 'textarea',
      makeControl({ node, aspects }) {
        return inText(node.element, { aspects });
      },
    }),
    SetInputName('bio'),
)
export class UserBioComponent {
}
