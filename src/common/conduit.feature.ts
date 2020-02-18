import { Feature } from '@wesib/wesib';
import { FeedSupport } from './articles';
import { AuthSupport } from './auth';
import { ConduitGenericSupport } from './generic';
import { ConduitInputSupport } from './input';
import { ConduitLayoutSupport } from './layout';

@Feature({
  needs: [
    AuthSupport,
    ConduitGenericSupport,
    ConduitInputSupport,
    ConduitLayoutSupport,
    FeedSupport,
  ],
})
export class ConduitFeature {
}
