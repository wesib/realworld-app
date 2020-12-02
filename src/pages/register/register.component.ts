import { InStatus, InSubmit, InSubmitError } from '@frontmeans/input-aspects';
import { HandleNavLinks, Navigation } from '@wesib/generic';
import { InputToForm, OnSubmit } from '@wesib/generic/input';
import { Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { apiSubmit } from '../../core/api';
import { AuthService, RegisterRequest } from '../../core/auth';
import { ConduitInputSupport, FillConduitForm } from '../../core/input';
import { UserEmailComponent } from '../settings/user-email.component';
import { UserNameComponent } from '../settings/user-name.component';
import { UserPasswordComponent } from '../settings/user-password.component';

@Component(
    ['register', Conduit__NS],
    {
      feature: {
        needs: [
          ConduitInputSupport,
          UserEmailComponent,
          UserNameComponent,
          UserPasswordComponent,
        ],
      },
    },
    FillConduitForm<RegisterRequest>({
      emptyModel: {
        username: '',
        email: '',
        password: '',
      },
    }),
    HandleNavLinks(),
)
export class RegisterComponent {

  private readonly _authService: AuthService;
  private readonly _navigation: Navigation;

  constructor(context: ComponentContext) {
    this._authService = context.get(AuthService);
    this._navigation = context.get(Navigation);
  }

  @OnSubmit()
  submit({ control }: InputToForm<RegisterRequest>): void {
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
