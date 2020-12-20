import { InValidation } from '@frontmeans/input-aspects';
import { AfterEvent, afterThe, digAfter_, mapAfter_ } from '@proc7ts/fun-events';
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
        .do(
            digAfter_(({ control }): AfterEvent<[ApiResponse.Errors]> => {
              if (!control) {
                return afterThe(noApiErrors);
              }
              return control.aspect(InValidation).read.do(
                  mapAfter_(validity => validity.messages('api').reduce(
                      (prev, message) => ({
                        ...prev,
                        ...message.api,
                      }),
                      noApiErrors,
                  )),
              );
            }),
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
