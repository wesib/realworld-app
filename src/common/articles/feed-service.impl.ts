import { BootstrapContext } from '@wesib/wesib';
import { overEntries, thruIt } from 'a-iterable';
import { asis, nextArg, nextSkip } from 'call-thru';
import { OnEvent } from 'fun-events';
import { ApiFetch, ApiRequest, ApiResponse } from '../api';
import { Article } from './article';
import { ArticleList, FeedRequest, FeedService } from './feed-service';

export class FeedService$ implements FeedService {

  private readonly _apiFetch: ApiFetch;

  constructor(context: BootstrapContext) {
    this._apiFetch = context.get(ApiFetch);
  }

  articles(request: FeedRequest): OnEvent<[ApiResponse<ArticleList>]> {
    return this._articles('articles', request);
  }

  feed(request: FeedRequest): OnEvent<[ApiResponse<ArticleList>]> {
    return this._articles('articles/feed', request, true);
  }

  article(slug: string): OnEvent<[ApiResponse<Article>]> {

    const apiRequest: ApiRequest<Article> = {
      path: `articles/${encodeURIComponent(slug)}`,
      init: {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
      respondAs: 'article',
    };

    return this._apiFetch(apiRequest);
  }

  private _articles(
      path: string,
      request: FeedRequest,
      auth?: boolean,
  ): OnEvent<[ApiResponse<ArticleList>]> {

    const params: [string, string][] = Array.from(thruIt(
        overEntries(request),
        ([key, value]) => value
            ? nextArg<[string, string]>([key, String(value)])
            : nextSkip,
    ));

    if (params.length) {
      path = `${path}?${new URLSearchParams(params)}`;
    }

    const apiRequest: ApiRequest<ArticleList> = {
      path,
      init: {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
      auth,
      respondAs: asis,
    };

    return this._apiFetch(apiRequest);
  }

}
