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
import { ContextKey, ContextKey__symbol, SingleContextKey } from 'context-values';
import { nextOnEvent, StatePath, trackValue } from 'fun-events';
import { ApiResponse } from '../../common/api';
import { ArticleList, FeedRequest, feedRequestsEqual, FeedService, FeedSupport } from '../../common/feed';
import { ApiErrorGenerator } from '../../common/input';
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
          Render({ path }).As(renderFeed, key),
      ),
      get,
      set(component, value) {
        setValue(component, value);
        ComponentContext.of(component).get(RenderFeedState).request = value;
      },
    };

    function renderFeed(this: object): ElementRenderer {

      const context = ComponentContext.of(this);
      const { contentRoot }: { contentRoot: Node } = context;
      const document = context.get(BootstrapWindow).document;
      const errorGen = context.get(ApiErrorGenerator);
      const list = contentRoot.appendChild(document.createElement('conduit-article-list'));
      const pager = contentRoot.appendChild(document.createElement('conduit-feed-pager'));
      const range = document.createRange();
      const state = context.get(RenderFeedState);

      range.setStartAfter(list);
      range.setEndBefore(pager);

      return () => {
        range.deleteContents();

        const response = state.response.it;

        if (!response) {
          range.insertNode(displayProgress());
        } else if (!response.ok) {
          range.insertNode(displayError(response.errors));
        }
      };

      function displayProgress(): Element {
        return document.createElement('conduit-loader');
      }

      function displayError(errors: ApiResponse.Errors): Element {

        const errorList = errorGen(errors);

        if (errorList) {
          return errorList;
        }

        const loader = document.createElement('conduit-loader');

        loader.setAttribute('load-error', 'Failed to load articles');

        return loader;
      }
    }
  });
}

export interface RenderFeedDef {
  readonly requestParam?: FeedRequestPageParam;
}
