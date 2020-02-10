import { SetInputName, UseInputElement } from '@wesib/generic/input';
import { Component } from '@wesib/wesib';
import { InCssClasses, inCssInfo, inText, InValidation, requirePresent } from 'input-aspects';
import { bootstrapCssError, Conduit__NS } from '../../common';

@Component(
    ['login-email', Conduit__NS],
    UseInputElement({
      makeControl({ node, aspects }) {
        return inText(node.element, { aspects })
            .setup(InValidation, validation => validation.by(requirePresent()))
            .setup(InCssClasses, classes => {
              classes.add(inCssInfo());
              classes.add(bootstrapCssError());
            });
      },
    }),
    SetInputName('email'),
)
export class LoginEmailComponent {
}
