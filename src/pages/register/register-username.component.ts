import { SetInputName } from '@wesib/generic/input';
import { Component } from '@wesib/wesib';
import { inText, InValidation, requirePresent } from 'input-aspects';
import { Conduit__NS } from '../../common';
import { UseConduitInput } from '../../common/input';

@Component(
    ['register-username', Conduit__NS],
    UseConduitInput({
      makeControl({ node, aspects }) {
        return inText(node.element, { aspects })
            .setup(InValidation, validation => validation.by(requirePresent()));
      },
    }),
    SetInputName('username'),
)
export class RegisterUsernameComponent {
}