import { BootstrapContext } from '@wesib/wesib';
import { overEntries, thruIt } from 'a-iterable';
import { asis, nextArg, nextArgs, nextSkip } from 'call-thru';
import { afterSupplied, OnEvent, onEventBy, trackValueBy } from 'fun-events';
import { ApiFetch, ApiRequest, ApiResponse } from '../api';
import { Article } from './article';
import { ArticleList, FeedRequest, FeedService } from './feed-service';

export class FeedService$ implements FeedService {

  private readonly _apiFetch: ApiFetch;
  private _tags?: OnEvent<string[]>;

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

  tags(): OnEvent<string[]> {
    if (this._tags) {
      return this._tags;
    }

    let onTags: OnEvent<string[]> | undefined;

    return this._tags = onEventBy(receiver => {
      if (!onTags) {

        const apiRequest: ApiRequest<string[]> = {
          path: 'tags',
          init: {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          },
          respondAs: 'tags',
          auth: false,
        };
        const onTagsLoad: OnEvent<[string[]]> = this._apiFetch(apiRequest).thru_(response => {
          if (response.ok) {
            return nextArg(response.body);
          }
          if (response.ok === false) {
            console.log('Failed to load tags', response.errors);
            return nextArg([]);
          }
          return nextSkip;
        });
        const tags = trackValueBy<string[] | undefined>(
            afterSupplied<[string[]?]>(onTagsLoad, () => []),
        );

        onTags = tags.read.thru_(
            tagList => tagList ? nextArgs(...tagList) : nextSkip,
        );
      }

      onTags(receiver);
    });
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
