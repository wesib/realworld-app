import { Feature } from '@wesib/wesib';
import { LoaderComponent } from './loader.component';
import { PagerComponent } from './pager.component';

@Feature({
  needs: [
    LoaderComponent,
    PagerComponent,
  ],
})
export class ConduitGenericSupport {
}
