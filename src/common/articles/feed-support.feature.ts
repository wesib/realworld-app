import { Feature } from '@wesib/wesib';
import { ArticleService } from './article-service';
import { ArticleService$ } from './article-service.impl';
import { FeedService } from './feed-service';
import { FeedService$ } from './feed-service.impl';

@Feature({
  setup(setup) {
    setup.provide({ a: ArticleService, as: ArticleService$ });
    setup.provide({ a: FeedService, as: FeedService$ });
  },
})
export class FeedSupport {
}
