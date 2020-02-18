import { Feature } from '@wesib/wesib';
import { LoaderComponent } from './loader.component';

@Feature({
  needs: [
    LoaderComponent,
  ],
})
export class ConduitGenericSupport {
}
