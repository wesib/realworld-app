import { HierarchyContext } from '@wesib/generic';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { ArticleService } from '../../core/articles';
import { RenderHTML } from '../../reusable';
import { CurrentArticle } from './current-article';

@Component(['article-content', Conduit__NS])
export class ArticleContentComponent {

  @RenderHTML({ comment: 'ARTICLE(content)', offline: true })
  content?: Node;

  constructor(private readonly _context: ComponentContext) {

    const articleService = _context.get(ArticleService);
    const hierarchy = this._context.get(HierarchyContext);

    _context.whenOn(supply => {
      supply.whenOff(() => this.content = undefined);
      hierarchy.get(CurrentArticle).tillOff(supply)(article => {
        if (article.slug) {
          articleService.htmlContents(article)
              .then(content => {
                if (_context.connected) {
                  this.content = content;
                }
              })
              .catch(error => {
                if (_context.connected) {
                  this.content = undefined;
                  console.error('Failed to parse article', error);
                }
              });
        } else {
          this.content = undefined;
        }
      });
    });
  }

}
