import { Attribute, BootstrapWindow, Component, ComponentContext, ElementRenderer, Render } from '@wesib/wesib';
import { Conduit__NS } from '../../common';

@Component(['loader', Conduit__NS])
export class LoaderComponent {

  @Attribute('load-error')
  loadError?: string | null;

  constructor(private readonly _context: ComponentContext) {
  }

  @Render()
  render(): ElementRenderer {

    const { document } = this._context.get(BootstrapWindow);
    const range = document.createRange();

    range.selectNodeContents(this._context.contentRoot);

    return () => {
      range.deleteContents();
      if (this.loadError != null) {
        range.insertNode(document.createTextNode(this.loadError));
      }
    };
  }

}
