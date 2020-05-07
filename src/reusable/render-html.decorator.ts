import {
  BootstrapWindow,
  ComponentClass,
  ComponentContext,
  ComponentProperty,
  ComponentPropertyDecorator,
  ElementRenderer,
  Render,
  RenderDef,
} from '@wesib/wesib';

export function RenderHTML<T extends ComponentClass>(
    def: {
      render?: RenderDef;
      comment?: string;
    } = {},
): ComponentPropertyDecorator<() => string | Node | null | undefined, T> {
  return ComponentProperty(({ get, key }) => {

    const {
      comment = String(key),
      render,
    } = def;

    return {
      componentDef: Render(render).As(renderHTML, key),
    };

    function renderHTML(this: InstanceType<T>): ElementRenderer {

      const context = ComponentContext.of(this);
      const { document } = context.get(BootstrapWindow);
      const { contentRoot }: { contentRoot: Node } = context;
      const start = contentRoot.appendChild(document.createComment(`[${comment}[`));
      const end = contentRoot.appendChild(document.createComment(`]${comment}]`));
      const range = document.createRange();

      range.setStartAfter(start);
      range.setEndBefore(end);

      return () => {
        range.deleteContents();

        const html = get(this).call(this);

        if (!html) {
          return;
        }
        if (typeof html === 'string') {

          const node = document.createElement('template');

          node.innerHTML = html;
          range.insertNode(node.content);
        } else {
          range.insertNode(html);
        }
      };
    }
  });
}
