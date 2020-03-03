import { HierarchyContext } from '@wesib/generic';
import { InputToForm, OnSubmit } from '@wesib/generic/input';
import { Component, ComponentContext, StateProperty } from '@wesib/wesib';
import { InStatus, InSubmit, InSubmitError } from 'input-aspects';
import { Conduit__NS } from '../../core';
import { apiSubmit } from '../../core/api';
import { CommentService, CommentsSupport } from '../../core/comments';
import { ConduitInputSupport, FillConduitForm } from '../../core/input';
import { ArticleCommentTextComponent } from './article-comment-text.component';
import { CurrentArticle, noArticle } from './current-article';

interface NewComment {
  text: string;
}

@Component(
    ['new-article-comment', Conduit__NS],
    {
      feature: {
        needs: [
          ArticleCommentTextComponent,
          CommentsSupport,
          ConduitInputSupport,
        ],
      },
    },
    FillConduitForm<NewComment>({
      emptyModel: {
        text: '',
      },
    }),
)
export class NewArticleCommentComponent {

  private readonly _commentService: CommentService;

  @StateProperty()
  article: CurrentArticle = noArticle;

  constructor(context: ComponentContext) {
    this._commentService = context.get(CommentService);

    const hierarchy = context.get(HierarchyContext);

    context.whenOn(supply => {
      hierarchy.get(CurrentArticle)
          .tillOff(supply)(article => this.article = article)
          .whenOff(() => this.article = noArticle);
    });
  }

  @OnSubmit()
  submit({ control }: InputToForm<NewComment>): void {

    const { article } = this;

    if (!article.slug) {
      return;
    }
    control.aspect(InStatus).markEdited();
    control.aspect(InSubmit)
        .submit(request => apiSubmit(this._commentService.addComment(article.slug, request.text)))
        .then(console.log)
        .catch(e => {
          if (e instanceof InSubmitError) {
            console.error('Failed to comment', ...e.errors);
          } else {
            console.error('Failed to comment', e);
          }
        });
  }

}
