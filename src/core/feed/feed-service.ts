import { ContextRef, SingleContextKey } from 'context-values';
import { OnEvent } from 'fun-events';
import { ApiResponse } from '../api';
import { Article } from '../articles';
import { FeedRequest } from './feed-request';

export interface ArticleList {
  readonly articles: readonly Article[];
  readonly articlesCount: number;
}

export interface FeedService {

  articles(request: FeedRequest): OnEvent<[ApiResponse<ArticleList>]>;

  tags(): OnEvent<string[]>;

}

export const FeedService: ContextRef<FeedService> = (
    /*#__PURE__*/ new SingleContextKey<FeedService>('feed-service')
);