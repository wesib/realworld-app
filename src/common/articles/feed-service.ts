import { ContextRef, SingleContextKey } from 'context-values';
import { OnEvent } from 'fun-events';
import { ApiResponse } from '../api';
import { Article } from './article';

export interface FeedRequest {
  readonly tag?: string;
  readonly author?: string;
  readonly favorited?: string;
  readonly limit?: number;
  readonly offset?: number;
}

const feedRequestKeys: readonly (keyof FeedRequest)[] = ['tag', 'author', 'favorited', 'limit', 'offset'];

export function feedRequestsEqual(first: FeedRequest, second: FeedRequest): boolean {
  return feedRequestKeys.every(key => first[key] === second[key]);
}

export interface ArticleList {
  readonly articles: readonly Article[];
  readonly articlesCount: number;
}

export interface FeedService {

  articles(request: FeedRequest): OnEvent<[ApiResponse<ArticleList>]>;

  feed(request: FeedRequest): OnEvent<[ApiResponse<ArticleList>]>;

  tags(): OnEvent<string[]>;

  article(slug: string): OnEvent<[ApiResponse<Article>]>;

}

export const FeedService: ContextRef<FeedService> = new SingleContextKey<FeedService>('feed-service');
