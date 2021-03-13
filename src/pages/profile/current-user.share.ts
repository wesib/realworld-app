import { ContextKey__symbol } from '@proc7ts/context-values';
import { AfterEvent, mapAfter_ } from '@proc7ts/fun-events';
import { Share, Share__symbol } from '@wesib/generic';
import { ComponentContext } from '@wesib/wesib';
import { CurrentUserProfile, noUserProfile } from './current-user-profile';

export class CurrentUserShare extends Share<CurrentUserProfile> {

  private constructor() {
    super('current-user-profile');
  }

  static readonly [Share__symbol]: CurrentUserShare = new CurrentUserShare();

  static get [ContextKey__symbol](): Share.Key<CurrentUserProfile> {
    return this[Share__symbol][ContextKey__symbol];
  }

  static userFor(consumer: ComponentContext): AfterEvent<[CurrentUserProfile]> {
    return this[Share__symbol].userFor(consumer);
  }

  userFor(consumer: ComponentContext): AfterEvent<[CurrentUserProfile]> {
    return this.valueFor(consumer).do(
        mapAfter_((user?, _sharer?) => user || noUserProfile),
    );
  }

}
