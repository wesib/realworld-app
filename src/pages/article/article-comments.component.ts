import { inFormElement, inGroup } from '@frontmeans/input-aspects';
import { digOn_ } from '@proc7ts/fun-events';
import { Form, SharedForm } from '@wesib/generic/forms';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { ApiResponse } from '../../core/api';
import { Comment, CommentList, CommentService, CommentsSupport } from '../../core/comments';
import { ConduitFormsSupport } from '../../core/forms';
import { RenderLoader } from '../../core/loader';
import { ArticleCommentComponent, ArticleCommentEl } from './article-comment.component';
import { CommentEvent } from './comment-event';
import { CurrentArticle, noArticle } from './current-article';
import { CurrentArticleShare } from './current-article.share';

@Component(
    ['article-comments', Conduit__NS],
    {
      feature: {
        needs: [
          ArticleCommentComponent,
          CommentsSupport,
          ConduitFormsSupport,
        ],
      },
    },
)
export class ArticleCommentsComponent {

  @RenderLoader({ comment: 'COMMENTS' })
  response?: ApiResponse<CommentList>;

  @StateProperty()
  comments: Comment[] = [];

  @SharedForm()
  form: Form;

  constructor(private readonly _context: ComponentContext) {

    const commentService = _context.get(CommentService);

    this._context.on<CommentEvent>('conduit:comment')(({ detail: { added, removed } }) => {
      if (added) {
        this.comments = [added, ...this.comments];
      } else {
        this.comments = this.comments.filter(comment => comment.id !== removed);
      }
    });

    let lastArticle: CurrentArticle = noArticle;

    CurrentArticleShare.articleFor(_context).do(
        digOn_(article => {
          if (!article.slug || article.slug === lastArticle.slug) {
            return;
          }

          lastArticle = article;

          return commentService.articleComments(article.slug);
        }),
    )(response => {
      this.response = response;
      if (response.ok) {
        this.comments = response.body.comments;
      }
    });

    const element: HTMLElement = _context.element;

    this.form = Form.by(
        opts => inGroup({}, opts),
        opts => inFormElement(element, opts),
    );
  }

  @Render()
  render(): ElementRenderer {

    const { document } = this._context.get(BootstrapWindow);
    const { contentRoot }: { contentRoot: Node } = this._context;
    const range = document.createRange();

    range.setStartAfter(contentRoot.appendChild(document.createComment('[COMMENTS[')));
    range.setEndBefore(contentRoot.appendChild(document.createComment(']COMMENTS]')));

    return () => {
      range.deleteContents();

      const { comments } = this;

      if (!comments.length) {
        return;
      }

      const fragment = document.createDocumentFragment();

      comments.forEach(comment => {

        const commentEl = fragment.appendChild(document.createElement('conduit-article-comment') as ArticleCommentEl);

        commentEl.articleComment = comment;
      });

      range.insertNode(fragment);
    };
  }

}
