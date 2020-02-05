import { HttpFetch } from '@wesib/generic';
import { BootstrapContext, bootstrapDefault } from '@wesib/wesib';
import { nextArgs, NextCall } from 'call-thru';
import { FnContextKey, FnContextRef } from 'context-values/updatable';
import { AfterEvent, EventNotifier, nextOnEvent, OnEvent, onEventBy, OnEventCallChain } from 'fun-events';
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

function newApiFetch(context: BootstrapContext): ApiFetch {

  const httpFetch = context.get(HttpFetch);
  const apiRootURL = context.get(ApiRootURL);

  return ({ path, init, auth }) => {

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

    return onEventBy<[ApiResponse]>(receiver => {

      const sender = new EventNotifier<[ApiResponse]>();

      sender.on(receiver);

      onResponse(response => handleApiResponse(response, sender));
    });
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

function handleApiResponse(
    responseOfFailure: ResponseOrFailure,
    sender: EventNotifier<[ApiResponse]>,
): void {
  if (!responseOfFailure.response) {
    sender.send(responseOfFailure.failure);
    sender.done();
  } else {

    const { response } = responseOfFailure;

    response.json().then(
        body => {
          if (response.ok) {
            sender.send({
              ok: true,
              response,
              body,
            });
          } else {
            sender.send({
              ok: false,
              response,
              errors: body.errors || {
                http: [
                  response.statusText
                      ? `${response.status}: ${response.statusText}`
                      : `ERROR ${response.status}`,
                ],
              },
            });
          }
          sender.done();
        },
    ).catch(
        error => {
          sender.send({
            ok: false,
            response,
            errors: {
              api: [`Failed to parse response: ${error}`],
            },
          });
          sender.done();
        },
    );
  }
}
