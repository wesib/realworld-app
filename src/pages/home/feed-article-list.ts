import { SingleContextUpKey, SingleContextUpRef } from 'context-values/updatable';
import { ArticleList } from '../../core/feed';

export type FeedArticleList = ArticleList;

export const FeedArticleList: SingleContextUpRef<FeedArticleList> = (
    /*#__PURE__*/ new SingleContextUpKey<FeedArticleList>(
        'feed-article-list',
        {
          byDefault: () => ({ articles: [], articlesCount: 0 }),
        },
    )
);
