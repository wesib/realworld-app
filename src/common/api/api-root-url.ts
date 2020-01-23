import { SingleContextUpKey, SingleContextUpRef } from 'context-values';

export type ApiRootURL = URL;

export const ApiRootURL: SingleContextUpRef<ApiRootURL> = new SingleContextUpKey<ApiRootURL>(
    'api-root-url',
    {
      byDefault: () => new URL('https://conduit.productionready.io/api/'),
    },
);