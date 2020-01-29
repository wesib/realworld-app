import { BootstrapContext, bootstrapDefault } from '@wesib/wesib';
import { FnContextKey, FnContextRef } from 'context-values';
import { InSubmit, InSubmitError } from 'input-aspects';
import { ApiFetch, ApiRequest, ApiResponse } from './api-fetch';

export type ApiSubmitter<Value = any, Result = any> =
    (this: void, request: ApiRequest) => InSubmit.Submitter<Value, Result>;

export const ApiSubmitter: FnContextRef<[ApiRequest], InSubmit.Submitter<any, any>> = (
    new FnContextKey<[ApiRequest], InSubmit.Submitter<any, any>>(
        'api-fetch',
        {
          byDefault: bootstrapDefault(newApiSubmitter),
        },
    ));

function newApiSubmitter<Value, Result>(context: BootstrapContext): ApiSubmitter<Value, Result> {

  const apiFetch: ApiFetch<Result> = context.get(ApiFetch);

  return request => {

    const { init = {} } = request;
    const { method = 'POST', headers = {} } = init;

    return (body: Value) => new Promise<Result>(
        (resolve, reject) => {

          const apiRequest: ApiRequest = {
            ...request,
            init: {
              ...init,
              method,
              body: JSON.stringify(body),
              headers: {
                ...headers,
                'Content-Type': 'application/json',
              },
            },
          };

          apiFetch(apiRequest).once(
              (response: ApiResponse) => {
                if (response.ok) {
                  resolve(response.body);
                } else {
                  reject(new InSubmitError({ submit: 'api', api: response.errors }));
                }
              },
          ).whenOff(
              reason => reject(
                  reason instanceof InSubmitError
                      ? reason
                      : new InSubmitError({ submit: 'cancel', cancel: reason }),
              ),
          );
        },
    );
  };
}
