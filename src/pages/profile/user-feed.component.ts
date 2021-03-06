import { supplyAfter } from '@proc7ts/fun-events';
import { Navigation } from '@wesib/generic';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { FeedRequest } from '../../core/feed';
import { RenderFeed } from '../home/render-feed.decorator';
import { PageUserProfileParam } from './page-user-profile-param';

@Component(['user-feed', Conduit__NS])
export class UserFeedComponent {

  @RenderFeed({ requestParam: PageUserProfileParam })
  request: FeedRequest = {};

  constructor(context: ComponentContext) {

    const navigation = context.get(Navigation);

    context.whenConnected(() => {
      navigation.read.do(supplyAfter(context))(page => {
        this.request = page.get(PageUserProfileParam);
      });
    });
  }

}
