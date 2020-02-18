import { Navigation } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRender, Render } from '@wesib/wesib';
import { nextOnEvent, trackValue } from 'fun-events';
import {
  ApiErrorGenerator,
  ApiResponse,
  ArticleList,
  Conduit__NS,
  FeedRequest,
  feedRequestsEqual,
  FeedService,
  hashURL,
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

    const document = this._context.get(BootstrapWindow).document;
    const errorGen = this._context.get(ApiErrorGenerator);

    return () => {

      const response = this.response;
      const range = document.createRange();

      range.selectNodeContents(this._context.contentRoot);
      range.deleteContents();

      if (!response) {
        displayProgress(range);
      } else if (response.ok) {
        displayArticles(range, response.body);
      } else {
        displayError(range, response.errors);
      }
    };

    function displayProgress(range: Range): void {
      console.log('progress');
      const loader = document.createElement('conduit-loader');
      loader.setAttribute('data-feed', 'feed');
      range.insertNode(loader);
    }

    function displayError(range: Range, errors: ApiResponse.Errors): void {
      console.log('error');

      const errorList = errorGen(errors);

      if (errorList) {
        range.insertNode(errorList);
      } else {

        const loader = document.createElement('conduit-loader');

        loader.setAttribute('load-error', 'Failed to load articles');
        range.insertNode(loader);
      }
    }

    function displayArticles(range: Range, articles: ArticleList): void {
      console.log('articles');

      const fragment = document.createDocumentFragment();

      articles.articles.forEach(article => {

        const element: any = fragment.appendChild(document.createElement('conduit-article-preview'));

        element.feedArticle = article;
      });

      range.insertNode(fragment);
    }
  }

}
