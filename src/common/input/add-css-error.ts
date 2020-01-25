import { EventSupply } from 'fun-events';
import { InControl, InCssClasses, inCssError, InStatus } from 'input-aspects';

export function addCssError(
    control: InControl<any>,
    opts: Parameters<typeof inCssError>[0],
): EventSupply {
  return control.aspect(InStatus).read.consume(
      ({ touched }) => touched ? control.aspect(InCssClasses).add(inCssError(opts)) : undefined,
  );
}
