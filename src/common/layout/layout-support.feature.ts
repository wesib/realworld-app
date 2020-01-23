import { PageLoadSupport } from '@wesib/generic';
import { Feature } from '@wesib/wesib';
import { ContainerComponent } from './container.component';
import { FooterComponent } from './footer.component';

@Feature({
  needs: [
    ContainerComponent,
    FooterComponent,
    PageLoadSupport,
  ],
})
export class LayoutSupport {
}
