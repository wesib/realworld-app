import { PageHashURLSupport } from '@wesib/generic';
import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../../common';
import { FeedSupport } from '../../common/feed';
import { LoaderComponent } from '../../generic/loader';
import { FeedTagsComponent } from './feed-tags.component';
import { FeedToggleComponent } from './feed-toggle.component';
import { FeedComponent } from './feed.component';

@Component(
    ['home', Conduit__NS],
    {
      feature: {
        needs: [
          FeedSupport,
          FeedComponent,
          FeedTagsComponent,
          FeedToggleComponent,
          LoaderComponent,
          PageHashURLSupport,
        ],
      },
    },
)
export class HomeComponent {
}
