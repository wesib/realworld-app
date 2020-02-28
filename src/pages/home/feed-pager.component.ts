import { HierarchyContext, Navigation } from '@wesib/generic';
import { Component, ComponentContext } from '@wesib/wesib';
import { afterAll } from 'fun-events';
import { Conduit__NS } from '../../common';
import { PagingInfo, RenderPager } from '../../generic/pager';
import { FeedArticleList } from './feed-article-list';
import { FeedRequestPageParam } from './feed-request-page-param';

@Component(['feed-pager', Conduit__NS])
export class FeedPagerComponent {

  private _feedPaging: PagingInfo = {};

  constructor(context: ComponentContext) {

    const hierarchy = context.get(HierarchyContext);
    const navigation = context.get(Navigation);

    context.whenOn(supply => {
      afterAll({
        param: hierarchy.get(FeedRequestPageParam),
        page: navigation,
        list: hierarchy.get(FeedArticleList),
      }).tillOff(supply)(
          ({
            param: [paramRef],
            page: [page],
            list: [{ articlesCount }],
          }) => {

            const param = page.get(paramRef);
            const { limit = 20, offset = 0 } = param;

            this.feedPaging = {
              totalPages: Math.ceil(articlesCount / limit),
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
