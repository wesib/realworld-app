import { Feature } from '@wesib/wesib';
import { ArticleAuthorComponent } from './article-author.component';
import { ArticleTagsComponent } from './article-tags.component';
import { DeletePostBtnComponent } from './delete-post-btn.component';
import { EditPostBtnComponent } from './edit-post-btn.component';
import { FavoritePostBtnComponent } from './favorite-post-btn.component';

@Feature({
  needs: [
    ArticleAuthorComponent,
    ArticleTagsComponent,
    DeletePostBtnComponent,
    EditPostBtnComponent,
    FavoritePostBtnComponent,
  ],
})
export class ArticleButtonsSupport {
}
