import { Page, PageHashURLParam, PageParam } from '@wesib/generic';
import { FeedRequest, feedRequestSearchParams } from '../../core/feed';

class PageFeedParam$ extends PageParam<FeedRequest, FeedRequest> {

  create(page: Page, input: FeedRequest): PageParam.Handle<FeedRequest, FeedRequest> {

    const handle = this.byDefault(page);

    handle.put(input);

    return handle;
  }

  byDefault(page: Page): PageParam.Handle<FeedRequest, FeedRequest> {
    return {
      get() {

        const { searchParams: params, pathname } = page.get(PageHashURLParam);

        return {
          feed: pathname === '/personal-feed' ? pathname : undefined,
          tag: params.get('tag') || undefined,
          limit: parseInt(params.get('limit') || '', 10) || undefined,
          offset: parseInt(params.get('offset') || '', 10) || undefined,
        };
      },
      put(value) {

        const { feed } = value;
        const url = new URL(page.get(PageHashURLParam).href);

        url.pathname = feed === '/personal-feed' ? feed : '';

        const searchParams = feedRequestSearchParams(value).toString();

        url.search = searchParams ? '?' + searchParams : '';

        page.put(PageHashURLParam, url);
      },
    };
  }

}

export type PageFeedParam = PageParam.WithDefaults<FeedRequest, FeedRequest>;

export const PageFeedParam: PageFeedParam = (/*#__PURE__*/ new PageFeedParam$());
