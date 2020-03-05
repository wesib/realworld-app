import { Feature } from '@wesib/wesib';
import { ArticleAuthorComponent } from './article-author.component';
import { DeletePostBtnComponent } from './delete-post-btn.component';
import { EditPostBtnComponent } from './edit-post-btn.component';
import { FavoritePostBtnComponent } from './favorite-post-btn.component';

@Feature({
  needs: [
    ArticleAuthorComponent,
    DeletePostBtnComponent,
    EditPostBtnComponent,
    FavoritePostBtnComponent,
  ],
})
export class ArticleButtonsSupport {
}
