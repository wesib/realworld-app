import { InConverter, InMode, InStyledElement, inText } from '@frontmeans/input-aspects';
import { arrayOfElements } from '@proc7ts/primitives';
import { Field, SharedField } from '@wesib/generic/forms';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';

@Component(['change-password', Conduit__NS])
export class ChangePasswordComponent {

  @SharedField()
  password?: Field<string | undefined>;

  constructor(context: ComponentContext) {
    context.whenSettled(({ element }: { element: Element }) => {
      this.password = Field.by(
          ({ aspects }: { aspects?: InConverter.Aspect<any, any> }) => {

            const input = element.querySelector('input')!;
            const text = inText(input, { aspects });
            const control = text.convert<string | undefined>(
                {
                  get(value) {
                    return value || '';
                  },
                  set(value) {
                    return value || undefined;
                  },
                },
                InStyledElement.to(input),
                ...arrayOfElements(aspects),
            );

            text.aspect(InMode).derive(control.aspect(InMode));

            return control;
          },
      );
    });
  }

}
