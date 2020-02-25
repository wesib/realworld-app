import { Feature } from '@wesib/wesib';
import { ArticleAuthorComponent } from './article-author.component';

@Feature({
  needs: [
    ArticleAuthorComponent,
  ],
})
export class ArticleMetaSupport {
}
