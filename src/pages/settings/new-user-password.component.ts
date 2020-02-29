import { SetInputName } from '@wesib/generic/input';
import { Component } from '@wesib/wesib';
import { InMode, InStyledElement, inText } from 'input-aspects';
import { Conduit__NS } from '../../core';
import { UseConduitInput } from '../../core/input';

@Component(
    ['new-user-password', Conduit__NS],
    UseConduitInput({
      makeControl({ node, aspects }) {

        const text = inText(node.element, { aspects });
        const control = text.convert<string | undefined>(
            {
              get(value) {
                return value || '';
              },
              set(value) {
                return value || undefined;
              },
            },
            aspects,
            InStyledElement.to(node.element),
        );

        text.aspect(InMode).derive(control.aspect(InMode));

        return control;
      },
    }),
    SetInputName('password'),
)
export class NewUserPasswordComponent {
}
