import { Feature } from '@wesib/wesib';
import { AuthSupport } from './auth';
import { ConduitInputSupport } from './input';
import { ConduitLayoutSupport } from './layout';

@Feature({
  needs: [
    AuthSupport,
    ConduitInputSupport,
    ConduitLayoutSupport,
  ],
})
export class ConduitFeature {
}
