import { InStatus, InSubmit, InSubmitError } from '@frontmeans/input-aspects';
import { afterAll, afterSent, afterThe, digAfter_, mapAfter_, supplyAfter } from '@proc7ts/fun-events';
import { HierarchyContext, Navigation, PageHashURLParam } from '@wesib/generic';
import { InputToForm, OnSubmit } from '@wesib/generic/input';
import { Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { ApiResponse, apiSubmit } from '../../core/api';
import { Article, ArticleService, ArticlesSupport, CreateArticleRequest } from '../../core/articles';
import { AuthService } from '../../core/auth';
import { FeedSupport } from '../../core/feed';
import { ConduitInputSupport, FillConduitForm } from '../../core/input';
import { LoadStatus, RenderLoader } from '../../core/loader';
import { noArticle, NoArticle } from '../article/current-article';
import { ArticleBodyComponent } from './article-body.component';
import { ArticleDescriptionComponent } from './article-description.component';
import { ArticleTagEditorComponent } from './article-tag-editor.component';
import { ArticleTitleComponent } from './article-title.component';

@Component(
    ['article-editor', Conduit__NS],
    {
      feature: {
        needs: [
          ArticleBodyComponent,
          ArticleDescriptionComponent,
          ArticleTagEditorComponent,
          ArticleTitleComponent,
          ArticlesSupport,
          ConduitInputSupport,
          FeedSupport,
        ],
      },
    },
    FillConduitForm<CreateArticleRequest>({
      emptyModel: emptyArticleRequest(),
    }),
)
export class ArticleEditorComponent {

  private readonly _articleService: ArticleService;
  private readonly _navigation: Navigation;

  @RenderLoader()
  loadStatus?: LoadStatus;

  @StateProperty()
  article: Article | NoArticle = noArticle;

  constructor(private readonly _context: ComponentContext) {
    this._navigation = _context.get(Navigation);
    this._articleService = _context.get(ArticleService);

    const authService = _context.get(AuthService);
    const hierarchy = _context.get(HierarchyContext);

    _context.supply.whenOff(() => {
      this.loadStatus = undefined;
      this.article = noArticle;
    });
    _context.whenConnected(() => {
      this._navigation.read.do(
          supplyAfter(_context),
          mapAfter_(page => decodeURIComponent(
              page.get(PageHashURLParam).pathname.substring(1),
          )),
          digAfter_(slug => afterAll({
            user: authService.requireUser,
            loaded: slug
                ? afterSent<[ApiResponse.Any<Article>?]>(
                    this._articleService.article(slug),
                    () => [],
                )
                : afterThe<[ApiResponse.Any<Article>]>({ ok: true }),
            form: hierarchy.get(InputToForm),
          })),
      )(({
        user: [user],
        loaded: [loaded],
        form: [{ control: form }],
      }) => {
        if (!user.username) {
          this.loadStatus = user.failure ? { ok: false, errors: user.failure.errors } : undefined;
          return;
        }
        if (!loaded) {
          this.loadStatus = undefined;
          return;
        }
        if (!loaded.ok) {
          this.loadStatus = { ok: false, errors: loaded.errors };
          return;
        }
        this.loadStatus = loaded;
        this.article = loaded.body ?? noArticle;
        if (form) {
          form.it = loaded.body ?? emptyArticleRequest();
        }
      });
    });
  }

  @Render()
  render(): ElementRenderer {

    const { element }: { element: Element } = this._context;
    const button = element.querySelector('button')!;

    return () => {
      button.innerText = this.article.slug ? 'Update Post' : 'Create Post';
    };
  }

  @OnSubmit()
  submit({ control }: InputToForm<CreateArticleRequest>): void {
    control.aspect(InStatus).markEdited();
    control.aspect(InSubmit)
        .submit(
            request => apiSubmit<Article>(
                this.article.slug
                    ? this._articleService.updateArticle(this.article.slug, request)
                    : this._articleService.createArticle(request),
            ),
        )
        .then(article => this._navigation
            .with(PageHashURLParam, encodeURIComponent(article.slug))
            .open('article/'))
        .catch(error => {
          if (error instanceof InSubmitError) {
            console.error('Failed to save article', ...error.errors);
          } else {
            console.error('Failed to save article', error);
          }
        });
  }

}

function emptyArticleRequest(): CreateArticleRequest {
  return {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
}
