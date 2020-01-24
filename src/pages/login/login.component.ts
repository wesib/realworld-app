import { inputFromControl } from '@wesib/generic/input';
import { Component, ComponentContext, Feature } from '@wesib/wesib';
import { inGroup } from 'input-aspects';
import { Conduit__NS, EnableNavigationLinks, SignInRequest } from '../../common';
import { LoginEmailComponent } from './login-email.component';
import { LoginPasswordComponent } from './login-password.component';

@Component(['login', Conduit__NS])
@EnableNavigationLinks()
@Feature({
  needs: [
    LoginEmailComponent,
    LoginPasswordComponent,
  ],
})
export class LoginComponent {

  constructor(context: ComponentContext) {
    context.whenOn(connectSupply => {

      const group = inGroup<SignInRequest>({
        email: '',
        password: '',
      });

      inputFromControl(context, group).needs(connectSupply);
      connectSupply.whenOff(() => group.controls.clear());
    });
  }

}
