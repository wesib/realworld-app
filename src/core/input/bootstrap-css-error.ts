import { nextArgs } from '@proc7ts/call-thru';
import { afterAll, nextAfterEvent } from '@proc7ts/fun-events';
import { InCssClasses, inCssError, InStatus, InValidation } from '@proc7ts/input-aspects';

export function bootstrapCssError(
    {
      mark = 'is-invalid',
      when,
    }: {
      mark?: InCssClasses.Spec | InCssClasses.Spec[];
      when?: string | string[];
    } = {},
): InCssClasses.Source {
  return control => {

    const cssClasses = control.aspect(InCssClasses);

    return afterAll({
      status: control.aspect(InStatus),
      validity: control.aspect(InValidation),
    }).keepThru(
        ({
          status: [{ touched, hasFocus }],
          validity: [validity],
        }) => {

          const incomplete = validity.has('incomplete') || validity.has('missing');

          return touched && !(hasFocus && incomplete)
              ? nextAfterEvent(cssClasses.specs(inCssError({ mark, when })))
              : nextArgs();
        },
    );
  };
}
