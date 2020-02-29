import { HandleNavLinks, Navigation } from '@wesib/generic';
import { InputToForm, OnSubmit } from '@wesib/generic/input';
import { Component, ComponentContext } from '@wesib/wesib';
import { InStatus, InSubmit, InSubmitError } from 'input-aspects';
import { Conduit__NS } from '../../core';
import { apiSubmit } from '../../core/api';
import { AuthService, RegisterRequest } from '../../core/auth';
import { ConduitInputSupport, FillConduitForm } from '../../core/input';
import { LoginEmailComponent } from '../login/login-email.component';
import { LoginPasswordComponent } from '../login/login-password.component';
import { RegisterUsernameComponent } from './register-username.component';

@Component(
    ['register', Conduit__NS],
    {
      feature: {
        needs: [
          ConduitInputSupport,
          LoginEmailComponent,
          LoginPasswordComponent,
          RegisterUsernameComponent,
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
            console.log('Failed to register', ...e.errors);
          } else {
            console.log('Failed to register', e);
          }
        });
  }

}
