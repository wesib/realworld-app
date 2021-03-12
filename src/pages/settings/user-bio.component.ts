import { inText } from '@frontmeans/input-aspects';
import { Field, SharedField } from '@wesib/generic/forms';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';

@Component(['user-bio', Conduit__NS])
export class UserBioComponent {

  @SharedField()
  bio?: Field<string>;

  constructor(context: ComponentContext) {
    context.whenSettled(({ element }: { element: Element }) => {
      this.bio = Field.by(opts => inText(element.querySelector('textarea')!, opts));
    });
  }

}
