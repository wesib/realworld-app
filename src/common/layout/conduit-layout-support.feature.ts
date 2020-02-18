import { Feature } from '@wesib/wesib';
import { ContainerComponent } from './container.component';
import { FooterComponent } from './footer.component';
import { LoaderComponent } from './loader.component';

@Feature({
  needs: [
    ContainerComponent,
    FooterComponent,
    LoaderComponent,
  ],
})
export class ConduitLayoutSupport {
}
