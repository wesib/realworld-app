import { FillInputForm, FillInputFormDef } from '@wesib/generic/input';
import { Class, Component, ComponentClass, ComponentDecorator } from '@wesib/wesib';
import { InCssClasses, inCssInfo, inFormElement, inGroup, InGroup, InMode, inModeByValidity } from 'input-aspects';
import { HandleSubmitButton, HandleSubmitButtonDef } from './handle-submit-button.decorator';

export function HandleForm<Model extends object = any, T extends ComponentClass = Class>(
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
    }: HandleFormDef<Model> = {},
): ComponentDecorator<T> {
  return Component(
      FillInputForm(form),
      HandleSubmitButton(button),
  );
}

export interface HandleFormDef<Model extends object> {
  readonly emptyModel?: Model;
  readonly form?: FillInputFormDef;
  readonly button?: HandleSubmitButtonDef;
}
