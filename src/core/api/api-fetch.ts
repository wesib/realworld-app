import { ContextUpRef, FnContextKey } from '@proc7ts/context-values/updatable';
import { AfterEvent, afterThe, digOn_, mapAfter_, mapOn_, OnEvent, resolveOnOrdered } from '@proc7ts/fun-events';
import { HttpFetch } from '@wesib/generic';
import { BootstrapContext, bootstrapDefault } from '@wesib/wesib';
import { AuthService__key } from '../auth/auth-service.key.impl';
import { ApiRootURL } from './api-root-url';

/**
 * Request to some API endpoint.
 *
 * @typeparam T  Response type.
 */
export interface ApiRequest<T> {

  /**
   * API endpoint path __relative__ to {@link ApiRootURL API root URL}.
   *
   * Do not start it with `/` as this would make it absolute.
   */
  readonly path: string;

  /**
   * Wrapper field containing response object, or a function extracting it.
   */
  readonly respondAs: string | ((this: void, json: any) => T);

  /**
   * Additional HTTP request options.
   */
  readonly init?: RequestInit;

  /**
   * Whether to send authentication token.
   *
   * - `true` to always send it,
   * - `false` to never send it,
   * - `undefined` (the default) - to send it only when {@link AuthService.authentication authenticated}.
   */
  readonly auth?: boolean;

}

export type ApiResponse<T> =
    | ApiResponse.Ok<T>
    | ApiResponse.Failure;

export namespace ApiResponse {

  export type Any<T> =
      | Success<T>
      | None
      | Failure;

  export interface Success<T> {
    readonly ok: true;
    readonly body: T;
  }

  export interface None {
    readonly ok: true;
    readonly body?: undefined;
  }

  export interface Ok<T> extends Success<T> {
    readonly response: Response;
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

export type ApiFetch = <T>(this: void, request: ApiRequest<T>) => OnEvent<[ApiResponse<T>]>;

export const ApiFetch: ContextUpRef<ApiFetch, ApiFetch> = (
    /*#__PURE__*/ new FnContextKey<[ApiRequest<any>], OnEvent<[ApiResponse<any>]>>(
    'api-fetch',
    {
      byDefault: bootstrapDefault(newApiFetch),
    },
));

export function notAuthenticatedError(): ApiResponse.Errors {
  return {
    authentication: ['absent'],
  };
}

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
    const onResponse: OnEvent<[ResponseOrFailure]> = apiRootURL.do(
        mapAfter_(baseURL => new URL(path, baseURL)),
        mapAfter_(url => buildApiRequest(url, init)),
        digOn_((request: Request): OnEvent<[RequestOrFailure]> => auth === false
            ? afterThe({ request })
            : authenticateApiRequest(context, request, auth)),
        digOn_((requestOrFailure): OnEvent<[ResponseOrFailure]> => requestOrFailure.request
            ? httpFetch(requestOrFailure.request).do(mapOn_(response => ({ response })))
            : afterThe({ failure: requestOrFailure.failure })),
    );

    return onResponse.do(
        mapOn_(parseApiResponse),
        resolveOnOrdered,
        mapOn_(([responseOrFailure, json]) => handleApiResponse(request, responseOrFailure, json)),
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
  return context.get(AuthService__key).token.do(
      mapAfter_(({ token, failure }) => {
        if (token) {
          request.headers.set('Authorization', `Token ${token}`);
          return { request };
        }
        if (!auth) {
          return { request };
        }
        if (!failure) {
          failure = {
            ok: false,
            errors: notAuthenticatedError(),
          };
        }
        return { failure };
      }),
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
              errors: !responseOfFailure.response.ok
                  ? httpError(responseOfFailure.response)
                  : {
                    api: [`Failed to parse response: ${error}`],
                  },
            },
          }])
      : [responseOfFailure];
}

function handleApiResponse<T>(
    { respondAs }: ApiRequest<T>,
    responseOfFailure: ResponseOrFailure,
    json: { errors?: ApiResponse.Failure['errors'] } & Record<string, any>,
): ApiResponse<T> {
  if (!responseOfFailure.response) {
    return responseOfFailure.failure;
  }

  const { response } = responseOfFailure;

  if (response.ok) {
    return {
      ok: true,
      response,
      body: typeof respondAs === 'function' ? respondAs(json) : json[respondAs],
    };
  }

  return {
    ok: false,
    response,
    errors: json.errors || httpError(response),
  };
}

function httpError(response: Response): ApiResponse.Errors {
  return {
    HTTP: [`ERROR ${response.status}${response.statusText ? ': ' + response.statusText : ''}`],
  };
}
