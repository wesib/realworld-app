import { afterThe } from 'fun-events';
import { InCssClasses, inCssError, InStatus } from 'input-aspects';

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
    const status = control.aspect(InStatus);

    return status.read.keep.dig(
        ({ touched }) => touched
            ? cssClasses.specs(inCssError({ mark, when }))
            : afterThe<InCssClasses.Spec[]>(),
    );
  };
}
