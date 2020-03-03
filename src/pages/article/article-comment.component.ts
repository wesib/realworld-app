import { Component, ComponentContext, DomProperty, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { AuthService, AuthUser, NotAuthenticated } from '../../core/auth';
import { Comment } from '../../core/comments';
import { escapeHtml } from '../../core/util';
import { formatDate, RenderHTML } from '../../reusable';

@Component(['article-comment', Conduit__NS])
export class ArticleCommentComponent {

  @DomProperty()
  articleComment?: Comment;

  @StateProperty()
  user: AuthUser | NotAuthenticated = {};

  constructor(context: ComponentContext) {

    const authService = context.get(AuthService);

    context.whenOn(supply => {
      authService.user.tillOff(supply)(
          user => this.user = user,
      ).whenOff(
          () => this.user = {},
      );
    });
  }

  @RenderHTML({ comment: 'COMMENT' })
  get render(): string | undefined {
    if (!this.articleComment) {
      return;
    }

    const { author } = this.articleComment;
    const authorLink = `profile/#/${encodeURIComponent(author.username)}`;
    const authorImage = author.image ? `<img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />` : '';
    const date = formatDate(new Date(this.articleComment.createdAt));
    let options = '';

    if (this.user.username === author.username) {
      options = `<span class="mod-options"><i class="ion-trash-a"></i></span>`;
    }

    return `
<div class="card-body">
<p class="card-text">${escapeHtml(this.articleComment.body)}</p>
</div>
<div class="card-footer">
<a href="${authorLink}" class="comment-author">${authorImage}</a>
<a href="${authorLink}" class="comment-author">${escapeHtml(author.username)}</a>
<span class="date-posted">${date}</span>
${options}
</div>`;
  }

}
