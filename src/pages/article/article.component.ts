import { HandleNavLinks, HierarchyContext, Navigation, PageHashURLParam } from '@wesib/generic';
import {
  BootstrapWindow,
  Component,
  ComponentContext,
  DefaultNamespaceAliaser,
  ElementRenderer,
  Render,
  StateProperty,
  statePropertyPathTo,
} from '@wesib/wesib';
import { trackValue } from 'fun-events';
import { css__naming } from 'namespace-aliaser';
import { Conduit__NS } from '../../common';
import { ApiResponse } from '../../common/api';
import { Article, ArticleService } from '../../common/articles';
import { ArticlesSupport } from '../../common/articles/articles-support.feature';
import { ApiErrorGenerator } from '../../common/input';
import { LoaderComponent } from '../../generic/loader';
import { CurrentUserProfile, currentUserProfileBy, noUserProfile } from '../profile/current-user-profile';
import { FollowAuthorComponent } from '../profile/follow-author.component';
import { ArticleMetaComponentsSupport } from './article-meta-components-support.feature';
import { CurrentArticle } from './current-article';

@Component(
    ['article', Conduit__NS],
    {
      feature: {
        needs: [
          ArticleMetaComponentsSupport,
          ArticlesSupport,
          FollowAuthorComponent,
          LoaderComponent,
        ],
      },
    },
    HandleNavLinks(),
)
export class ArticleComponent {

  private readonly _response = trackValue<ApiResponse<Article>>();

  @StateProperty()
  private content?: Node;

  constructor(private readonly _context: ComponentContext) {

    const articleService = _context.get(ArticleService);
    const navigation = _context.get(Navigation);
    const hierarchy = this._context.get(HierarchyContext);
    const author = currentUserProfileBy(
        this._response.read.keep.thru_(
            response => response && response.ok ? response.body.author : noUserProfile,
        ),
    );

    hierarchy.provide({
      a: CurrentArticle,
      is: this._response.read.keep.thru_(
          response => response && response.ok ? response.body : {},
      ),
    });
    hierarchy.provide({
      a: CurrentUserProfile,
      is: author,
    });
    _context.whenOn(supply => {
      supply.whenOff(() => this.content = undefined);
      this._response.read.tillOff(supply)(response => {
        if (response && response.ok) {
          articleService.htmlContents(response.body)
              .then(content => {
                if (_context.connected) {
                  this.content = content;
                }
              })
              .catch(error => {
                if (_context.connected) {
                  this.content = undefined;
                  this.response = { ok: false, errors: { article: [`can not be parser ${String(error)}`] } };
                }
              });
        } else {
          this.content = undefined;
        }
      });
    });
    _context.whenOn(supply => {
      navigation.read.tillOff(supply).consume(page => {

        const slug = page.get(PageHashURLParam).pathname.substring(0);

        return articleService.article(slug)(response => this.response = response);
      });
    });
  }

  get response(): ApiResponse<Article> | undefined {
    return this._response.it;
  }

  @StateProperty()
  set response(value: ApiResponse<Article> | undefined) {
    this._response.it = value;
  }

  @Render({ path: statePropertyPathTo('response') })
  render(): ElementRenderer {

    const visibleClassName = css__naming.name(['visible', Conduit__NS], this._context.get(DefaultNamespaceAliaser));
    const genErrors = this._context.get(ApiErrorGenerator);
    const { element, contentRoot }: { element: Element; contentRoot: Node } = this._context;
    const { document } = this._context.get(BootstrapWindow);
    let loader: Element | undefined;

    return () => {

      const { response } = this;

      if (!response) {
        displayLoader();
      } else if (!response.ok) {
        displayErrors(response);
      } else {
        displayContents(response);
      }
    };

    function displayContents({ body }: ApiResponse.Ok<Article>): void {
      hideLoader();
      setContentsVisible(true);
      document.getElementById('article:title')!.innerText = body.title;
    }

    function displayErrors({ errors }: ApiResponse.Failure): void {
      hideLoader();
      setContentsVisible(false);
      loader = genErrors(errors);
      if (loader) {
        contentRoot.appendChild(loader);
      }
    }

    function displayLoader(): void {
      setContentsVisible(false);
      if (!loader) {
        loader = contentRoot.appendChild(document.createElement('conduit-loader'));
      }
    }

    function hideLoader(): void {
      if (loader) {
        loader.remove();
        loader = undefined;
      }
    }

    function setContentsVisible(visible: boolean): void {
      if (visible) {
        element.classList.add(visibleClassName);
      } else {
        element.classList.remove(visibleClassName);
      }
    }
  }

  @Render({ path: statePropertyPathTo('content') })
  renderContent(): ElementRenderer {

    const { document } = this._context.get(BootstrapWindow);

    return () => {

      const contentParent = document.getElementById('article:content');

      if (contentParent) {
        contentParent.innerHTML = '';

        const content = this.content;

        if (content) {
          contentParent.appendChild(content);
        }
      }
    };
  }

}
