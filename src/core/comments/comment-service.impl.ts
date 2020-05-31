import { OnEvent } from '@proc7ts/fun-events';
import { asis } from '@proc7ts/primitives';
import { BootstrapContext } from '@wesib/wesib';
import { ApiFetch, ApiRequest, ApiResponse } from '../api';
import { Comment } from './comment';
import { CommentList, CommentService } from './comment-service';

export class CommentService$ implements CommentService {

  private readonly _apiFetch: ApiFetch;

  constructor(context: BootstrapContext) {
    this._apiFetch = context.get(ApiFetch);
  }

  articleComments(slug: string): OnEvent<[ApiResponse<CommentList>]> {

    const apiRequest: ApiRequest<CommentList> = {
      path: `articles/${encodeURIComponent(slug)}/comments`,
      init: {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
      respondAs: asis,
    };

    return this._apiFetch(apiRequest);
  }

  addComment(slug: string, text: string): OnEvent<[ApiResponse<Comment>]> {

    const apiRequest: ApiRequest<Comment> = {
      path: `articles/${encodeURIComponent(slug)}/comments`,
      init: {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment: {
            body: text,
          },
        }),
      },
      respondAs: 'comment',
      auth: true,
    };

    return this._apiFetch(apiRequest);
  }

  deleteComment(slug: string, id: number): OnEvent<[ApiResponse<any>]> {

    const apiRequest: ApiRequest<any> = {
      path: `articles/${encodeURIComponent(slug)}/comments/${id}`,
      init: {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
        },
      },
      respondAs: asis,
    };

    return this._apiFetch(apiRequest);
  }

}
