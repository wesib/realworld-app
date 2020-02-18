import { Navigation } from '@wesib/generic';
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
  hashURL, PagerEvent, setHashURL,
} from '../../common';

@Component(
    ['feed', Conduit__NS],
)
export class FeedComponent {

  private readonly _request = trackValue<[boolean, FeedRequest]>([false, {}]);
  private _response?: ApiResponse<ArticleList>;

  constructor(private readonly _context: ComponentContext) {

    const navigation = _context.get(Navigation);
    const feedService = _context.get(FeedService);

    _context.whenOn(supply => {
      navigation.read.tillOff(supply)(({ url }) => {

        const { pathname, searchParams: params } = hashURL(url);
        const personal = pathname === '/personal';
        const request: FeedRequest = {
          tag: params.get('tag') || undefined,
          author: params.get('author') || undefined,
          favorited: params.get('favorited') || undefined,
          limit: parseInt(params.get('limit') || '', 10) || undefined,
          offset: parseInt(params.get('offset') || '', 10) || undefined,
        };
        const [prevPersonal, prevRequest] = this._request.it;

        if (prevPersonal !== personal || !feedRequestsEqual(request, prevRequest)) {
          this._request.it = [personal, request];
        }
      });
      this._request.read
          .tillOff(supply)
          .thru_(
              ([personal, request]) => {
                this.response = undefined;
                return nextOnEvent(personal
                    ? feedService.feed(request)
                    : feedService.articles(request));
              },
          )(response => this.response = response);
    });
  }

  get response(): ApiResponse<ArticleList> | undefined {
    return this._response;
  }

  set response(value: ApiResponse<ArticleList> | undefined) {

    const old = this._response;

    this._response = value;
    this._context.updateState('posts', value, old);
  }

  @Render()
  render(): ElementRender {

    const component = this;
    const navigation = this._context.get(Navigation);
    const document = this._context.get(BootstrapWindow).document;
    const errorGen = this._context.get(ApiErrorGenerator);

    return () => {

      const response = this.response;
      const range = document.createRange();

      range.selectNodeContents(this._context.contentRoot);
      range.deleteContents();

      if (!response) {
        range.insertNode(displayProgress());
      } else if (response.ok) {
        range.insertNode(displayPager(response.body));
        range.insertNode(displayArticles(response.body));
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

      const [, { limit = 20, offset = 0 }] = component._request.it;
      const totalPages = Math.ceil(articlesCount / limit);
      const currentPage = Math.floor(offset / limit);
      const pager = document.createElement('conduit-pager');

      pager.setAttribute('total-pages', totalPages.toString(10));
      pager.setAttribute('current-page', currentPage.toString(10));

      new DomEventDispatcher(pager).on<PagerEvent>('conduit:pager').just(({ detail: page }) => {
        navigation.read.once(({ url }) => {

          const hash = hashURL(url);

          if (page) {
            hash.searchParams.set('offset', (page * limit).toString(10));
          } else {
            hash.searchParams.delete('offset');
          }

          navigation.open(setHashURL(url, hash));
        });
      });

      return pager;
    }

    function displayArticles(articles: ArticleList): DocumentFragment {

      const fragment = document.createDocumentFragment();

      articles.articles.forEach(article => {

        const element: any = fragment.appendChild(document.createElement('conduit-article-preview'));

        element.feedArticle = article;
      });

      return fragment;
    }
  }

}
