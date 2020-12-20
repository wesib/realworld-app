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

export function FillConduitForm<TModel extends object = any, T extends ComponentClass = Class>(
    {
        emptyModel = {} as TModel,
        form = {
          makeForm({ node, aspects }) {

            const group: InGroup<TModel> = inGroup<TModel>(emptyModel)
                .setup(InCssClasses, classes => classes.add(inCssInfo()))
                .setup(InMode, mode => mode.derive(inModeByValidity()));
            const form = inFormElement(node.element, { form: group, aspects })
                .setup(InCssClasses, classes => classes.add(group.aspect(InCssClasses)));

            return [group, form];
          },
        },
        button,
    }: FillConduitFormDef<TModel> = {},
): ComponentDecorator<T> {
  return Component(
      FillInputForm(form),
      HandleConduitSubmitButton(button),
  );
}

export interface FillConduitFormDef<TModel extends object> {
  readonly emptyModel?: TModel;
  readonly form?: FillInputFormDef;
  readonly button?: HandleConduitSubmitButtonDef;
}
