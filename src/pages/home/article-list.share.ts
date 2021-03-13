import { ContextKey__symbol } from '@proc7ts/context-values';
import { AfterEvent, mapAfter_ } from '@proc7ts/fun-events';
import { Share, Share__symbol } from '@wesib/generic';
import { ComponentContext } from '@wesib/wesib';
import { ArticleList, noArticles } from '../../core/feed';

export class ArticleListShare extends Share<ArticleList> {

  private constructor() {
    super('current-article');
  }

  static readonly [Share__symbol]: ArticleListShare = new ArticleListShare();

  static get [ContextKey__symbol](): Share.Key<ArticleList> {
    return this[Share__symbol][ContextKey__symbol];
  }

  static articlesFor(consumer: ComponentContext): AfterEvent<[ArticleList]> {
    return this[Share__symbol].articlesFor(consumer);
  }

  articlesFor(consumer: ComponentContext): AfterEvent<[ArticleList]> {
    return this.valueFor(consumer).do(
        mapAfter_((articles?, _sharer?) => articles || noArticles),
    );
  }

}
