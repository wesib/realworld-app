import { HierarchyContext } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render } from '@wesib/wesib';
import { nextSkip } from 'call-thru';
import { nextOnEvent } from 'fun-events';
import { Conduit__NS } from '../../core';
import { ApiResponse } from '../../core/api';
import { CommentList, CommentService, CommentsSupport } from '../../core/comments';
import { RenderLoader } from '../../core/loader';
import { ArticleCommentComponent } from './article-comment.component';
import { CurrentArticle } from './current-article';

@Component(
    ['article-comments', Conduit__NS],
    {
      feature: {
        needs: [
          ArticleCommentComponent,
          CommentsSupport,
        ],
      },
    },
)
export class ArticleCommentsComponent {

  @RenderLoader({ comment: 'COMMENTS' })
  comments?: ApiResponse<CommentList>;

  constructor(private readonly _context: ComponentContext) {

    const commentService = _context.get(CommentService);
    const hierarchy = this._context.get(HierarchyContext);

    this._context.whenOn(supply => {
      hierarchy.get(CurrentArticle).tillOff(supply).thru_(
          article => article.slug ? nextOnEvent(commentService.articleComments(article.slug)) : nextSkip,
      )(
          comments => {
            console.log(comments);
            return this.comments = comments;
          },
      );
    });
  }

  @Render()
  render(): ElementRenderer {

    const { document } = this._context.get(BootstrapWindow);
    const { contentRoot }: { contentRoot: Node } = this._context;
    const range = document.createRange();

    range.selectNodeContents(contentRoot);

    return () => {
      range.deleteContents();
      if (!this.comments || !this.comments.ok) {
        return;
      }

      const comments = this.comments.body;
      const fragment = document.createDocumentFragment();

      comments.comments.forEach(comment => {

        const commentEl = fragment.appendChild(document.createElement('conduit-article-comment'));

        (commentEl as any).articleComment = comment;
      });

      range.insertNode(fragment);
    };
  }

}
