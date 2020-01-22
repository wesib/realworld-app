import { ComponentTreeSupport, PageLoadSupport } from '@wesib/generic';
import { Feature } from '@wesib/wesib';
import { ContainerComponent } from './container.component';

@Feature({
  needs: [
    ComponentTreeSupport,
    ContainerComponent,
    PageLoadSupport,
  ],
})
export class LayoutSupport {
}
