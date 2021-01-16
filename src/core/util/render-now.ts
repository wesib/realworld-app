import { HierarchyContext } from '@wesib/generic';
import { ComponentContext, ComponentElement, ComponentSlot, ElementRenderCtl } from '@wesib/wesib';

export function renderNow(element: ComponentElement, enclosing: ComponentContext): void {
  ComponentSlot.of(element).whenReady(context => {
    context.get(HierarchyContext).inside(enclosing);
    context.get(ElementRenderCtl).renderNow();
  });
}
