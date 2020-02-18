import marked from 'marked';
import { UserProfile } from '../users';

export interface Article {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly body: string;
  readonly tagList: readonly string[];
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly favorited: boolean;
  readonly favoritesCount: number;
  readonly author: UserProfile;
}

export function articleContent(article: Article): Promise<string> {
  // TODO Sanitize article
  return new Promise<string>((resolve, reject) => {
    marked(article.body, (error, html) => {
      if (error != null) {
        reject(error);
      } else {
        resolve(html);
      }
    });
  });
}
