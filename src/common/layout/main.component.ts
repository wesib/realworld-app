import { importNodeContent, Navigation, pageLoadParam, PageLoadResponse } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRender, Render } from '@wesib/wesib';
import { trackValue } from 'fun-events';
import { Conduit__NS } from '../conduit.ns';

@Component(['main', Conduit__NS])
export class MainComponent {

  private readonly _response = trackValue<PageLoadResponse>();

  constructor(private readonly _context: ComponentContext) {
    this._response.on((n, o) => _context.updateState('response', n, o));

    const navigation = _context.get(Navigation);

    _context.whenOn(supply => {
      navigation.read.once(page => {
        page.put(
            pageLoadParam,
            {
              fragment: { tag: _context.element.tagName },
              receiver: {
                supply,
                receive: (_ctx, response) => this._response.it = response,
              },
            },
        );
      });
    });
  }

  @Render()
  render(): ElementRender {

    const document = this._context.get(BootstrapWindow).document;
    const range = document.createRange();

    range.selectNodeContents(this._context.element);

    return () => {

      const response = this._response.it;

      if (response) {
        range.deleteContents();
        if (response.ok) {

          const target = document.createDocumentFragment();
          const { fragment } = response;

          if (fragment) {
            importNodeContent(fragment, target);
            range.insertNode(target);
          }
        } else if (response.ok == null) {
          range.insertNode(document.createTextNode('Loading...'));
        } else {
          range.insertNode(document.createTextNode(`Error. ${response.error}`));
        }
      }
    };
  }

}
