import { HandleNavLinks, Navigation } from '@wesib/generic';
import { InputToForm, OnSubmit } from '@wesib/generic/input';
import { Component, ComponentContext } from '@wesib/wesib';
import { InStatus, InSubmit, InSubmitError } from 'input-aspects';
import { apiSubmit, AuthService, Conduit__NS, FillConduitForm, LoginRequest } from '../../common';
import { LoginEmailComponent } from './login-email.component';
import { LoginPasswordComponent } from './login-password.component';

@Component(
    ['login', Conduit__NS],
    {
      feature: {
        needs: [
          LoginEmailComponent,
          LoginPasswordComponent,
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
            console.log('Failed to login', ...e.errors);
          } else {
            console.log('Failed to login', e);
          }
        });
  }

}
