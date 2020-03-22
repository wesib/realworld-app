import { inText } from '@proc7ts/input-aspects';
import { SetInputName } from '@wesib/generic/input';
import { Component } from '@wesib/wesib';
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
