import { PageHashURLSupport } from '@wesib/generic';
import { Feature } from '@wesib/wesib';
import { FeedService } from './feed-service';
import { FeedService$ } from './feed-service.impl';

@Feature({
  needs: PageHashURLSupport,
  setup(setup) {
    setup.provide({ a: FeedService, as: FeedService$ });
  },
})
export class FeedSupport {
}
