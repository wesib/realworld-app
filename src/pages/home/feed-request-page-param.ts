import { PageParam } from '@wesib/generic';
import { SingleContextUpKey, SingleContextUpRef } from 'context-values/updatable';
import { FeedRequest } from '../../common/feed';
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
