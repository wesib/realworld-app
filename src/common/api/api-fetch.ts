import { HttpFetch } from '@wesib/generic';
import { BootstrapContext, bootstrapDefault } from '@wesib/wesib';
import { FnContextKey, FnContextRef } from 'context-values';
import { EventNotifier, OnEvent, onEventBy } from 'fun-events';
import { ApiURL } from './api-url';

export interface ApiRequest {
  readonly path: string;
  readonly init?: RequestInit;
}

export type ApiResponse =
    | ApiResponse.Ok
    | ApiResponse.Failure;

export namespace ApiResponse {

  export interface Ok {
    readonly ok: true;
    readonly response: Response;
    readonly body: any;
  }

  export interface Failure {
    readonly ok: false;
    readonly response: Response;
    readonly error: Errors;
  }

  export interface Errors {
    readonly [field: string]: readonly string[];
  }

}

export type ApiFetch = (this: void, request: ApiRequest) => OnEvent<[ApiResponse]>;

export const ApiFetch: FnContextRef<[ApiRequest], OnEvent<[ApiResponse]>> = (
    new FnContextKey<[ApiRequest], OnEvent<[ApiResponse]>>(
        'api-fetch',
        {
          byDefault: bootstrapDefault(newApiFetch),
        },
    ));

function newApiFetch(context: BootstrapContext): ApiFetch {

  const httpFetch = context.get(HttpFetch);
  const apiURL = context.get(ApiURL);

  return ({ path, init }) => apiURL.thru_(
      baseURL => new URL(path, baseURL),
  ).dig_(
      url => httpFetch(url.href, init),
  ).dig_(
      response => onEventBy<[ApiResponse]>(receiver => {

        const sender = new EventNotifier<[ApiResponse]>();

        sender.on(receiver);

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
                  error: body,
                });
              }
            },
        ).catch(
            error => {
              sender.send({
                ok: false,
                response,
                error: {
                  api: [
                    `Failed to parse response: ${error}`,
                  ],
                },
              });
            },
        );
      }),
  );
}
