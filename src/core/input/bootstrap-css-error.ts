import { InCssClasses, inCssError, InStatus, InValidation } from '@frontmeans/input-aspects';
import { afterAll, afterThe, digAfter } from '@proc7ts/fun-events';

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
    }).do(
        digAfter(({
          status: [{ touched, hasFocus }],
          validity: [validity],
        }) => {

          const incomplete = validity.has('incomplete') || validity.has('missing');

          return touched && !(hasFocus && incomplete)
              ? cssClasses.specs(inCssError({ mark, when }))
              : afterThe();
        }),
    );
  };
}
