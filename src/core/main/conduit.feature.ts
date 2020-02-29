import { Feature } from '@wesib/wesib';
import { AuthSupport } from '../auth';
import { ConduitLayoutSupport } from '../layout';

@Feature({
  needs: [
    AuthSupport,
    ConduitLayoutSupport,
  ],
})
export class ConduitFeature {
}
