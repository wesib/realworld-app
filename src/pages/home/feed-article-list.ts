import { SingleContextUpKey, SingleContextUpRef } from '@proc7ts/context-values/updatable';
import { ArticleList, noArticles } from '../../core/feed';

export type FeedArticleList = ArticleList;

export const FeedArticleList: SingleContextUpRef<FeedArticleList> = (
    /*#__PURE__*/ new SingleContextUpKey<FeedArticleList>(
        'feed-article-list',
        {
          byDefault: () => noArticles,
        },
    )
);
