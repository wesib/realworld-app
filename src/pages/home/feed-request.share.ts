import { ContextKey__symbol } from '@proc7ts/context-values';
import { AfterEvent, mapAfter_ } from '@proc7ts/fun-events';
import { Share, Share__symbol } from '@wesib/generic';
import { ComponentContext } from '@wesib/wesib';
import { PageFeedParam } from './page-feed-param';

export class FeedRequestShare extends Share<PageFeedParam> {

  private constructor() {
    super('feed-request');
  }

  static readonly [Share__symbol]: FeedRequestShare = new FeedRequestShare();

  static get [ContextKey__symbol](): Share.Key<PageFeedParam> {
    return this[Share__symbol][ContextKey__symbol];
  }

  static pageFeedParamFor(consumer: ComponentContext): AfterEvent<[PageFeedParam]> {
    return this[Share__symbol].pageFeedParamFor(consumer);
  }

  pageFeedParamFor(consumer: ComponentContext): AfterEvent<[PageFeedParam]> {
    return this.valueFor(consumer).do(
        mapAfter_((param?, _sharer?) => param || PageFeedParam),
    );
  }

}
