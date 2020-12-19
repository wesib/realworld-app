import { InSubmit, InSubmitError } from '@frontmeans/input-aspects';
import { ContextUpRef, FnContextKey } from '@proc7ts/context-values/updatable';
import { onceOn, OnEvent } from '@proc7ts/fun-events';
import { BootstrapContext, bootstrapDefault } from '@wesib/wesib';
import { ApiFetch, ApiRequest, ApiResponse } from './api-fetch';

export type ApiSubmitter =
    <Value = any, Result = any>(this: void, request: ApiRequest<Result>) => InSubmit.Submitter<Value, Result>;

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
): <Value, Result>(this: void, request: ApiRequest<Result>) => InSubmit.Submitter<Value, Result> {

  const apiFetch: ApiFetch = context.get(ApiFetch);

  return <Value, Result>(request: ApiRequest<Result>) => {

    const { init = {} } = request;
    const { method = 'POST', headers = {} } = init;

    return (body: Value) => {

      const apiRequest: ApiRequest<Result> = {
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

export function apiSubmit<Result>(onFetch: OnEvent<[ApiResponse<Result>]>): Promise<Result> {
  return new Promise((resolve, reject) => {
    onFetch.do(onceOn)(
        (response: ApiResponse<Result>) => {
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
