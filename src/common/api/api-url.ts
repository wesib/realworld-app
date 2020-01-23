import { SingleContextUpKey, SingleContextUpRef } from 'context-values';

export type ApiURL = URL;

export const ApiURL: SingleContextUpRef<ApiURL> = new SingleContextUpKey<ApiURL>(
    'api-url',
    {
      byDefault: () => new URL('https://conduit.productionready.io/api/'),
    },
);
