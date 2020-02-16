import { Feature } from '@wesib/wesib';
import { AuthSupport } from './auth';
import { ConduitInputSupport } from './input';
import { LayoutSupport } from './layout';

@Feature({
  needs: [
    AuthSupport,
    ConduitInputSupport,
    LayoutSupport,
  ],
})
export class ConduitFeature {
}
