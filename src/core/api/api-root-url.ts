import { SingleContextUpKey, SingleContextUpRef } from '@proc7ts/context-values/updatable';

export type ApiRootURL = URL;

export const ApiRootURL: SingleContextUpRef<ApiRootURL> = (
    /*#__PURE__*/ new SingleContextUpKey<ApiRootURL>(
    'api-root-url',
    {
      byDefault: () => new URL('https://conduit.productionready.io/api/'),
    },
));
