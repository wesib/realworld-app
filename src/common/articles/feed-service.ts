import { ContextRef, SingleContextKey } from 'context-values';
import { OnEvent } from 'fun-events';
import { ApiResponse } from '../api';
import { Article } from './article';
import { FeedRequest } from './feed-request';

export interface ArticleList {
  readonly articles: readonly Article[];
  readonly articlesCount: number;
}

export interface FeedService {

  articles(request: FeedRequest): OnEvent<[ApiResponse<ArticleList>]>;

  tags(): OnEvent<string[]>;

}

export const FeedService: ContextRef<FeedService> = new SingleContextKey<FeedService>('feed-service');
