import { inFormElement, inGroup, InStatus, InSubmit, InSubmitError } from '@frontmeans/input-aspects';
import { HandleNavLinks, Navigation } from '@wesib/generic';
import { Field, Form, FormShare, OnSubmit, SharedField, SharedForm } from '@wesib/generic/forms';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { apiSubmit } from '../../core/api';
import { AuthService, RegisterRequest } from '../../core/auth';
import { ConduitFormsSupport, submitButton } from '../../core/forms';
import { UserEmailComponent } from '../settings/user-email.component';
import { UserNameComponent } from '../settings/user-name.component';
import { UserPasswordComponent } from '../settings/user-password.component';

@Component(
    ['register', Conduit__NS],
    {
      feature: {
        needs: [
          ConduitFormsSupport,
          UserEmailComponent,
          UserNameComponent,
          UserPasswordComponent,
        ],
      },
    },
    HandleNavLinks(),
)
export class RegisterComponent {

  private readonly _authService: AuthService;
  private readonly _navigation: Navigation;

  @SharedForm()
  readonly form: Form<RegisterRequest>;

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
              username: '',
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
  submit({ control }: Form.Controls<RegisterRequest>): void {
    control.aspect(InStatus).markEdited();
    control.aspect(InSubmit)
        .submit(request => apiSubmit(this._authService.register(request)))
        .then(() => this._navigation.open('.'))
        .catch(e => {
          if (e instanceof InSubmitError) {
            console.error('Failed to register', ...e.errors);
          } else {
            console.error('Failed to register', e);
          }
        });
  }

}
