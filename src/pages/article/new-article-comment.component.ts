import { InStatus, InSubmit, InSubmitError } from '@proc7ts/input-aspects';
import { HierarchyContext } from '@wesib/generic';
import { InputToForm, OnSubmit } from '@wesib/generic/input';
import { Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { apiSubmit } from '../../core/api';
import { AuthService, AuthUser, notAuthenticated, NotAuthenticated } from '../../core/auth';
import { CommentService, CommentsSupport } from '../../core/comments';
import { FillConduitForm } from '../../core/input';
import { ArticleCommentTextComponent } from './article-comment-text.component';
import { CommentEvent } from './comment-event';
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

  article: CurrentArticle = noArticle;

  @StateProperty()
  user: AuthUser | NotAuthenticated = notAuthenticated;

  constructor(private readonly _context: ComponentContext) {
    this._commentService = _context.get(CommentService);

    const authService = _context.get(AuthService);
    const hierarchy = _context.get(HierarchyContext);

    _context.whenOn(supply => {
      authService.user()
          .tillOff(supply)
          .to(user => this.user = user)
          .whenOff(() => this.user = notAuthenticated);
      hierarchy.get(CurrentArticle)
          .tillOff(supply)
          .to(article => this.article = article)
          .whenOff(() => this.article = noArticle);
    });
  }

  @Render()
  render(): ElementRenderer {

    const { element }: { element: Element } = this._context;
    const image = element.querySelector('.comment-author-img');

    return () => {
      if (this.user.email && this.user.image) {
        image?.setAttribute('src', this.user.image);
      } else {
        image?.removeAttribute('src');
      }
    };
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
        .then(added => {
          control.it = { text: '' };
          control.aspect(InStatus).markTouched(false);
          control.aspect(InSubmit).reset();
          this._context.dispatchEvent(new CommentEvent(
              'conduit:comment',
              {
                bubbles: true,
                detail: { added },
              },
          ));
        })
        .catch(e => {
          if (e instanceof InSubmitError) {
            console.error('Failed to comment', ...e.errors);
          } else {
            console.error('Failed to comment', e);
          }
        });
  }

}
