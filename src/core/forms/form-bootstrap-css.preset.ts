import { InCssClasses, InRole } from '@frontmeans/input-aspects';
import { Field, FormCssPreset } from '@wesib/generic/forms';
import { bootstrapCssError } from './bootstrap-css-error';

export class FormBootstrapCssPreset extends FormCssPreset {

  constructor() {
    super({ error: false });
  }

  setupField<TValue, TSharer extends object>(builder: Field.Builder<TValue, TSharer>): void {
    super.setupField(builder);
    builder.control.setup(
        InRole,
        role => role.when('default', control => control.aspect(InCssClasses).add(bootstrapCssError())),
    );
  }

}
