import { SingleContextUpKey, SingleContextUpRef } from 'context-values/updatable';
import { Article } from '../../common/articles';

export type CurrentArticle = Article | { readonly slug?: undefined };

export const CurrentArticle: SingleContextUpRef<CurrentArticle> = (
    /*#__PURE__*/ new SingleContextUpKey<CurrentArticle>(
        'current-article',
        {
          byDefault: () => ({}),
        },
    )
);
