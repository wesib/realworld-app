import { HierarchyContext, Navigation } from '@wesib/generic';
import { Component, ComponentContext } from '@wesib/wesib';
import { afterAll } from 'fun-events';
import { Conduit__NS, PagingInfo, RenderPager } from '../../common';
import { FeedArticleList } from './feed-article-list';
import { PageFeedParam } from './page-feed-param';

@Component(['feed-pager', Conduit__NS])
export class FeedPagerComponent {

  private _feedPaging: PagingInfo = {};

  constructor(context: ComponentContext) {

    const hierarchy = context.get(HierarchyContext);
    const navigation = context.get(Navigation);

    context.whenOn(supply => {
      afterAll({
        param: navigation.read.keep.thru_(page => page.get(PageFeedParam)),
        list: hierarchy.get(FeedArticleList),
      }).tillOff(supply)(
          ({
            param: [param],
            list: [{ articlesCount }],
          }) => {

            const { limit = 20, offset = 0 } = param;

            this.feedPaging = {
              totalPages: Math.ceil(articlesCount / limit),
              currentPage: Math.floor(offset / limit),
              pageHref(page: number): string {
                return navigation.with(
                    PageFeedParam,
                    { ...param, offset: limit * page },
                ).pretend()?.url.href || '';
              },
            };
          },
      );
    });
  }

  @RenderPager()
  get feedPaging(): PagingInfo {
    return this._feedPaging;
  }

  set feedPaging(value: PagingInfo) {
    this._feedPaging = value;
  }

}
