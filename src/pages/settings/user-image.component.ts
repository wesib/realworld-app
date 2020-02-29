import { SetInputName } from '@wesib/generic/input';
import { Component } from '@wesib/wesib';
import { inText } from 'input-aspects';
import { Conduit__NS } from '../../core';
import { UseConduitInput } from '../../core/input';

@Component(
    ['user-image', Conduit__NS],
    UseConduitInput({
      makeControl({ node, aspects }) {
        return inText(node.element, { aspects });
      },
    }),
    SetInputName('image'),
)
export class UserImageComponent {
}
