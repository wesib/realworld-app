import { ComponentNode, ComponentTreeSupport, ElementNode, ElementPickMode } from '@wesib/generic';
import { DefaultInAspects, inputFromControl } from '@wesib/generic/input';
import { Component, ComponentClass, ComponentContext, ComponentDecorator } from '@wesib/wesib';
import { afterAll, eventSupply, EventSupply } from 'fun-events';
import { InControl, InConverter } from 'input-aspects';

export function InputControl<T extends ComponentClass = any>(
    {
      select = 'input',
      pick = { deep: true, all: true },
      controlOf,
    }: {
      readonly select?: string;
      readonly pick?: ElementPickMode;
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

        const componentNode = context.get(ComponentNode);

        context.whenOn(connectSupply => {
          afterAll({
            node: componentNode.select(select, pick).first,
            aspects: context.get(DefaultInAspects),
          }).consume(
              ({
                node: [node],
                aspects: [aspects],
              }) => {
                if (!node) {
                  return;
                }

                const supply = eventSupply();
                const control = controlOf({ node, context, supply, aspects });

                inputFromControl(context, control).needs(supply);

                return supply;
              },
          ).needs(connectSupply);
        });
      });
    },
  });
}
