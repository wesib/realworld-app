import { nextArgs, NextCall } from '@proc7ts/call-thru';
import { nextAfterEvent, OnEventCallChain } from '@proc7ts/fun-events';
import { InValidation } from '@proc7ts/input-aspects';
import { HierarchyContext } from '@wesib/generic';
import { InputFromControl } from '@wesib/generic/input';
import { Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { ApiErrorGenerator } from '../../reusable';
import { ApiResponse } from '../api';
import { Conduit__NS } from '../conduit.ns';

const noApiErrors: ApiResponse.Errors = {};

@Component(['api-errors', Conduit__NS])
export class ApiErrorsComponent {

  @StateProperty()
  errors: ApiResponse.Errors = noApiErrors;

  constructor(private readonly _context: ComponentContext) {
    _context.get(HierarchyContext)
        .get(InputFromControl)
        .thru_(
            ({ control }): NextCall<OnEventCallChain, [ApiResponse.Errors]> => {
              if (!control) {
                return nextArgs(noApiErrors);
              }
              return nextAfterEvent(
                  control.aspect(InValidation).read().keepThru_(
                      validity => validity.messages('api').reduce(
                          (prev, message) => ({
                            ...prev,
                            ...message.api,
                          }),
                          noApiErrors,
                      ),
                  ),
              );
            },
        )
        .to(errors => this.errors = errors);
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
