import { InControl, InCssClasses, inCssInfo, InMode } from '@frontmeans/input-aspects';
import { nextArgs, NextCall } from '@proc7ts/call-thru';
import { afterSupplied, EventSupply, nextAfterEvent, OnEventCallChain } from '@proc7ts/fun-events';
import { Class } from '@proc7ts/primitives';
import { HierarchyContext } from '@wesib/generic';
import { InputToForm, UseInputElement, UseInputElementDef } from '@wesib/generic/input';
import { ComponentClass, ComponentDecorator } from '@wesib/wesib';
import { bootstrapCssError } from './bootstrap-css-error';

export function UseConduitInput<T extends ComponentClass = Class>(
    def: UseInputElementDef<InstanceType<T>>,
): ComponentDecorator<T> {
  return UseInputElement({
    ...def,
    makeControl(opts) {
      return opts.context.get(HierarchyContext).get(InputToForm).keepThru_(
          ({ form }) => {

            const ctrl = def.makeControl(opts);

            if (!ctrl) {
              return nextArgs();
            }
            if (ctrl instanceof InControl) {
              return augmentControl(ctrl);
            }

            return nextAfterEvent(afterSupplied(ctrl).keepThru_(
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
