import { Feature } from '@wesib/wesib';
import { ArticleAuthorComponent } from './article-author.component';
import { FavoritePostComponent } from './favorite-post.component';

@Feature({
  needs: [
    ArticleAuthorComponent,
    FavoritePostComponent,
  ],
})
export class ArticleMetaComponentsSupport {
}
