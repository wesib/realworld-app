import { InSubmit, InSubmitError } from '@frontmeans/input-aspects';
import { ContextUpRef, FnContextKey } from '@proc7ts/context-values/updatable';
import { onceOn, OnEvent } from '@proc7ts/fun-events';
import { BootstrapContext, bootstrapDefault } from '@wesib/wesib';
import { ApiFetch, ApiRequest, ApiResponse } from './api-fetch';

export type ApiSubmitter =
    <TValue = any, TResult = any>(this: void, request: ApiRequest<TResult>) => InSubmit.Submitter<TValue, TResult>;

export const ApiSubmitter: ContextUpRef<ApiSubmitter, ApiSubmitter> = (
    /*#__PURE__*/ new FnContextKey<[ApiRequest<any>], InSubmit.Submitter<any, any>>(
        'api-submitter',
        {
          byDefault: bootstrapDefault(newApiSubmitter),
        },
    )
);

function newApiSubmitter(
    context: BootstrapContext,
): <TValue, TResult>(this: void, request: ApiRequest<TResult>) => InSubmit.Submitter<TValue, TResult> {

  const apiFetch: ApiFetch = context.get(ApiFetch);

  return <TValue, TResult>(request: ApiRequest<TResult>) => {

    const { init = {} } = request;
    const { method = 'POST', headers = {} } = init;

    return (body: TValue) => {

      const apiRequest: ApiRequest<TResult> = {
        ...request,
        init: {
          ...init,
          method,
          body: JSON.stringify(body),
          headers: {
            ...headers,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      };

      return apiSubmit(apiFetch(apiRequest));
    };
  };
}

export function apiSubmit<TResult>(onFetch: OnEvent<[ApiResponse<TResult>]>): Promise<TResult> {
  return new Promise((resolve, reject) => {
    onFetch.do(onceOn)(
        (response: ApiResponse<TResult>) => {
          if (response.ok) {
            resolve(response.body);
          } else {
            reject(new InSubmitError({ submit: 'api', api: response.errors }));
          }
        },
    ).whenOff(
        reason => {
          reject(
              reason instanceof InSubmitError
                  ? reason
                  : new InSubmitError({ submit: 'cancel', cancel: reason }),
          );
        },
    );
  });
}
