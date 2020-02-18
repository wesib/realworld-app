import { IncludePage } from '@wesib/generic';
import { BootstrapWindow, Component } from '@wesib/wesib';
import { Conduit__NS } from '../conduit.ns';

@Component(
    ['main', Conduit__NS],
    IncludePage({
      onResponse({ context, response, range }) {
        if (!response.ok) {
          range.deleteContents();

          const { document } = context.get(BootstrapWindow);
          const loader = document.createElement('conduit-loader');

          if (response.ok != null) {
            loader.setAttribute('load-error', `Error. ${String(response.error)}`);
          }

          range.insertNode(loader);
        }
      },
    }),
)
export class MainComponent {}
