import { InCssClasses, InRole } from '@frontmeans/input-aspects';
import { Field, FormCssPreset } from '@wesib/generic/forms';
import { bs4CssError } from './bs4-css-error';

export class FormBs4CssPreset extends FormCssPreset {

  constructor() {
    super({ error: false });
  }

  setupField<TValue, TSharer extends object>(builder: Field.Builder<TValue, TSharer>): void {
    super.setupField(builder);
    builder.control.setup(
        InRole,
        role => role.when('default', control => control.aspect(InCssClasses).add(bs4CssError())),
    );
  }

}
