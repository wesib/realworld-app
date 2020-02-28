import { SingleContextUpKey, SingleContextUpRef } from 'context-values/updatable';
import { ArticleList } from '../../common/feed';

export type FeedArticleList = ArticleList;

export const FeedArticleList: SingleContextUpRef<FeedArticleList> = (
    new SingleContextUpKey<FeedArticleList>(
        'feed-article-list',
        {
          byDefault: () => ({ articles: [], articlesCount: 0 }),
        },
    )
);
