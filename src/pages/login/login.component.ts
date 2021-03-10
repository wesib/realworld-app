import { inFormElement, inGroup, InStatus, InSubmit, InSubmitError } from '@frontmeans/input-aspects';
import { HandleNavLinks, Navigation } from '@wesib/generic';
import { Field, Form, FormShare, OnSubmit, SharedField, SharedForm } from '@wesib/generic/forms';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { apiSubmit } from '../../core/api';
import { AuthService, LoginRequest } from '../../core/auth';
import { ConduitFormsSupport, submitButton } from '../../core/forms';
import { UserEmailComponent } from '../settings/user-email.component';
import { UserPasswordComponent } from '../settings/user-password.component';

@Component(
    ['login', Conduit__NS],
    {
      feature: {
        needs: [
          ConduitFormsSupport,
          UserEmailComponent,
          UserPasswordComponent,
        ],
      },
    },
    HandleNavLinks(),
)
export class LoginComponent {

  private readonly _authService: AuthService;
  private readonly _navigation: Navigation;

  @SharedForm()
  readonly form: Form<LoginRequest>;

  @SharedField({
    form: {
      share: FormShare,
      local: true,
    },
    name: '',
  })
  readonly submitButton: Field<void>;

  constructor(context: ComponentContext) {
    this._authService = context.get(AuthService);
    this._navigation = context.get(Navigation);

    const element: Element = context.element;

    this.form = Form.by(
        opts => inGroup(
            {
              email: '',
              password: '',
            },
            opts,
        ),
        opts => inFormElement(element.querySelector('form')!, opts),
    );
    this.submitButton = submitButton(element.querySelector('button')!);
  }

  @OnSubmit()
  submit({ control }: Form.Whole<LoginRequest>): void {
    control.aspect(InStatus).markEdited();
    control.aspect(InSubmit)
        .submit(request => apiSubmit(this._authService.login(request)))
        .then(() => this._navigation.open('.'))
        .catch(e => {
          if (e instanceof InSubmitError) {
            console.error('Failed to login', ...e.errors);
          } else {
            console.error('Failed to login', e);
          }
        });
  }

}
