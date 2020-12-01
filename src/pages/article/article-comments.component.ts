import { nextSkip } from '@proc7ts/call-thru';
import { eventSupplyOf, nextOnEvent } from '@proc7ts/fun-events';
import { inGroup } from '@proc7ts/input-aspects';
import { HierarchyContext } from '@wesib/generic';
import { inputFromControl } from '@wesib/generic/input';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { ApiResponse } from '../../core/api';
import { Comment, CommentList, CommentService, CommentsSupport } from '../../core/comments';
import { ConduitInputSupport } from '../../core/input';
import { RenderLoader } from '../../core/loader';
import { ArticleCommentComponent, ArticleCommentEl } from './article-comment.component';
import { CommentEvent } from './comment-event';
import { CurrentArticle, noArticle } from './current-article';

@Component(
    ['article-comments', Conduit__NS],
    {
      feature: {
        needs: [
          ArticleCommentComponent,
          CommentsSupport,
          ConduitInputSupport,
        ],
      },
    },
)
export class ArticleCommentsComponent {

  @RenderLoader({ comment: 'COMMENTS' })
  response?: ApiResponse<CommentList>;

  @StateProperty()
  comments: Comment[] = [];

  constructor(private readonly _context: ComponentContext) {

    const commentService = _context.get(CommentService);
    const hierarchy = this._context.get(HierarchyContext);

    this._context.on<CommentEvent>('conduit:comment').to(({ detail: { added, removed } }) => {
      if (added) {
        this.comments = [added, ...this.comments];
      } else {
        this.comments = this.comments.filter(comment => comment.id !== removed);
      }
    });

    let lastArticle: CurrentArticle = noArticle;

    hierarchy.get(CurrentArticle).tillOff(_context).thru_(
        article => {
          if (!article.slug || article.slug === lastArticle.slug) {
            return nextSkip;
          }

          lastArticle = article;

          return nextOnEvent(commentService.articleComments(article.slug));
        },
    ).to(response => {
      this.response = response;
      if (response.ok) {
        this.comments = response.body.comments;
      }
    });

    const group = inGroup({});

    eventSupplyOf(group).needs(_context);
    inputFromControl(_context, group);
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
