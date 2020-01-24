import { ComponentNode, ComponentTreeSupport, ElementNode, ElementPickMode, HierarchyContext } from '@wesib/generic';
import { DefaultInAspects, inputFromControl, InputFromControl, InputFromNowhere } from '@wesib/generic/input';
import { Component, ComponentClass, ComponentContext, ComponentDecorator } from '@wesib/wesib';
import { afterAll, afterThe, eventSupply, EventSupply } from 'fun-events';
import { InControl, InConverter, InGroup } from 'input-aspects';

export function EnableInGroupControl<T extends ComponentClass = any>(
    {
      select = 'input',
      pick = { deep: true, all: true },
      name,
      controlOf,
    }: {
      readonly select?: string;
      readonly pick?: ElementPickMode;
      readonly name: string | ((this: void, node: ElementNode) => string);
      readonly controlOf: (
          this: void,
          opts: {
            node: ElementNode;
            context: ComponentContext;
            aspects: InConverter.Aspect<any, any>;
            supply: EventSupply;
          },
      ) => InControl<any>;
    },
): ComponentDecorator<T> {
  return Component({
    feature: {
      needs: ComponentTreeSupport,
    },
    define(defContext) {
      defContext.whenComponent(context => {

        const hierarchy = context.get(HierarchyContext);
        const componentNode = context.get(ComponentNode);

        context.whenOn(connectSupply => {
          afterAll({
            group: hierarchy.up.keep.dig_(
                up => up ? up.get(InputFromControl) : afterThe<[InputFromNowhere]>({}),
            ).keep.thru_(
                ({ control }) => control && control.aspect(InGroup) as InGroup<any> | undefined,
            ),
            node: componentNode.select(select, pick).first,
            aspects: context.get(DefaultInAspects),
          }).consume(
              ({
                group: [group],
                node: [node],
                aspects: [aspects],
              }) => {
                if (!group || !node) {
                  return;
                }

                const controlName = typeof name === 'function' ? name(node) : name;
                const supply = eventSupply(() => group.controls.remove(controlName));
                const control = controlOf({ node, context, supply, aspects });

                inputFromControl(context, control).needs(supply);
                group.controls.set(controlName, control);

                return supply;
              },
          ).needs(connectSupply);
        });
      });
    },
  });
}
