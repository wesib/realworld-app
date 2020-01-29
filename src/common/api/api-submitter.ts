import { BootstrapContext, bootstrapDefault } from '@wesib/wesib';
import { FnContextKey, FnContextRef } from 'context-values';
import { OnEvent } from 'fun-events';
import { InSubmit, InSubmitError } from 'input-aspects';
import { ApiFetch, ApiRequest, ApiResponse } from './api-fetch';

export type ApiSubmitter<Value = any, Result = any> =
    (this: void, request: ApiRequest) => InSubmit.Submitter<Value, Result>;

export const ApiSubmitter: FnContextRef<[ApiRequest], InSubmit.Submitter<any, any>> = (
    new FnContextKey<[ApiRequest], InSubmit.Submitter<any, any>>(
        'api-submitter',
        {
          byDefault: bootstrapDefault(newApiSubmitter),
        },
    ));

function newApiSubmitter<Value, Result>(context: BootstrapContext): ApiSubmitter<Value, Result> {

  const apiFetch: ApiFetch<Result> = context.get(ApiFetch);

  return request => {

    const { init = {} } = request;
    const { method = 'POST', headers = {} } = init;

    return (body: Value) => {

      const apiRequest: ApiRequest = {
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
    onFetch.once(
        (response: ApiResponse) => {
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
