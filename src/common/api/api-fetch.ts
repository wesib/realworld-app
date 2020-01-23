import { HttpFetch } from '@wesib/generic';
import { BootstrapContext, bootstrapDefault } from '@wesib/wesib';
import { FnContextKey, FnContextRef } from 'context-values';
import { AfterEvent, afterThe, EventNotifier, OnEvent, onEventBy } from 'fun-events';
import { AuthService } from '../auth';
import { ApiURL } from './api-url';

export interface ApiRequest {
  readonly path: string;
  readonly init?: RequestInit;
  readonly noAuth?: boolean;
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

  export interface Errors {
    readonly [field: string]: readonly string[];
  }

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
  const apiURL = context.get(ApiURL);

  return ({ path, init, noAuth }) => apiURL.thru_(
      baseURL => new URL(path, baseURL),
      url => buildApiRequest(url, init),
  ).dig_(
      request => noAuth
          ? afterThe<[RequestOrFailure]>({ request })
          : authenticateApiRequest(context, request),
  ).dig_(
      requestOrFailure => requestOrFailure.request
          ? httpFetch(requestOrFailure.request).thru_(response => ({ response }))
          : afterThe<[ResponseOrFailure]>({ failure: requestOrFailure.failure }),
  ).dig_(
      handleApiResponse,
  );
}

function buildApiRequest(url: URL, init: RequestInit = {}): Request {

  const request = new Request(url.href, { mode: 'cors', ...init });
  const { headers } = request;

  headers.set('X-Requested-With', 'XMLHttpRequest');
  if (request.body != null && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  return request;
}

function authenticateApiRequest(context: BootstrapContext, request: Request): AfterEvent<[RequestOrFailure]> {
  return context.get(AuthService).user.keep.thru_(
      (user?, failure?) => {
        if (user) {
          request.headers.set('Authorization', `Token ${user.token}`);
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

function handleApiResponse(responseOfFailure: ResponseOrFailure): OnEvent<[ApiResponse]> {
  return onEventBy<[ApiResponse]>(receiver => {

    const sender = new EventNotifier<[ApiResponse]>();

    sender.on(receiver);

    if (!responseOfFailure.response) {
      sender.send(responseOfFailure.failure);
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
                errors: body,
              });
            }
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
          },
      );
    }

    sender.done();
  });
}
