import { Feature } from '@wesib/wesib';
import { FeedService } from './feed-service';
import { FeedService$ } from './feed-service.impl';

@Feature({
  setup(setup) {
    setup.provide({ a: FeedService, as: FeedService$ });
  },
})
export class FeedSupport {
}
