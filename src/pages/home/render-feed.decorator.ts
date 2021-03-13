import { ContextKey, ContextKey__symbol, SingleContextKey } from '@proc7ts/context-values';
import { mapAfter_, StatePath, trackValue } from '@proc7ts/fun-events';
import { noop } from '@proc7ts/primitives';
import { Shared } from '@wesib/generic';
import {
  BootstrapWindow,
  ComponentClass,
  ComponentContext,
  ComponentDef,
  ComponentProperty,
  ComponentPropertyDecorator,
  ElementRenderer,
  Render,
  RenderDef,
  RenderPath__root,
} from '@wesib/wesib';
import { ApiResponse } from '../../core/api';
import { ArticleList, FeedRequest, feedRequestsEqual, FeedService, FeedSupport, noArticles } from '../../core/feed';
import { LoadStatus, RenderLoader } from '../../core/loader';
import { ArticleListComponent } from './article-list.component';
import { ArticleListShare } from './article-list.share';
import { FeedPagerComponent } from './feed-pager.component';
import { FeedRequestShare } from './feed-request.share';
import { PageFeedParam } from './page-feed-param';

const RenderFeedState__key = (/*#__PURE__*/ new SingleContextKey<RenderFeedState>('render-feed-state'));
const RenderFeedState__symbol = (/*#__PURE__*/ Symbol('render-feed-state'));

class RenderFeedState {

  static get [ContextKey__symbol](): ContextKey<RenderFeedState> {
    return RenderFeedState__key;
  }

  readonly response = trackValue<ApiResponse<ArticleList>>();
  private readonly _request = trackValue<FeedRequest>({});

  constructor(context: ComponentContext, path: StatePath) {
    context.supply.cuts(this._request);

    const feedService = context.get(FeedService);

    this.response.on((
        newResponse,
        oldResponse,
    ) => context.updateState(path, newResponse, oldResponse));
    this._request.read(request => {
      this.response.it = undefined;
      feedService.articles(request)(
          response => this.response.it = response,
      ).needs(context);
    });
    context.on('conduit:article')(
        () => this._request.it = { ...this._request.it }, // Reload articles
    );
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
    def: RenderFeedDef = {},
): ComponentPropertyDecorator<FeedRequest, T> {

  const { requestParam, render: renderOptions } = def;

  return ComponentProperty(({ get, set: setValue, key }) => {

    const path: StatePath = [RenderPath__root, RenderFeedState__symbol, key];
    const render: RenderDef.Spec = RenderDef.fulfill({ on: path }, renderOptions);

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
            },
          },
          RenderLoader({ render, comment: `FEED(${String(key)})` }).By(renderLoader, key),
          Render(render).As(renderFeed, key),
          ...(requestParam ? [Shared(FeedRequestShare).As(requestParam, key)] : []),
          Shared(ArticleListShare).By(
              component => ComponentContext
                  .of(component)
                  .get(RenderFeedState)
                  .response
                  .read
                  .do(
                      mapAfter_(response => response?.ok ? response.body : noArticles),
                  ),
          ),
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
  readonly requestParam?: PageFeedParam;
  readonly render?: RenderDef.Options;
}
