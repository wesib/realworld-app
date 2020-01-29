import { afterAll, afterThe } from 'fun-events';
import { InCssClasses, inCssError, InStatus, InValidation } from 'input-aspects';

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
    }).keep.dig(
        ({
          status: [{ touched, hasFocus }],
          validity: [validity],
        }) => {

          const incomplete = validity.has('incomplete') || validity.has('missing');

          return touched && !(hasFocus && incomplete)
              ? cssClasses.specs(inCssError({ mark, when }))
              : afterThe<InCssClasses.Spec[]>();
        },
    );
  };
}
