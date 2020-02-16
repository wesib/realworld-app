import { ComponentNode, ComponentTreeSupport, ElementPickMode, HierarchyContext } from '@wesib/generic';
import { DefaultInAspects, InputToForm } from '@wesib/generic/input';
import { Component, ComponentClass, ComponentDecorator } from '@wesib/wesib';
import { afterAll } from 'fun-events';
import { inSubmitButton } from 'input-aspects';

export function HandleSubmitButton<T extends ComponentClass>(
    {
      select = 'button',
      pick = { deep: true, all: true },
    }: {
      select?: string;
      pick?: ElementPickMode;
    } = {},
): ComponentDecorator<T> {
  return Component({
    feature: {
      needs: ComponentTreeSupport,
    },
    define(defContext) {
      defContext.whenComponent(context => {

        const componentNode = context.get(ComponentNode);
        const hierarchy = context.get(HierarchyContext);

        context.whenOn(supply => {
          afterAll({
            form: hierarchy.get(InputToForm),
            button: componentNode.select(select, pick).first,
            aspects: context.get(DefaultInAspects),
          }).tillOff(supply).consume(({ form: [{ control: form }], button: [button], aspects: [aspects] }) => form
              && button
              && inSubmitButton(button.element, { form, aspects }));
        });
      });
    },
  });
}
