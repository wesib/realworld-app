import { InMode, InStyledElement, inText } from '@frontmeans/input-aspects';
import { SetInputName } from '@wesib/generic/input';
import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { UseConduitInput } from '../../core/input';

@Component(
    ['change-password', Conduit__NS],
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
export class ChangePasswordComponent {
}
