import { InControl, InCssClasses, inCssInfo, InMode } from '@frontmeans/input-aspects';
import { afterSupplied, afterThe, digAfter_, translateAfter_ } from '@proc7ts/fun-events';
import { Class } from '@proc7ts/primitives';
import { HierarchyContext } from '@wesib/generic';
import { InputToForm, UseInputElement, UseInputElementDef } from '@wesib/generic/input';
import { ComponentClass, ComponentDecorator } from '@wesib/wesib';
import { bootstrapCssError } from '../forms';

export function UseConduitInput<T extends ComponentClass = Class>(
    def: UseInputElementDef<InstanceType<T>>,
): ComponentDecorator<T> {
  return UseInputElement({
    ...def,
    makeControl(opts) {
      return opts.context.get(HierarchyContext).get(InputToForm).do(
          digAfter_(({ form }) => {

            const ctrl = def.makeControl(opts);

            if (!ctrl) {
              return afterThe();
            }
            if (ctrl instanceof InControl) {
              return afterThe(augmentControl(ctrl));
            }

            return afterSupplied(ctrl).do(
                translateAfter_((send, control, supply): void => {
                  if (!control) {
                    return send();
                  }

                  augmentControl(control);

                  return supply ? send(control, supply) : send(control);
                }),
            );

            function augmentControl(control: InControl<any>): InControl<any> {
              if (form) {
                control.aspect(InMode).derive(form.aspect(InMode));
              }

              const classes = control.aspect(InCssClasses);

              classes.add(inCssInfo());
              classes.add(bootstrapCssError());

              return control;
            }
          }),
      );
    },
  });
}
