import { ContextRef, SingleContextKey } from '@proc7ts/context-values';
import { OnEvent } from '@proc7ts/fun-events';
import { ApiResponse } from '../api';
import { Comment } from './comment';

export interface CommentList {
  readonly comments: Comment[];
}

export interface CommentService {

  articleComments(slug: string): OnEvent<[ApiResponse<CommentList>]>;

  addComment(slug: string, text: string): OnEvent<[ApiResponse<Comment>]>;

  deleteComment(slug: string, id: number): OnEvent<[ApiResponse<any>]>;

}

export const CommentService: ContextRef<CommentService> = (
    /*#__PURE__*/ new SingleContextKey<CommentService>('comment-service')
);
