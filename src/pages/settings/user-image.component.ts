import { inText } from '@frontmeans/input-aspects';
import { Field, SharedField } from '@wesib/generic/forms';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';

@Component(['user-image', Conduit__NS])
export class UserImageComponent {

  @SharedField()
  readonly image: Field<string>;

  constructor(context: ComponentContext) {

    const element: Element = context.element;

    this.image = Field.by(opts => inText(element.querySelector('input')!, opts));
  }

}
