import { afterAll } from '@proc7ts/fun-events';
import { inSubmitButton } from '@proc7ts/input-aspects';
import { ComponentNode, ElementPickMode, HierarchyContext } from '@wesib/generic';
import { DefaultInAspects, InputToForm } from '@wesib/generic/input';
import { Class, Component, ComponentClass, ComponentDecorator } from '@wesib/wesib';

export function HandleConduitSubmitButton<T extends ComponentClass = Class>(
    {
      select = 'button',
      pick = { deep: true, all: true },
    }: HandleConduitSubmitButtonDef = {},
): ComponentDecorator<T> {
  return Component({
    define(defContext) {
      defContext.whenComponent(context => {

        const componentNode = context.get(ComponentNode);
        const hierarchy = context.get(HierarchyContext);

        context.whenConnected(() => {
          afterAll({
            form: hierarchy.get(InputToForm),
            button: componentNode.select(select, pick).first(),
            aspects: context.get(DefaultInAspects),
          }).tillOff(context).consume(
              ({
                form: [{ control: form }],
                button: [button],
                aspects: [aspects],
              }) => form && button && inSubmitButton(button.element, { form, aspects }),
          );
        });
      });
    },
  });
}

export interface HandleConduitSubmitButtonDef {
  readonly select?: string;
  readonly pick?: ElementPickMode;
}
