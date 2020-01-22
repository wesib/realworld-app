import { Component } from '@wesib/wesib';
import { Conduit__NS } from '../conduit.ns';
import { MainComponent } from './main.component';
import { NavbarComponent } from './navbar.component';

@Component({
  name: ['container', Conduit__NS],
  feature: {
    needs: [MainComponent, NavbarComponent],
  },
})
export class ContainerComponent {
}
