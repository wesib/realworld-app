import { SingleContextUpKey, SingleContextUpRef } from '@proc7ts/context-values/updatable';
import { PageParam } from '@wesib/generic';
import { FeedRequest } from '../../core/feed';
import { PageFeedParam } from './page-feed-param';

export type FeedRequestPageParam = PageParam.WithDefaults<FeedRequest, FeedRequest>;

export const FeedRequestPageParam: SingleContextUpRef<FeedRequestPageParam> = (
    /*#__PURE__*/ new SingleContextUpKey<FeedRequestPageParam>(
        'feed-request-page-param',
        {
          byDefault: () => PageFeedParam,
        },
    )
);
