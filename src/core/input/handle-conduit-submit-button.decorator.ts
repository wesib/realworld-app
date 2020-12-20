import { inSubmitButton } from '@frontmeans/input-aspects';
import { afterAll, consumeEvents, supplyAfter } from '@proc7ts/fun-events';
import { Class } from '@proc7ts/primitives';
import { ComponentNode, ElementPickMode, HierarchyContext } from '@wesib/generic';
import { DefaultInAspects, InputToForm } from '@wesib/generic/input';
import { Component, ComponentClass, ComponentDecorator } from '@wesib/wesib';

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
            button: componentNode.select(select, pick).first,
            aspects: context.get(DefaultInAspects),
          }).do(
              supplyAfter(context),
              consumeEvents(({
                form: [{ control: form }],
                button: [button],
                aspects: [aspects],
              }) => form && button && inSubmitButton(button.element, { form, aspects })),
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
