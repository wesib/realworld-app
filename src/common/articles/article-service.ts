import { ContextRef, SingleContextKey } from 'context-values';
import { OnEvent } from 'fun-events';
import { ApiResponse } from '../api';
import { Article } from './article';

export interface ArticleService {

  article(slug: string): OnEvent<[ApiResponse<Article>]>;

  htmlContents(article: Article): Promise<string>;

}

export const ArticleService: ContextRef<ArticleService> = new SingleContextKey<ArticleService>('article-service');

