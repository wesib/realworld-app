import { ContextRef, SingleContextKey } from 'context-values';
import { OnEvent } from 'fun-events';
import { ApiResponse } from '../api';
import { Article } from './article';

export interface CreateArticleRequest {

  readonly title: string;
  readonly description: string;
  readonly body: string;
  readonly tagList?: readonly string[];

}

export interface ArticleService {

  article(slug: string): OnEvent<[ApiResponse<Article>]>;

  htmlContents(article: Article): Promise<Node>;

  likeArticle(slug: string, like?: boolean): OnEvent<[ApiResponse<Article>]>;

  createArticle(request: CreateArticleRequest): OnEvent<[ApiResponse<Article>]>;

  updateArticle(slug: string, request: Partial<CreateArticleRequest>): OnEvent<[ApiResponse<Article>]>;

  deleteArticle(slug: string): OnEvent<[ApiResponse<any>]>;

}

export const ArticleService: ContextRef<ArticleService> = (
    /*#__PURE__*/ new SingleContextKey<ArticleService>('article-service')
);

