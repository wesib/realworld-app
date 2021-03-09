import { inText, InValidation, requirePresent } from '@frontmeans/input-aspects';
import { Field, SharedField } from '@wesib/generic/forms';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';

@Component(['article-comment-text', Conduit__NS])
export class ArticleCommentTextComponent {

  @SharedField()
  readonly text: Field<string>;

  constructor(context: ComponentContext) {

    const element: Element = context.element;

    this.text = Field.by(opts => inText(element.querySelector('textarea')!, opts)
        .setup(InValidation, validation => validation.by(requirePresent())));
  }

}
