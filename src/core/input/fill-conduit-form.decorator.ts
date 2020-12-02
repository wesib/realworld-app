import {
  InCssClasses,
  inCssInfo,
  inFormElement,
  inGroup,
  InGroup,
  InMode,
  inModeByValidity,
} from '@frontmeans/input-aspects';
import { Class } from '@proc7ts/primitives';
import { FillInputForm, FillInputFormDef } from '@wesib/generic/input';
import { Component, ComponentClass, ComponentDecorator } from '@wesib/wesib';
import { HandleConduitSubmitButton, HandleConduitSubmitButtonDef } from './handle-conduit-submit-button.decorator';

export function FillConduitForm<Model extends object = any, T extends ComponentClass = Class>(
    {
        emptyModel = {} as Model,
        form = {
          makeForm({ node, aspects }) {

            const group: InGroup<Model> = inGroup<Model>(emptyModel)
                .setup(InCssClasses, classes => classes.add(inCssInfo()))
                .setup(InMode, mode => mode.derive(inModeByValidity()));
            const form = inFormElement(node.element, { form: group, aspects })
                .setup(InCssClasses, classes => classes.add(group.aspect(InCssClasses)));

            return [group, form];
          },
        },
        button,
    }: FillConduitFormDef<Model> = {},
): ComponentDecorator<T> {
  return Component(
      FillInputForm(form),
      HandleConduitSubmitButton(button),
  );
}

export interface FillConduitFormDef<Model extends object> {
  readonly emptyModel?: Model;
  readonly form?: FillInputFormDef;
  readonly button?: HandleConduitSubmitButtonDef;
}
