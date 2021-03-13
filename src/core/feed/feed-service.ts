import { ContextRef, SingleContextKey } from '@proc7ts/context-values';
import { OnEvent } from '@proc7ts/fun-events';
import { noArticle, NoArticle } from '../../pages/article/current-article';
import { ApiResponse } from '../api';
import { Article } from '../articles';
import { FeedRequest } from './feed-request';

export interface ArticleList {
  readonly list: readonly Article[];
  readonly count: number;
  bySlug(slug: string): Article | NoArticle;
}

export const noArticles: ArticleList = {
  list: [],
  count: 0,
  bySlug(_slug: string) {
    return noArticle;
  },
};

export interface FeedService {

  readonly tags: OnEvent<string[]>;

  articles(request: FeedRequest): OnEvent<[ApiResponse<ArticleList>]>;

}

export const FeedService: ContextRef<FeedService> = (
    /*#__PURE__*/ new SingleContextKey<FeedService>('feed-service')
);
