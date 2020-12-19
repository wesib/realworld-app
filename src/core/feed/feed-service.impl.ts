import { afterSupplied, mapOn_, OnEvent, onEventBy, trackValueBy, translateOn_ } from '@proc7ts/fun-events';
import { asis } from '@proc7ts/primitives';
import { BootstrapContext } from '@wesib/wesib';
import { ApiFetch, ApiRequest, ApiResponse } from '../api';
import { FeedId, FeedRequest, feedRequestSearchParams } from './feed-request';
import { ArticleList, FeedService } from './feed-service';

interface FeedSource {
  path: string;
  auth?: boolean;
}

const feedSources: { readonly [id in FeedId]: FeedSource } = {
  '/personal-feed': { path: 'articles/feed', auth: true },
  '/global-feed': { path: 'articles' },
};

export class FeedService$ implements FeedService {

  readonly tags: OnEvent<string[]>;
  private readonly _apiFetch: ApiFetch;

  constructor(context: BootstrapContext) {
    this._apiFetch = context.get(ApiFetch);

    let onTags: OnEvent<string[]> | undefined;

    this.tags = onEventBy(receiver => {
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
        const onTagsLoad: OnEvent<[string[]]> = this._apiFetch(apiRequest).do(
            mapOn_(response => {
              if (response.ok) {
                return response.body;
              }

              console.error('Failed to load tags', response.errors);

              return [];
            }),
        );
        const tags = trackValueBy<string[] | undefined>(
            afterSupplied<[string[]?]>(onTagsLoad, () => []),
        );

        onTags = tags.read.do(
            translateOn_((send, tagList) => tagList && send(...tagList)),
        );
      }

      onTags(receiver);
    });
  }

  articles(request: FeedRequest): OnEvent<[ApiResponse<ArticleList>]> {

    const { path, auth } = feedSources[request.feed || '/global-feed'];

    const apiRequest: ApiRequest<ArticleList> = {
      path: `${path}?${feedRequestSearchParams(request)}`,
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
