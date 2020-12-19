import { supplyAfter } from '@proc7ts/fun-events';
import { Navigation } from '@wesib/generic';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { FeedRequest } from '../../core/feed';
import { PageFeedParam } from './page-feed-param';
import { RenderFeed } from './render-feed.decorator';

@Component(['feed', Conduit__NS])
export class FeedComponent {

  @RenderFeed()
  request: FeedRequest = {};

  constructor(context: ComponentContext) {

    const navigation = context.get(Navigation);

    context.whenConnected(() => {
      navigation.read.do(supplyAfter(context))(page => {
        this.request = page.get(PageFeedParam);
      });
    });
  }

}
