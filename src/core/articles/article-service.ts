import { ContextRef, SingleContextKey } from 'context-values';
import { OnEvent } from 'fun-events';
import { ApiResponse } from '../api';
import { Article } from './article';

export interface ArticleService {

  article(slug: string): OnEvent<[ApiResponse<Article>]>;

  htmlContents(article: Article): Promise<Node>;

  likeArticle(slug: string, like?: boolean): OnEvent<[ApiResponse<Article>]>;

}

export const ArticleService: ContextRef<ArticleService> = (
    /*#__PURE__*/ new SingleContextKey<ArticleService>('article-service')
);

