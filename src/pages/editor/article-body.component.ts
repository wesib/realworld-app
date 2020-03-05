import { SetInputName } from '@wesib/generic/input';
import { Component } from '@wesib/wesib';
import { inText, InValidation, requirePresent } from 'input-aspects';
import { Conduit__NS } from '../../core';
import { UseConduitInput } from '../../core/input';

@Component(
    ['article-body', Conduit__NS],
    UseConduitInput({
      select: 'textarea',
      makeControl({ node: { element }, aspects }) {
        return inText(element, { aspects })
            .setup(InValidation, validation => validation.by(requirePresent()));
      },
    }),
    SetInputName('body'),
)
export class ArticleBodyComponent {

}