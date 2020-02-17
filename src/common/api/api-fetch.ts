import { HttpFetch } from '@wesib/generic';
import { BootstrapContext, bootstrapDefault } from '@wesib/wesib';
import { nextArgs, NextCall } from 'call-thru';
import { FnContextKey, FnContextRef } from 'context-values/updatable';
import { AfterEvent, nextOnEvent, onAsync, OnEvent, OnEventCallChain } from 'fun-events';
import { AuthService__key } from '../auth/auth-service.key.impl';
import { ApiRootURL } from './api-root-url';

/**
 * Request to some API endpoint.
 */
export interface ApiRequest {

  /**
   * API endpoint path __relative__ to {@link ApiRootURL API root URL}.
   *
   * Do not start it with `/` as this would make it absolute.
   */
  readonly path: string;

  /**
   * Wrapper field containing response object.
   */
  readonly respondIn: string;

  /**
   * Additional HTTP request options.
   */
  readonly init?: RequestInit;

  /**
   * Whether to send authentication token.
   *
   * - `true` to always send it,
   * - `false` to never send it,
   * - `undefined` (the default) - to send it only if {@link AuthService.user current user} is authenticated.
   */
  readonly auth?: boolean;

}

export type ApiResponse<T = any> =
    | ApiResponse.Ok<T>
    | ApiResponse.Failure;

export namespace ApiResponse {

  export interface Ok<T = any> {
    readonly ok: true;
    readonly response: Response;
    readonly body: T;
  }

  export interface Failure {
    readonly ok: false;
    readonly response?: Response;
    readonly errors: Errors;
  }

  export type Errors = {
    readonly [field in string]: readonly string[];
  };

}

export type ApiFetch<T = any> = (this: void, request: ApiRequest) => OnEvent<[ApiResponse<T>]>;

export const ApiFetch: FnContextRef<[ApiRequest], OnEvent<[ApiResponse]>> = (
    new FnContextKey<[ApiRequest], OnEvent<[ApiResponse]>>(
        'api-fetch',
        {
          byDefault: bootstrapDefault(newApiFetch),
        },
    ));

type RequestOrFailure =
    | { request: Request }
    | { request?: undefined; failure: ApiResponse.Failure };
type ResponseOrFailure =
    | { response: Response }
    | { response?: undefined; failure: ApiResponse.Failure };
type ResponseBodyOrFailure =
    | [{ response: Response }, any]
    | [{ response?: undefined; failure: ApiResponse.Failure }];

function newApiFetch(context: BootstrapContext): ApiFetch {

  const httpFetch = context.get(HttpFetch);
  const apiRootURL = context.get(ApiRootURL);

  return request => {

    const { path, init, auth } = request;
    const onResponse: OnEvent<[ResponseOrFailure]> = apiRootURL.thru_(
        baseURL => new URL(path, baseURL),
        url => buildApiRequest(url, init),
    ).thru_(
        (request: Request): NextCall<OnEventCallChain, [RequestOrFailure]> => auth === false
            ? nextArgs({ request })
            : nextOnEvent(authenticateApiRequest(context, request, auth)),
        (requestOrFailure): NextCall<OnEventCallChain, [ResponseOrFailure]> => requestOrFailure.request
            ? nextOnEvent(httpFetch(requestOrFailure.request).thru_(response => ({ response })))
            : nextArgs({ failure: requestOrFailure.failure }),
    );

    return onAsync(onResponse.thru_(parseApiResponse)).thru_(
        ([responseOrFailure, json]) => handleApiResponse(request, responseOrFailure, json),
    );
  };
}

function buildApiRequest(url: URL, init: RequestInit = {}): Request {

  const request = new Request(url.href, { mode: 'cors', ...init });
  const { headers } = request;

  headers.set('X-Requested-With', 'XMLHttpRequest');

  return request;
}

function authenticateApiRequest(
    context: BootstrapContext,
    request: Request,
    auth?: true,
): AfterEvent<[RequestOrFailure]> {
  // Access by key to avoid circular dependencies during the build
  return context.get(AuthService__key).user.keep.thru_(
      (user?, failure?) => {
        if (user) {
          request.headers.set('Authorization', `Token ${user.token}`);
          return { request };
        }
        if (!auth) {
          return { request };
        }
        if (!failure) {
          failure = {
            ok: false,
            errors: {
              api: ['Not authenticated'],
            },
          };
        }
        return { failure };
      },
  );
}

function parseApiResponse(
    responseOfFailure: ResponseOrFailure,
): ResponseBodyOrFailure | Promise<ResponseBodyOrFailure> {
  return responseOfFailure.response
      ? Promise.all([responseOfFailure, responseOfFailure.response.json()])
          .catch(error => [{
            failure: {
              ok: false,
              response: responseOfFailure.response,
              errors: {
                api: [`Failed to parse response: ${error}`],
              },
            },
          }])
      : [responseOfFailure];
}

function handleApiResponse(
    { respondIn }: ApiRequest,
    responseOfFailure: ResponseOrFailure,
    json?: any,
): ApiResponse {
  if (!responseOfFailure.response) {
    return responseOfFailure.failure;
  }

  const { response } = responseOfFailure;

  if (response.ok) {
    return {
      ok: true,
      response,
      body: json[respondIn],
    };
  }

  return {
    ok: false,
    response,
    errors: json.errors || {
      http: [
        response.statusText
            ? `${response.status}: ${response.statusText}`
            : `ERROR ${response.status}`,
      ],
    },
  };
}
