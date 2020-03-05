import { SetInputName } from '@wesib/generic/input';
import { Component } from '@wesib/wesib';
import { inText, InValidation, requirePresent } from 'input-aspects';
import { Conduit__NS } from '../../core';
import { UseConduitInput } from '../../core/input';

@Component(
    ['article-title', Conduit__NS],
    UseConduitInput({
      makeControl({ node: { element }, aspects }) {
        return inText(element, { aspects })
            .setup(InValidation, validation => validation.by(requirePresent()));
      },
    }),
    SetInputName('title'),
)
export class ArticleTitleComponent {

}