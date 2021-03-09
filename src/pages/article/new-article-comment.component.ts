import { inFormElement, inGroup, InStatus, InSubmit, InSubmitError } from '@frontmeans/input-aspects';
import { supplyAfter } from '@proc7ts/fun-events';
import { HierarchyContext } from '@wesib/generic';
import { Form, OnSubmit, SharedForm } from '@wesib/generic/forms';
import { Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { apiSubmit } from '../../core/api';
import { AuthService, AuthUser, notAuthenticated, NotAuthenticated } from '../../core/auth';
import { CommentService, CommentsSupport } from '../../core/comments';
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
)
export class NewArticleCommentComponent {

  private readonly _commentService: CommentService;

  article: CurrentArticle = noArticle;

  @StateProperty()
  user: AuthUser | NotAuthenticated = notAuthenticated;

  @SharedForm()
  readonly form: Form<NewComment>;

  constructor(private readonly _context: ComponentContext) {
    this._commentService = _context.get(CommentService);

    const authService = _context.get(AuthService);
    const hierarchy = _context.get(HierarchyContext);

    authService.user.do(supplyAfter(_context))(
        user => this.user = user,
    ).whenOff(
        () => this.user = notAuthenticated,
    );
    hierarchy.get(CurrentArticle)(
        article => this.article = article,
    ).whenOff(
        () => this.article = noArticle,
    );

    const element: Element = _context.element;

    this.form = Form.by(
        opts => inGroup({ text: '' }, opts),
        opts => inFormElement(element.querySelector('form')!, opts),
    );
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
  submit({ control }: Form.Whole<NewComment>): void {

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
