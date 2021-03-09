import { InCssClasses, inCssInfo, InStyledElement } from '@frontmeans/input-aspects';
import { AfterEvent, mapAfter_, trackValue, translateAfter_ } from '@proc7ts/fun-events';
import { AdjacentField, Field, FieldShare, SharedField } from '@wesib/generic/forms';
import { Attribute, Component, ComponentContext } from '@wesib/wesib';
import { Conduit__NS } from '../conduit.ns';
import { bootstrapCssError } from './bootstrap-css-error';

class FieldErrorShare extends FieldShare {

  constructor() {
    super('field-error');
  }

}

@Component(
    ['field-error', Conduit__NS],
)
export class FieldErrorComponent {

  private readonly _code = trackValue<string | null>();

  @SharedField({
    share: {
      share: FieldErrorShare,
      local: true,
    },
    name: '',
  })
  readonly indicator: Field<void>;

  constructor(context: ComponentContext) {

    const when: AfterEvent<string[]> = this._code.read
        .do(
            translateAfter_((send, code) => code ? send(...code.trim().split(/\s+/)) : send()),
        );

    this.indicator = AdjacentField.toField<void>(builder => when.do(
        mapAfter_((...when) => ({
          control: builder.adjusted.control
              .convert<void>(InStyledElement.to(context.element))
              .setup(InCssClasses, css => css.add(inCssInfo()))
              .setup(InCssClasses, css => css.add(bootstrapCssError({ when }))),
        })),
    ));
  }

  @Attribute({ updateState: false })
  get code(): string | null | undefined {
    return this._code.it;
  }

  set code(code: string | null | undefined) {
    this._code.it = code;
  }

}
