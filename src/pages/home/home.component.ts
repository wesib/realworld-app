import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../../common';
import { FeedToggleComponent } from './feed-toggle.component';

@Component(
    ['home', Conduit__NS],
    {
      feature: {
        needs: [
          FeedToggleComponent,
        ],
      },
    },
)
export class HomeComponent {
}
