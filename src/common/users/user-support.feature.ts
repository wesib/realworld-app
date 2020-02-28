import { Feature } from '@wesib/wesib';
import { UserService } from './user-service';
import { UserService$ } from './user-service.impl';

@Feature({
  setup(setup) {
    setup.provide({ a: UserService, as: UserService$ });
  },
})
export class UserSupportFeature {
}
