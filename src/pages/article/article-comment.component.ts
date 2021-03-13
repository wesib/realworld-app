import { DomEventDispatcher, stopDomEvents } from '@frontmeans/dom-events';
import { escapeHTML } from '@frontmeans/httongue';
import { InSubmit, inSubmitButton, InSubmitError } from '@frontmeans/input-aspects';
import { Share__symbol } from '@wesib/generic';
import { Form, FormShare } from '@wesib/generic/forms';
import { BootstrapWindow, Component, ComponentContext, DomProperty, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { apiSubmit } from '../../core/api';
import { AuthService, AuthUser, notAuthenticated, NotAuthenticated } from '../../core/auth';
import { Comment, CommentService } from '../../core/comments';
import { formatDate, RenderHTML } from '../../reusable';
import { CommentEvent } from './comment-event';
import { CurrentArticle, noArticle } from './current-article';
import { CurrentArticleShare } from './current-article.share';

export interface ArticleCommentEl extends HTMLElement {
  articleComment?: Comment;
}

@Component(['article-comment', Conduit__NS])
export class ArticleCommentComponent {

  @DomProperty()
  articleComment?: Comment;

  @StateProperty()
  article: CurrentArticle = noArticle;

  @StateProperty()
  user: AuthUser | NotAuthenticated = notAuthenticated;

  form?: Form;

  constructor(private readonly _context: ComponentContext) {

    const authService = _context.get(AuthService);

    authService.user(user => {
      this.user = user;
    }).needs(_context).whenOff(() => {
      this.user = notAuthenticated;
    });
    CurrentArticleShare.articleFor(_context)(article => {
      this.article = article;
    });
    FormShare[Share__symbol].valueFor(_context)((form?, _sharer?) => {
      this.form = form;
    });
  }

  @RenderHTML({ comment: 'COMMENT' })
  render(): Node | undefined {

    const comment = this.articleComment;

    if (!comment) {
      return;
    }

    const commentService = this._context.get(CommentService);
    const { document } = this._context.get(BootstrapWindow);
    const { author } = comment;
    const authorLink = `profile/#/${encodeURIComponent(author.username)}`;
    const authorImage = author.image ? `<img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />` : '';
    const date = formatDate(new Date(comment.createdAt));
    const fragment = document.createDocumentFragment();
    const cardBody = fragment.appendChild(document.createElement('div'));

    cardBody.className = 'card-body';

    const cardText = cardBody.appendChild(document.createElement('p'));

    cardText.className = 'card-text';
    cardText.innerText = comment.body;

    const cardFooter = fragment.appendChild(document.createElement('div'));

    cardFooter.className = 'card-footer';

    cardFooter.innerHTML = `
<a href="${authorLink}" class="comment-author">${authorImage}</a>
<a href="${authorLink}" class="comment-author">${escapeHTML(author.username)}</a>
<span class="date-posted">${date}</span>`;

    const form = this.form?.control;
    const { slug } = this.article;

    if (this.user.username === author.username && form && slug) {

      const options = cardFooter.appendChild(document.createElement('span'));

      options.className = 'mod-options';

      const deleteBtn = options.appendChild(document.createElement('button'));

      deleteBtn.type = 'button';
      deleteBtn.className = 'btn btn-sm';
      deleteBtn.innerHTML = '<i class="ion-trash-a"></i>';
      inSubmitButton(deleteBtn, { form });

      new DomEventDispatcher(deleteBtn).on('click').do(stopDomEvents)(() => {
        form.aspect(InSubmit)
            .submit(() => apiSubmit(commentService.deleteComment(slug, comment.id)))
            .then(() => {
              this._context.dispatchEvent(new CommentEvent(
                  'conduit:comment',
                  {
                    bubbles: true,
                    detail: { removed: comment.id },
                  },
              ));
            })
            .catch(e => {
              if (e instanceof InSubmitError) {
                console.error('Failed to remove comment', ...e.errors);
              } else {
                console.error('Failed to remove comment', e);
              }
            });
      });
    }

    return fragment;
  }

}
