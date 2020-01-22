import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../conduit.ns';
import { MainComponent } from './main.component';
import { NavComponent } from './nav.component';

@Component({
  name: ['container', Conduit__NS],
  feature: {
    needs: [MainComponent, NavComponent],
  },
})
export class ContainerComponent {
}
