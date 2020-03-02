import { Feature } from '@wesib/wesib';
import { CommentService } from './comment-service';
import { CommentService$ } from './comment-service.impl';

@Feature({
  setup(setup) {
    setup.provide({ a: CommentService, as: CommentService$ });
  },
})
export class CommentsSupport {
}
