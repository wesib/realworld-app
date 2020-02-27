import { HierarchyContext } from '@wesib/generic';
import { InputToForm } from '@wesib/generic/input';
import { Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { nextArgs, NextCall } from 'call-thru';
import { nextAfterEvent, OnEventCallChain } from 'fun-events';
import { InValidation } from 'input-aspects';
import { ApiResponse } from '../api';
import { Conduit__NS } from '../conduit.ns';
import { ApiErrorGenerator } from './api-error-generator';

const noApiErrors: ApiResponse.Errors = {};

@Component(['api-errors', Conduit__NS])
export class ApiErrorsComponent {

  @StateProperty()
  errors: ApiResponse.Errors = noApiErrors;

  constructor(private readonly _context: ComponentContext) {
    _context.get(HierarchyContext)
        .get(InputToForm)
        .thru_(
            ({ control }): NextCall<OnEventCallChain, [ApiResponse.Errors]> => {
              if (!control) {
                return nextArgs(noApiErrors);
              }
              return nextAfterEvent(
                  control.aspect(InValidation).read.keep.thru_(
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
        )(errors => this.errors = errors);
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
