import { Feature } from '@wesib/wesib';
import { AuthSupport } from './auth';
import { InputSupport } from './input';
import { LayoutSupport } from './layout';

@Feature({
  needs: [
    AuthSupport,
    InputSupport,
    LayoutSupport,
  ],
})
export class ConduitFeature {
}
