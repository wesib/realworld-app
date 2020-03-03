import { HierarchyContext } from '@wesib/generic';
import { inputFromControl } from '@wesib/generic/input';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { nextSkip } from 'call-thru';
import { eventSupplyOf, nextOnEvent } from 'fun-events';
import { inGroup } from 'input-aspects';
import { Conduit__NS } from '../../core';
import { ApiResponse } from '../../core/api';
import { Comment, CommentList, CommentService, CommentsSupport } from '../../core/comments';
import { ConduitInputSupport } from '../../core/input';
import { RenderLoader } from '../../core/loader';
import { ArticleCommentComponent } from './article-comment.component';
import { CommentEvent } from './comment-event';
import { CurrentArticle } from './current-article';

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

    this._context.whenOn(supply => {
      this._context.on<CommentEvent>('conduit:comment')(({ detail: { added, removed } }) => {
        if (added) {
          this.comments = [added, ...this.comments];
        } else {
          this.comments = this.comments.filter(comment => comment.id !== removed);
        }
      });

      hierarchy.get(CurrentArticle).tillOff(supply).thru_(
          article => article.slug ? nextOnEvent(commentService.articleComments(article.slug)) : nextSkip,
      )(response => {
        this.response = response;
        if (response.ok) {
          this.comments = response.body.comments;
        }
      });

      const group = inGroup({});

      eventSupplyOf(group).needs(supply);
      inputFromControl(_context, group);
    });
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

        const commentEl = fragment.appendChild(document.createElement('conduit-article-comment'));

        (commentEl as any).articleComment = comment;
      });

      range.insertNode(fragment);
    };
  }

}
