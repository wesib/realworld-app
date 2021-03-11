import { InValidation } from '@frontmeans/input-aspects';
import { AfterEvent, afterThe, digAfter_, EventKeeper, mapAfter_ } from '@proc7ts/fun-events';
import { Share__symbol } from '@wesib/generic';
import { Form, FormShare } from '@wesib/generic/forms';
import { Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { ApiErrorGenerator } from '../../reusable';
import { ApiResponse } from '../api';
import { Conduit__NS } from '../conduit.ns';

const noApiErrors: ApiResponse.Errors = {};

@Component(['submit-errors', Conduit__NS])
export class SubmitErrorsComponent {

  @StateProperty()
  errors: ApiResponse.Errors = noApiErrors;

  constructor(private readonly _context: ComponentContext) {
    FormShare[Share__symbol]
        .valueFor(_context, { local: 'too' })
        .do(
            digAfter_((form?, _sharer?): EventKeeper<[Form.Controls<any>?]> => form || afterThe()),
            digAfter_((controls?: Form.Controls<any>): AfterEvent<[ApiResponse.Errors]> => controls
                ? controls.control.aspect(InValidation).read.do(
                    mapAfter_(validity => validity.messages('api').reduce(
                        (prev, message) => ({
                          ...prev,
                          ...message.api,
                        }),
                        noApiErrors,
                    )),
                )
                : afterThe(noApiErrors)),
        )(
            errors => this.errors = errors,
        );
  }

  @Render()
  render(): ElementRenderer {

    const { contentRoot } = this._context;
    let list: Element | undefined;

    return () => {
      if (list) {
        list.remove();
        list = undefined;
      }
      list = this._context.get(ApiErrorGenerator)(this.errors);
      if (list) {
        contentRoot.append(list);
      }
    };
  }

}
