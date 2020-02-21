import { HierarchyContext, Navigation } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRender, Render } from '@wesib/wesib';
import { nextOnEvent, trackValue } from 'fun-events';
import { DomEventDispatcher } from 'fun-events/dom';
import {
  ApiErrorGenerator,
  ApiResponse,
  ArticleList,
  Conduit__NS,
  FeedRequest,
  feedRequestsEqual,
  FeedService,
  PagerEvent,
} from '../../common';
import { ArticleListComponent } from './article-list.component';
import { FeedArticleList } from './feed-article-list';
import { PageFeedParam } from './page-feed-param';

@Component(
    ['feed', Conduit__NS],
    {
      feature: {
        needs: ArticleListComponent,
      },
    },
)
export class FeedComponent {

  private readonly _request = trackValue<FeedRequest>({});
  private _response = trackValue<ApiResponse<ArticleList>>();

  constructor(private readonly _context: ComponentContext) {

    const navigation = _context.get(Navigation);
    const feedService = _context.get(FeedService);

    this._response.on(
        (newResponse, oldResponse) => _context.updateState('response', newResponse, oldResponse),
    );
    this._context.get(HierarchyContext).provide({
      a: FeedArticleList,
      is: this._response.read.keep.thru_(
          response => response?.ok
              ? response.body
              : { articles: [], articlesCount: 0 },
      ),
    });
    _context.whenOn(supply => {
      navigation.read.tillOff(supply)(page => {

        const request = page.get(PageFeedParam);
        const prevRequest = this._request.it;

        if (!feedRequestsEqual(request, prevRequest)) {
          this._request.it = request;
        }
      });
      this._request.read
          .tillOff(supply)
          .thru_(
              request => {
                this._response.it = undefined;
                return nextOnEvent(feedService.articles(request));
              },
          )(response => this._response.it = response);
    });
  }

  @Render()
  render(): ElementRender {

    const component = this;
    const { contentRoot }: { contentRoot: Node } = this._context;
    const navigation = this._context.get(Navigation);
    const document = this._context.get(BootstrapWindow).document;
    const errorGen = this._context.get(ApiErrorGenerator);
    const list = contentRoot.appendChild(document.createElement('conduit-article-list'));

    return () => {

      const response = this._response.it;
      const range = document.createRange();

      range.selectNodeContents(contentRoot);
      range.setStartAfter(list);
      range.deleteContents();

      if (!response) {
        range.insertNode(displayProgress());
      } else if (response.ok) {
        range.insertNode(displayPager(response.body));
      } else {
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

    function displayPager({ articlesCount }: ArticleList): Element {

      const { limit = 20, offset = 0 } = component._request.it;
      const totalPages = Math.ceil(articlesCount / limit);
      const currentPage = Math.floor(offset / limit);
      const pager = document.createElement('conduit-pager');

      pager.setAttribute('total-pages', totalPages.toString(10));
      pager.setAttribute('current-page', currentPage.toString(10));

      new DomEventDispatcher(pager).on<PagerEvent>('conduit:pager').just(({ detail: page }) => {

        const request = navigation.page.get(PageFeedParam);

        navigation.with(PageFeedParam, { ...request, offset: page * limit }).open();
      });

      return pager;
    }

  }

}
