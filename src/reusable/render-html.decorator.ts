import {
  BootstrapWindow,
  ComponentClass,
  ComponentContext,
  ComponentProperty,
  ComponentPropertyDecorator,
  ElementRenderer,
  Render,
} from '@wesib/wesib';
import { StatePath } from 'fun-events';

const HTMLContents__symbol = (/*#__PURE__*/ Symbol('HTML-contents'));

export function RenderHTML<T extends ComponentClass>(
    def: {
      path?: StatePath;
      comment?: string;
      offline?: boolean;
    } = {},
): ComponentPropertyDecorator<string | Node | null | undefined, T> {
  return ComponentProperty(({ get, set: setValue, key }) => {

    const {
      comment = String(key),
      path = [HTMLContents__symbol, key],
      offline,
    } = def;

    return {
      componentDef: Render({ path, offline }).As(renderHTML, key),
      get,
      set(component, value) {

        const prev = get(component);

        if (value !== prev) {
          setValue(component, value);
          ComponentContext.of(component).updateState(path, value, prev);
        }
      },
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

        const html = get(this);

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
