import { bootstrapComponents } from '@wesib/wesib';
import { ConduitFeature } from './conduit.feature';

export * from './conduit.feature';
export * from './conduit.ns';

export const conduitContext = bootstrapComponents(ConduitFeature);
