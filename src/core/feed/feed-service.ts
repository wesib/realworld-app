import { ContextRef, SingleContextKey } from '@proc7ts/context-values';
import { OnEvent } from '@proc7ts/fun-events';
import { ApiResponse } from '../api';
import { Article } from '../articles';
import { FeedRequest } from './feed-request';

export interface ArticleList {
  readonly articles: readonly Article[];
  readonly articlesCount: number;
}

export const noArticles: ArticleList = { articles: [], articlesCount: 0 };

export interface FeedService {

  readonly tags: OnEvent<string[]>;

  articles(request: FeedRequest): OnEvent<[ApiResponse<ArticleList>]>;

}

export const FeedService: ContextRef<FeedService> = (
    /*#__PURE__*/ new SingleContextKey<FeedService>('feed-service')
);
