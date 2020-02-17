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

export interface ArticleList {
  readonly articleCount: number;
  readonly articles: readonly Article[];
}

export interface FeedService {

  articles(request: FeedRequest): OnEvent<[ApiResponse<ArticleList>]>;

  feed(request: FeedRequest): OnEvent<[ApiResponse<ArticleList>]>;

  article(slug: string): OnEvent<[ApiResponse<Article>]>;

}

export const FeedService: ContextRef<FeedService> = new SingleContextKey<FeedService>('feed-service');
