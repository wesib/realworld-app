import { Page, PageHashURLParam, PageParam } from '@wesib/generic';
import { FeedRequest, feedRequestSearchParams } from '../../core/feed';

class PageUserProfileParam$ extends PageParam<FeedRequest, FeedRequest> {

  create(page: Page, input: FeedRequest): PageParam.Handle<FeedRequest, FeedRequest> {

    const handle = this.byDefault(page);

    handle.put(input);

    return handle;
  }

  byDefault(page: Page): PageParam.Handle<FeedRequest, FeedRequest> {
    return {
      get() {

        const { searchParams: params, pathname } = page.get(PageHashURLParam);
        const slashIdx = pathname.indexOf('/', 1);
        const user = slashIdx < 0 ? pathname.substring(1) : pathname.substring(1, slashIdx);
        let author: string | undefined;
        let favorited: string | undefined;

        if (slashIdx > 0 && pathname.substring(slashIdx + 1) === 'favorite') {
          favorited = user;
        } else {
          author = user;
        }

        return {
          tag: params.get('tag') || undefined,
          author,
          favorited,
          limit: parseInt(params.get('limit') || '', 10) || undefined,
          offset: parseInt(params.get('offset') || '', 10) || undefined,
        };
      },
      put(value) {

        const { favorited, author = '' } = value;
        const url = new URL(page.get(PageHashURLParam).href);

        url.pathname = favorited
            ? `/${encodeURIComponent(favorited)}/favorite`
            : `/${encodeURIComponent(author)}`;

        const searchParams = feedRequestSearchParams({ ...value, favorited: undefined, author: undefined }).toString();

        url.search = searchParams ? '?' + searchParams : '';

        page.put(PageHashURLParam, url);
      },
    };
  }

}

export const PageUserProfileParam: PageParam.WithDefaults<FeedRequest, FeedRequest> = new PageUserProfileParam$();
