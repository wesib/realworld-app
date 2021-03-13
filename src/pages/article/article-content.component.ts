import { Component, ComponentContext, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { ArticleService } from '../../core/articles';
import { RenderHTML } from '../../reusable';
import { CurrentArticleShare } from './current-article.share';

@Component(['article-content', Conduit__NS])
export class ArticleContentComponent {

  @StateProperty()
  content?: Node;

  constructor(context: ComponentContext) {

    const articleService = context.get(ArticleService);

    context.supply.whenOff(() => this.content = undefined);
    CurrentArticleShare.articleFor(context)(article => {
      if (article.slug) {
        articleService.htmlContents(article)
            .then(content => {
              if (context.connected) {
                this.content = content;
              }
            })
            .catch(error => {
              if (context.connected) {
                this.content = undefined;
                console.error('Failed to parse article', error);
              }
            });
      } else {
        this.content = undefined;
      }
    }).whenOff(() => {
      this.content = undefined;
    });
  }

  @RenderHTML({ comment: 'ARTICLE(content)' })
  render(): Node | undefined {
    return this.content;
  }

}
