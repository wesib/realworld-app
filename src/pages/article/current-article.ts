import { SingleContextUpKey, SingleContextUpRef } from 'context-values/updatable';
import {
  EventSupplier,
  EventSupply,
  EventSupply__symbol,
  eventSupplyOf,
  OnEvent, onSupplied,
  trackValue,
  ValueTracker,
} from 'fun-events';
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

  get on(): OnEvent<[CurrentArticle, CurrentArticle]> {
    return this._it.on;
  }

  get [EventSupply__symbol](): EventSupply {
    return eventSupplyOf(this._it);
  }

  get it(): CurrentArticle {
    return this._it.it;
  }

  set it(value: CurrentArticle) {
    this._it.it = value;
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
