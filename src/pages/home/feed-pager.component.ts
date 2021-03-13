import { afterAll, supplyAfter } from '@proc7ts/fun-events';
import { HierarchyContext, Navigation } from '@wesib/generic';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { PagingInfo, RenderPager } from '../../reusable';
import { ArticleListShare } from './article-list.share';
import { FeedRequestPageParam } from './feed-request-page-param';

@Component(['feed-pager', Conduit__NS])
export class FeedPagerComponent {

  private _feedPaging: PagingInfo = {};

  constructor(context: ComponentContext) {

    const hierarchy = context.get(HierarchyContext);
    const navigation = context.get(Navigation);

    context.whenConnected(() => {
      afterAll({
        param: hierarchy.get(FeedRequestPageParam),
        page: navigation,
        list: ArticleListShare.articlesFor(context),
      }).do(supplyAfter(context))(
          ({
            param: [paramRef],
            page: [page],
            list: [{ count }],
          }) => {

            const param = page.get(paramRef);
            const { limit = 20, offset = 0 } = param;

            this.feedPaging = {
              totalPages: Math.ceil(count / limit),
              currentPage: Math.floor(offset / limit),
              pageHref(page: number): string {
                return navigation.with(
                    paramRef,
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
