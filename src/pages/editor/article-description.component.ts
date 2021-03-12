import { inText, InValidation, requirePresent } from '@frontmeans/input-aspects';
import { Field, SharedField } from '@wesib/generic/forms';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';

@Component(['article-description', Conduit__NS])
export class ArticleDescriptionComponent {

  @SharedField()
  description?: Field<string>;

  constructor(context: ComponentContext) {
    context.whenSettled(({ element }: { element: Element }) => {
      this.description = Field.by(
          opts => inText(element.querySelector('input')!, opts)
              .setup(InValidation, validation => validation.by(requirePresent())),
      );
    });
  }

}
