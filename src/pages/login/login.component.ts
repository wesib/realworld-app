import { HandleNavLinks } from '@wesib/generic';
import { FillInputForm, InputToForm, OnSubmit } from '@wesib/generic/input';
import { Component, ComponentContext } from '@wesib/wesib';
import {
  InCssClasses,
  inCssInfo,
  inFormElement,
  InGroup,
  inGroup,
  InMode,
  inModeByValidity,
  InStatus,
  InSubmit,
  InSubmitError,
} from 'input-aspects';
import { apiSubmit, AuthService, Conduit__NS, HandleSubmitButton, LoginRequest } from '../../common';
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
    FillInputForm({
      makeForm({ node, aspects }) {

        const group: InGroup<LoginRequest> = inGroup<LoginRequest>({
          email: '',
          password: '',
        })
            .setup(InCssClasses, classes => classes.add(inCssInfo()))
            .setup(InMode, mode => mode.derive(inModeByValidity()));
        const form = inFormElement(node.element, { form: group, aspects })
            .setup(InCssClasses, classes => classes.add(group.aspect(InCssClasses)));

        return [group, form];
      },
    }),
    HandleNavLinks(),
    HandleSubmitButton(),
)
export class LoginComponent {

  private readonly _authService: AuthService;

  constructor(context: ComponentContext) {
    this._authService = context.get(AuthService);
  }

  @OnSubmit()
  submit({ control }: InputToForm<LoginRequest>): void {
    control.aspect(InStatus).markEdited();
    control.aspect(InSubmit)
        .submit(request => apiSubmit(this._authService.login(request)))
        .catch(e => {
          if (e instanceof InSubmitError) {
            console.log('Failed to login', ...e.errors);
          } else {
            console.log('Failed to login', e);
          }
        });
  }

}
