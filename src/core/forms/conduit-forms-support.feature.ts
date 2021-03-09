import { FormModePreset } from '@wesib/generic/forms';
import { Feature } from '@wesib/wesib';
import { FieldErrorComponent } from './field-error.component';
import { FormBootstrapCssPreset } from './form-bootstrap-css.preset';
import { SubmitErrorsComponent } from './submit-errors.component';

@Feature({
  needs: [
    FieldErrorComponent,
    FormBootstrapCssPreset,
    FormModePreset,
    SubmitErrorsComponent,
  ],
})
export class ConduitFormsSupport {
}
