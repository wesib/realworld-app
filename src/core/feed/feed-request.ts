import { itsEach, thruIt } from 'a-iterable';
import { NextSkip, nextSkip } from 'call-thru';

export type FeedId = '/personal-feed' | '/global-feed';

export interface FeedRequest {
  readonly feed?: FeedId;
  readonly tag?: string;
  readonly author?: string;
  readonly favorited?: string;
  readonly limit?: number;
  readonly offset?: number;
}

const feedRequestKeys: readonly (keyof FeedRequest)[] = ['feed', 'tag', 'author', 'favorited', 'limit', 'offset'];

export function feedRequestsEqual(first: FeedRequest, second: FeedRequest): boolean {
  return feedRequestKeys.every(key => first[key] === second[key]);
}

export function feedRequestSearchParams(request: FeedRequest): URLSearchParams {

  const params = new URLSearchParams();

  itsEach(
      thruIt(
          feedRequestKeys,
          key => key !== 'feed' ? key : nextSkip,
          (key: keyof FeedRequest): [keyof FeedRequest, string] | NextSkip => {

            const value = request[key];

            return value ? [key, String(value)] : nextSkip;
          },
      ),
      ([key, value]) => params.set(key, value),
  );

  return params;
}
