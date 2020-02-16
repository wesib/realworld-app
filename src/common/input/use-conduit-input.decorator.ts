import { HierarchyContext } from '@wesib/generic';
import { InputToForm, UseInputElement, UseInputElementDef } from '@wesib/generic/input';
import { Class, ComponentClass, ComponentDecorator } from '@wesib/wesib';
import { nextArgs, NextCall } from 'call-thru';
import { afterSupplied, EventSupply, nextAfterEvent, OnEventCallChain } from 'fun-events';
import { InControl, InCssClasses, inCssInfo, InMode } from 'input-aspects';
import { bootstrapCssError } from './bootstrap-css-error';

export function UseConduitInput<T extends ComponentClass = Class>(
    def: UseInputElementDef<InstanceType<T>>,
): ComponentDecorator<T> {
  return UseInputElement({
    ...def,
    makeControl(opts) {
      return opts.context.get(HierarchyContext).get(InputToForm).keep.thru_(
          ({ form }) => {

            const ctrl = def.makeControl(opts);

            if (!ctrl) {
              return nextArgs();
            }
            if (ctrl instanceof InControl) {
              return augmentControl(ctrl);
            }

            return nextAfterEvent(afterSupplied(ctrl).keep.thru_(
                (control, supply): NextCall<OnEventCallChain, [InControl<any>?, EventSupply?]> => {
                  if (!control) {
                    return nextArgs();
                  }

                  augmentControl(control);

                  return supply ? nextArgs(control, supply) : nextArgs(control);
                },
            ));

            function augmentControl(control: InControl<any>): InControl<any> {
              if (form) {
                control.aspect(InMode).derive(form.aspect(InMode));
              }

              const classes = control.aspect(InCssClasses);

              classes.add(inCssInfo());
              classes.add(bootstrapCssError());

              return control;
            }
          },
      );
    },
  });
}
