import { HandleNavLinks } from '@wesib/generic';
import { InputToForm, OnSubmit } from '@wesib/generic/input';
import { Component, ComponentContext } from '@wesib/wesib';
import { InStatus, InSubmit, InSubmitError } from 'input-aspects';
import { apiSubmit, AuthService, Conduit__NS, FillConduitForm, RegisterRequest } from '../../common';
import { LoginEmailComponent, LoginPasswordComponent } from '../login';
import { RegisterUsernameComponent } from './register-username.component';

@Component(
    ['register', Conduit__NS],
    {
      feature: {
        needs: [
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

  constructor(context: ComponentContext) {
    this._authService = context.get(AuthService);
  }

  @OnSubmit()
  submit({ control }: InputToForm<RegisterRequest>): void {
    control.aspect(InStatus).markEdited();
    control.aspect(InSubmit)
        .submit(request => apiSubmit(this._authService.register(request)))
        .catch(e => {
          if (e instanceof InSubmitError) {
            console.log('Failed to register', ...e.errors);
          } else {
            console.log('Failed to register', e);
          }
        });
  }

}
