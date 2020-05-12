import { inText, InValidation, requirePresent } from '@proc7ts/input-aspects';
import { SetInputName } from '@wesib/generic/input';
import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { UseConduitInput } from '../../core/input';

@Component(
    ['article-description', Conduit__NS],
    UseConduitInput({
      makeControl({ node: { element }, aspects }) {
        return inText(element, { aspects })
            .setup(InValidation, validation => validation.by(requirePresent()));
      },
    }),
    SetInputName('description'),
)
export class ArticleDescriptionComponent {
}