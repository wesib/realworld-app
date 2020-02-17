import { Feature } from '@wesib/wesib';
import { FeedSupport } from './articles';
import { AuthSupport } from './auth';
import { ConduitInputSupport } from './input';
import { ConduitLayoutSupport } from './layout';

@Feature({
  needs: [
    AuthSupport,
    ConduitInputSupport,
    ConduitLayoutSupport,
    FeedSupport,
  ],
})
export class ConduitFeature {
}
