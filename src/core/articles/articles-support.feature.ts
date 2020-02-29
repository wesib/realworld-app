import { Feature } from '@wesib/wesib';
import { ArticleService } from './article-service';
import { ArticleService$ } from './article-service.impl';

@Feature({
  setup(setup) {
    setup.provide({ a: ArticleService, as: ArticleService$ });
  },
})
export class ArticlesSupport {
}
