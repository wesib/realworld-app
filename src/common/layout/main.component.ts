import { IncludePage } from '@wesib/generic';
import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../conduit.ns';

@Component(
    ['main', Conduit__NS],
    IncludePage({
      onResponse({ response, range }) {
        if (!response.ok) {
          range.deleteContents();
          if (response.ok == null) {
            range.insertNode(document.createTextNode('Loading...'));
          } else {
            range.insertNode(document.createTextNode(`Error. ${response.error}`));
          }
        }
      },
    }),
)
export class MainComponent {}
