import { Feature } from '@wesib/wesib';
import { ApiErrorsComponent } from './api-errors.component';
import { InErrorComponent } from './in-error.component';

@Feature({
  needs: [
    ApiErrorsComponent,
    InErrorComponent,
  ],
})
export class ConduitInputSupport {
}
