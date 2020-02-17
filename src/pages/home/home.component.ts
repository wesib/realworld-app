import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../../common';
import { ArticlePreviewComponent } from './article-preview.component';
import { FeedToggleComponent } from './feed-toggle.component';
import { FeedComponent } from './feed.component';

@Component(
    ['home', Conduit__NS],
    {
      feature: {
        needs: [
          ArticlePreviewComponent,
          FeedComponent,
          FeedToggleComponent,
        ],
      },
    },
)
export class HomeComponent {
}
