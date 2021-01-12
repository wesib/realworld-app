import { HierarchyContext } from '@wesib/generic';
import { ComponentContext, ComponentContextHolder, ElementRenderCtl } from '@wesib/wesib';

export function renderNow(element: Element & ComponentContextHolder, enclosing: ComponentContext): void {

  const context = ComponentContext.of(element);

  context.get(HierarchyContext).inside(enclosing);
  context.get(ElementRenderCtl).renderNow();
}
