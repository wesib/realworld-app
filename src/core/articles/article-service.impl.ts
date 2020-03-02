import { BootstrapContext, BootstrapWindow } from '@wesib/wesib';
import { OnEvent } from 'fun-events';
import { ApiFetch, ApiRequest, ApiResponse } from '../api';
import { Article } from './article';
import { ArticleService } from './article-service';
import marked from 'marked';
import DOMPurify from 'dompurify';

export class ArticleService$ implements ArticleService {

  private readonly _apiFetch: ApiFetch;
  private readonly _schedule: (task: () => void) => void;
  private readonly _purify: DOMPurify.DOMPurifyI;

  constructor(context: BootstrapContext) {
    this._apiFetch = context.get(ApiFetch);

    const window = context.get(BootstrapWindow);

    this._purify = DOMPurify(window);
    if ((window as any).requestIdleCallback) {
      this._schedule = task => (window as any).requestIdleCallback(task, { timeout: 750 });
    } else {
      this._schedule = task => window.setTimeout(task);
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

  async htmlContents(article: Article): Promise<Node> {

    const html = await new Promise<string>((resolve, reject) => {
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

    return this._purify.sanitize(
        html, {
          RETURN_DOM_FRAGMENT: true,
          RETURN_DOM_IMPORT: true,
        },
    );
  }

  likeArticle(slug: string, like = true): OnEvent<[ApiResponse<Article>]> {

    const apiRequest: ApiRequest<Article> = {
      path: `articles/${encodeURIComponent(slug)}/favorite`,
      init: {
        method: like ? 'POST' : 'DELETE',
        headers: {
          Accept: 'application/json',
        },
      },
      respondAs: 'article',
      auth: true,
    };

    return this._apiFetch(apiRequest);
  }

}
