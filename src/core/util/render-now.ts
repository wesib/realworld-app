import { HierarchyContext } from '@wesib/generic';
import { ComponentContext, ElementRenderCtl } from '@wesib/wesib';

export function renderNow(element: Element, enclosing: ComponentContext): void {

  const context = ComponentContext.of(element);

  context.get(HierarchyContext).inside(enclosing);
  context.get(ElementRenderCtl).renderNow();
}
