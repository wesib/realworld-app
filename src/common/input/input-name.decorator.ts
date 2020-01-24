import { HierarchyContext } from '@wesib/generic';
import { InputFromControl, InputFromNowhere } from '@wesib/generic/input';
import { Component, ComponentClass, ComponentDecorator } from '@wesib/wesib';
import { afterAll, afterThe, eventSupply } from 'fun-events';
import { InControl, InGroup } from 'input-aspects';

export function InputName<T extends ComponentClass = any>(
    name: string | ((this: void, control: InControl<any>) => string),
): ComponentDecorator<T> {
  return Component({
    define(defContext) {
      defContext.whenComponent(context => {

        const hierarchy = context.get(HierarchyContext);

        context.whenOn(connectSupply => {
          afterAll({
            group: hierarchy.up.keep.dig_(
                up => up ? up.get(InputFromControl) : afterThe<[InputFromNowhere]>({}),
            ).keep.thru_(
                ({ control }) => control && control.aspect(InGroup) as InGroup<any> | undefined,
            ),
            control: hierarchy.get(InputFromControl).keep.thru_(
                ({ control }) => control,
            ),
          }).consume(
              ({
                group: [group],
                control: [control],
              }) => {
                if (!group || !control || group === control) {
                  return;
                }

                const controlName = typeof name === 'function' ? name(control) : name;

                console.log(controlName);
                group.controls.set(controlName, control);

                return eventSupply(() => group.controls.remove(controlName));
              },
          ).needs(connectSupply);
        });
      });
    },
  });
}
