import { asis, nextArg, nextArgs, nextSkip } from '@proc7ts/call-thru';
import { afterSupplied, EventReceiver, EventSupply, OnEvent, onEventBy, trackValueBy } from '@proc7ts/fun-events';
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

  private readonly _apiFetch: ApiFetch;

  constructor(context: BootstrapContext) {
    this._apiFetch = context.get(ApiFetch);
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

  tags(): OnEvent<string[]>;
  tags(receiver: EventReceiver<string[]>): EventSupply;
  tags(receiver?: EventReceiver<string[]>): OnEvent<string[]> | EventSupply {

    let onTags: OnEvent<string[]> | undefined;

    return (this.tags = onEventBy(receiver => {
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

        onTags = tags.read().thru_(
            tagList => tagList ? nextArgs(...tagList) : nextSkip,
        );
      }

      onTags.to(receiver);
    }).F)(receiver);
  }

}
