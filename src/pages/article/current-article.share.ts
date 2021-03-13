import { ContextKey__symbol } from '@proc7ts/context-values';
import { AfterEvent, mapAfter_ } from '@proc7ts/fun-events';
import { Share, Share__symbol } from '@wesib/generic';
import { ComponentContext } from '@wesib/wesib';
import { CurrentArticle, noArticle } from './current-article';

export class CurrentArticleShare extends Share<CurrentArticle> {

  private constructor() {
    super('current-user-profile');
  }

  static readonly [Share__symbol]: CurrentArticleShare = new CurrentArticleShare();

  static get [ContextKey__symbol](): Share.Key<CurrentArticle> {
    return this[Share__symbol][ContextKey__symbol];
  }

  static articleFor(consumer: ComponentContext): AfterEvent<[CurrentArticle]> {
    return this[Share__symbol].articleFor(consumer);
  }

  articleFor(consumer: ComponentContext): AfterEvent<[CurrentArticle]> {
    return this.valueFor(consumer).do(
        mapAfter_((user?, _sharer?) => user || noArticle),
    );
  }

}
