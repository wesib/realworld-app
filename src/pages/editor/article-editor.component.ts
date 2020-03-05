import { HierarchyContext, Navigation, PageHashURLParam } from '@wesib/generic';
import { InputToForm, OnSubmit } from '@wesib/generic/input';
import { Component, ComponentContext } from '@wesib/wesib';
import { afterAll, afterSent, afterThe, nextAfterEvent } from 'fun-events';
import { InStatus, InSubmit, InSubmitError } from 'input-aspects';
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

  private _article?: Article | NoArticle;

  constructor(context: ComponentContext) {
    this._navigation = context.get(Navigation);
    this._articleService = context.get(ArticleService);

    const authService = context.get(AuthService);
    const hierarchy = context.get(HierarchyContext);

    context.whenOn(supply => {
      supply.whenOff(() => {
        this.loadStatus = undefined;
        this._article = undefined;
      });

      this._navigation.read.tillOff(supply).keep.thru_(
          page => decodeURIComponent(
              page.get(PageHashURLParam).pathname.substring(1),
          ),
          slug => nextAfterEvent(
              afterAll({
                user: authService.user,
                loaded: slug
                    ? afterSent<[ApiResponse.Any<Article>]>(
                        this._articleService.article(slug),
                        () => [{ ok: true }],
                    )
                    : afterThe<[ApiResponse.Any<Article>]>({ ok: true }),
                form: hierarchy.get(InputToForm),
              }),
          ),
      )(
          ({
            user: [user],
            loaded: [loaded],
            form: [{ control: form }],
          }) => {
            if (!user.username && user.failure) {
              this.loadStatus = { ok: false, errors: user.failure.errors };
              return;
            }
            if (!loaded.ok) {
              this.loadStatus = { ok: false, errors: loaded.errors };
              return;
            }
            this.loadStatus = loaded;
            this._article = loaded.body ?? noArticle;
            if (form) {
              form.it = loaded.body ?? emptyArticleRequest();
            }
          },
      );
    });
  }

  @OnSubmit()
  submit({ control }: InputToForm<CreateArticleRequest>): void {
    control.aspect(InStatus).markEdited();
    control.aspect(InSubmit)
        .submit(
            request => apiSubmit<Article>(
                this._article && this._article.slug
                    ? this._articleService.updateArticle(this._article.slug, request)
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
  };
}
