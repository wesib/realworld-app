import { conduitContext } from '../../common';
import { LoginComponent } from './login.component';

export * from './login-email.component';
export * from './login-password.component';

conduitContext.load(LoginComponent);
