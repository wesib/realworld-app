import { Feature } from '@wesib/wesib';
import { AuthService } from './auth-service';
import { AuthService$ } from './auth-service.impl';

@Feature({
  setup(setup) {
    setup.provide({ a: AuthService, as: AuthService$ });
  },
})
export class AuthSupport {
}
