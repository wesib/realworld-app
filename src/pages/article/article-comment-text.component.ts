import { inText, InValidation, requirePresent } from '@proc7ts/input-aspects';
import { SetInputName } from '@wesib/generic/input';
import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { UseConduitInput } from '../../core/input';

@Component(
    ['article-comment-text', Conduit__NS],
    UseConduitInput({
      select: 'textarea',
      makeControl({ node, aspects }) {
        return inText(node.element, { aspects })
            .setup(InValidation, validation => validation.by(requirePresent()));
      },
    }),
    SetInputName('text'),
)
export class ArticleCommentTextComponent {

}
