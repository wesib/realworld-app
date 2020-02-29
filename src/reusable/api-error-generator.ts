import { bootstrapDefault, BootstrapWindow } from '@wesib/wesib';
import { AIterable, overEntries } from 'a-iterable';
import { FnContextKey, FnContextRef } from 'context-values/updatable';
import { ApiResponse } from '../core/api';

export type ApiErrorGenerator = (this: void, errors: ApiResponse.Errors) => Element | undefined;

export const ApiErrorGenerator: FnContextRef<[ApiResponse.Errors], Element | undefined> = (
    /*#__PURE__*/ new FnContextKey<[ApiResponse.Errors], Element | undefined>(
        'api-error-generator',
        {
          byDefault: bootstrapDefault(context => {

            const document = context.get(BootstrapWindow).document;

            return errors => {

              let list: Element | undefined;

              AIterable.from(overEntries(errors)).forEach(
                  ([key, messages]) => {
                    if (!list) {
                      list = document.createElement('ul');
                      list.classList.add('error-messages');
                    }

                    const ul = list;

                    messages.forEach(message => {

                      const li = document.createElement('li');

                      li.innerText = `${key} ${message}`;
                      ul.appendChild(li);
                    });
                  },
              );

              return list;
            };
          }),
        },
    )
);
