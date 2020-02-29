import { HandleNavLinks, Navigation } from '@wesib/generic';
import { InputToForm, OnSubmit } from '@wesib/generic/input';
import { Component, ComponentContext } from '@wesib/wesib';
import { InStatus, InSubmit, InSubmitError } from 'input-aspects';
import { Conduit__NS } from '../../core';
import { apiSubmit } from '../../core/api';
import { AuthService, LoginRequest } from '../../core/auth';
import { ConduitInputSupport, FillConduitForm } from '../../core/input';
import { UserEmailComponent } from '../settings/user-email.component';
import { UserPasswordComponent } from '../settings/user-password.component';

@Component(
    ['login', Conduit__NS],
    {
      feature: {
        needs: [
          ConduitInputSupport,
          UserEmailComponent,
          UserPasswordComponent,
        ],
      },
    },
    FillConduitForm<LoginRequest>({
      emptyModel: {
        email: '',
        password: '',
      },
    }),
    HandleNavLinks(),
)
export class LoginComponent {

  private readonly _authService: AuthService;
  private readonly _navigation: Navigation;

  constructor(context: ComponentContext) {
    this._authService = context.get(AuthService);
    this._navigation = context.get(Navigation);
  }

  @OnSubmit()
  submit({ control }: InputToForm<LoginRequest>): void {
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
