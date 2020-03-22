import { SingleContextUpKey, SingleContextUpRef } from '@proc7ts/context-values/updatable';
import {
  EventReceiver,
  EventSupplier,
  EventSupply,
  EventSupply__symbol,
  eventSupplyOf,
  OnEvent,
  onSupplied,
  trackValue,
  ValueTracker,
} from '@proc7ts/fun-events';
import { Article } from '../../core/articles';

export interface UpdatableArticle extends Article {
  update(article: Article): void;
}

export interface NoArticle {
  readonly slug?: undefined;
}

export type CurrentArticle =
    | UpdatableArticle
    | NoArticle;

export const noArticle: NoArticle = {};
export const CurrentArticle: SingleContextUpRef<CurrentArticle> = (
    /*#__PURE__*/ new SingleContextUpKey<CurrentArticle>(
        'current-article',
        {
          byDefault: () => noArticle,
        },
    )
);

export class CurrentArticleTracker extends ValueTracker<CurrentArticle> {

  private readonly _it = trackValue<CurrentArticle>(noArticle);

  get [EventSupply__symbol](): EventSupply {
    return eventSupplyOf(this._it);
  }

  get it(): CurrentArticle {
    return this._it.it;
  }

  set it(value: CurrentArticle) {
    this._it.it = value;
  }

  on(): OnEvent<[CurrentArticle, CurrentArticle]>;
  on(receiver: EventReceiver<[CurrentArticle, CurrentArticle]>): EventSupply;
  on(
      receiver?: EventReceiver<[CurrentArticle, CurrentArticle]>,
  ): OnEvent<[CurrentArticle, CurrentArticle]> | EventSupply {
    return (this.on = this._it.on().F)(receiver);
  }

  set(article: Article | NoArticle): void {
    this.it = this.cast(article);
  }

  byArticles(source: EventSupplier<[Article | NoArticle]>): this {
    return this.by(onSupplied(source).thru_(article => this.cast(article)));
  }

  cast(article: Article | NoArticle): CurrentArticle {
    return article.slug
        ? {
          ...article,
          update: updated => this.set(updated),
        }
        : noArticle;
  }

}
