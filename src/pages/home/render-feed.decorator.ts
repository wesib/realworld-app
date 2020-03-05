import { HierarchyContext } from '@wesib/generic';
import {
  BootstrapWindow,
  ComponentClass,
  ComponentContext,
  ComponentDef,
  ComponentProperty,
  ComponentPropertyDecorator,
  ElementRenderer,
  Render,
} from '@wesib/wesib';
import { noop } from 'call-thru';
import { ContextKey, ContextKey__symbol, SingleContextKey } from 'context-values';
import { nextOnEvent, StatePath, trackValue } from 'fun-events';
import { ApiResponse } from '../../core/api';
import { ArticleList, FeedRequest, feedRequestsEqual, FeedService, FeedSupport } from '../../core/feed';
import { LoadStatus, RenderLoader } from '../../core/loader';
import { ArticleListComponent } from './article-list.component';
import { FeedArticleList } from './feed-article-list';
import { FeedPagerComponent } from './feed-pager.component';
import { FeedRequestPageParam } from './feed-request-page-param';

const RenderFeedState__key = (/*#__PURE__*/ new SingleContextKey<RenderFeedState>('render-feed-state'));
const RenderFeedState__symbol = (/*#__PURE__*/ Symbol('render-feed-state'));

class RenderFeedState {

  static get [ContextKey__symbol](): ContextKey<RenderFeedState> {
    return RenderFeedState__key;
  }

  readonly response = trackValue<ApiResponse<ArticleList>>();
  private readonly _request = trackValue<FeedRequest>({});

  constructor(
      context: ComponentContext,
      path: StatePath,
  ) {

    const feedService = context.get(FeedService);

    this.response.on((newResponse, oldResponse) => context.updateState(path, newResponse, oldResponse));
    context.get(HierarchyContext).provide({
      a: FeedArticleList,
      is: this.response.read.keep.thru_(
          response => response?.ok
              ? response.body
              : { articles: [], articlesCount: 0 },
      ),
    });
    context.whenOn(supply => {
      this._request.read
          .tillOff(supply)
          .thru_(
              request => {
                this.response.it = undefined;
                return nextOnEvent(feedService.articles(request));
              },
          )(response => this.response.it = response);
      context.on('conduit:article')(
          () => this._request.it = { ...this._request.it }, // Reload articles
      );
    });
  }

  get request(): FeedRequest {
    return this._request.it;
  }

  set request(value: FeedRequest) {

    const prevRequest = this.request;

    if (!feedRequestsEqual(value, prevRequest)) {
      this._request.it = value;
    }
  }

}

export function RenderFeed<T extends ComponentClass>(
    { requestParam }: RenderFeedDef = {},
): ComponentPropertyDecorator<FeedRequest, T> {
  return ComponentProperty(({ get, set: setValue, key }) => {

    const path: StatePath = [RenderFeedState__symbol, key];

    return {
      componentDef: ComponentDef.all(
          {
            feature: {
              needs: [
                ArticleListComponent,
                FeedPagerComponent,
                FeedSupport,
              ],
            },
            define(defContext) {
              defContext.perComponent({
                a: RenderFeedState,
                by: (context: ComponentContext) => new RenderFeedState(context, path),
              });
              if (requestParam) {
                defContext.whenComponent(context => {
                  context.get(HierarchyContext).provide({ a: FeedRequestPageParam, is: requestParam });
                });
              }
            },
          },
          RenderLoader({ path, offline: true, comment: `FEED(${String(key)})` }).By(renderLoader, key),
          Render({ path, offline: true }).As(renderFeed, key),
      ),
      get,
      set(component, value) {
        setValue(component, value);
        ComponentContext.of(component).get(RenderFeedState).request = value;
      },
    };

    function renderLoader(component: InstanceType<T>): LoadStatus | undefined {
      return ComponentContext.of(component).get(RenderFeedState).response.it;
    }

    function renderFeed(this: InstanceType<T>): ElementRenderer {

      const context = ComponentContext.of(this);
      const { contentRoot }: { contentRoot: Node } = context;
      const document = context.get(BootstrapWindow).document;

      contentRoot.appendChild(document.createElement('conduit-article-list'));
      contentRoot.appendChild(document.createElement('conduit-feed-pager'));

      return noop;
    }
  });
}

export interface RenderFeedDef {
  readonly requestParam?: FeedRequestPageParam;
}
