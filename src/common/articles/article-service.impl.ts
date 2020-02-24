import { BootstrapContext, BootstrapWindow } from '@wesib/wesib';
import { OnEvent } from 'fun-events';
import { ApiFetch, ApiRequest, ApiResponse } from '../api';
import { Article } from './article';
import { ArticleService } from './article-service';
import marked from 'marked';

export class ArticleService$ implements ArticleService {

  private readonly _apiFetch: ApiFetch;
  private readonly _schedule: (task: () => void) => void;

  constructor(context: BootstrapContext) {
    this._apiFetch = context.get(ApiFetch);

    const window = context.get(BootstrapWindow);

    if ((window as any).requestIdleCallback) {
      this._schedule = task => (window as any).requestIdleCallback(task, { timeout: 100 });
    } else {
      this._schedule = task => window.setTimeout(task, 0);
    }
  }

  article(slug: string): OnEvent<[ApiResponse<Article>]> {

    const apiRequest: ApiRequest<Article> = {
      path: `articles/${encodeURIComponent(slug)}`,
      init: {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
      respondAs: 'article',
    };

    return this._apiFetch(apiRequest);
  }

  htmlContents(article: Article): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this._schedule(() => {
        marked(article.body, (error, html) => {
          if (error != null) {
            reject(error);
          } else {
            resolve(html);
          }
        });
      });
    });
  }

}
