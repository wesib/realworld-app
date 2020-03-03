import { Comment } from '../../core/comments';

export type CommentEventDetails =
    | {
  added?: undefined;
  removed: number;
} | {
  added: Comment;
  removed?: undefined;
};

export class CommentEvent extends CustomEvent<CommentEventDetails> {
}
