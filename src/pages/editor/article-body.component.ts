import { inText, InValidation, requirePresent } from '@frontmeans/input-aspects';
import { Field, SharedField } from '@wesib/generic/forms';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';

@Component(['article-body', Conduit__NS])
export class ArticleBodyComponent {

  @SharedField()
  body?: Field<string>;

  constructor(context: ComponentContext) {
    context.whenSettled(({ element }: { element: Element }) => {
      this.body = Field.by(
          opts => inText(element.querySelector('textarea')!, opts)
              .setup(InValidation, validation => validation.by(requirePresent())),
      );
    });
  }

}
