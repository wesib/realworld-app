import { Feature } from '@wesib/wesib';
import { AuthService } from './auth-service';
import { AuthService as AuthService_ } from './auth-service.impl';

@Feature({
  setup(setup) {
    setup.provide({ a: AuthService, as: AuthService_ });
  },
})
export class AuthSupport {
}
