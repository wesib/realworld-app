import { inText, InValidation, requirePresent } from '@frontmeans/input-aspects';
import { Field, SharedField } from '@wesib/generic/forms';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';

@Component(['user-name', Conduit__NS])
export class UserNameComponent {

  @SharedField()
  readonly username: Field<string>;

  constructor(context: ComponentContext) {

    const element: Element = context.element;

    this.username = Field.by(
        opts => inText(element.querySelector('input')!, opts)
            .setup(InValidation, validation => validation.by(requirePresent())),
    );
  }

}
