import { Feature } from '@wesib/wesib';
import { AuthSupport } from './auth';
import { LayoutSupport } from './layout';

@Feature({
  needs: [
    AuthSupport,
    LayoutSupport,
  ],
})
export class ConduitFeature {
}
