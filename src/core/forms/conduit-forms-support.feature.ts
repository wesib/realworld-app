import { FormModePreset } from '@wesib/generic/forms';
import { Feature } from '@wesib/wesib';
import { FieldErrorComponent } from './field-error.component';
import { FormBs4CssPreset } from './form-bs4-css.preset';
import { SubmitErrorsComponent } from './submit-errors.component';

@Feature({
  needs: [
    FieldErrorComponent,
    FormBs4CssPreset,
    FormModePreset,
    SubmitErrorsComponent,
  ],
})
export class ConduitFormsSupport {
}
