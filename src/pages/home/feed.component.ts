import { Navigation } from '@wesib/generic';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../common';
import { FeedRequest } from '../../common/feed';
import { ArticleListComponent } from './article-list.component';
import { FeedPagerComponent } from './feed-pager.component';
import { PageFeedParam } from './page-feed-param';
import { RenderFeed } from './render-feed.decorator';

@Component(
    ['feed', Conduit__NS],
    {
      feature: {
        needs: [
          ArticleListComponent,
          FeedPagerComponent,
        ],
      },
    },
)
export class FeedComponent {

  @RenderFeed()
  request: FeedRequest = {};

  constructor(context: ComponentContext) {

    const navigation = context.get(Navigation);

    context.whenOn(supply => {
      navigation.read.tillOff(supply)(page => {
        this.request = page.get(PageFeedParam);
      });
    });
  }

}
