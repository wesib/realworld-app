import { css__naming, QualifiedName } from '@frontmeans/namespace-aliaser';
import { RenderExecution } from '@frontmeans/render-scheduler';
import {
  ComponentClass,
  ComponentContext,
  ComponentDef,
  ComponentProperty,
  ComponentPropertyDecorator,
  DefaultNamespaceAliaser,
  ElementRenderer,
  Render,
  RenderDef,
  RenderPath__root,
} from '@wesib/wesib';
import { ApiErrorGenerator, RenderHTML } from '../../reusable';
import { ApiResponse } from '../api';
import { Conduit__NS } from '../conduit.ns';
import { LoaderComponent } from './loader.component';

export type LoadStatus =
    | LoadStatus.Succeed
    | LoadStatus.Failed;

export namespace LoadStatus {

  export interface Succeed {
    readonly ok: true;
  }

  export interface Failed {
    readonly ok: false;
    readonly errors: ApiResponse.Errors;
  }

}

const LoadStatus__symbol = (/*#__PURE__*/ Symbol('load-status'));
const defaultLoadedClass: QualifiedName = ['loaded', Conduit__NS];

export function RenderLoader<T extends ComponentClass>(
    def: {
      loaded?: QualifiedName;
      render?: RenderDef.Spec;
      comment?: string;
    } = {},
): ComponentPropertyDecorator<LoadStatus | undefined, T> {
  return ComponentProperty(({ get, set: setValue, key }) => {

    const {
      render: renderSpec = {},
      loaded = defaultLoadedClass,
      comment = String(key),
    } = def;
    const path = [RenderPath__root, LoadStatus__symbol, key];
    let loadedClassName: string;
    const render = RenderDef.fulfill({ on: path }, renderSpec);

    return {
      componentDef: ComponentDef.all(
          {
            feature: {
              needs: LoaderComponent,
            },
            define(defContext) {
              loadedClassName = css__naming.name(loaded, defContext.get(DefaultNamespaceAliaser));
              if (renderSpec.on) {
                defContext.whenComponent(context => {
                  RenderDef.trigger(context, renderSpec)(
                      () => context.updateState(path, 'new', 'old'),
                  );
                });
              }
            },
          },
          Render(render).As(updateClass, key),
          RenderHTML({ render, comment: `LOADER(${comment})` }).As(renderLoader, key),
          RenderHTML({ render, comment: `ERRORS(${comment})` }).As(renderErrors, key),
      ),
      get,
      set(component, value) {

        const prev = get(component);

        setValue(component, value);
        ComponentContext.of(component).updateState(path, value, prev);
      },
    };

    function updateClass(this: InstanceType<T>): ElementRenderer {

      const { element }: { element: Element } = ComponentContext.of(this);

      return (execution: RenderExecution) => {

        const status = get(this);

        if (status && status.ok) {
          // Make contents visible in the very end
          execution.postpone(() => {
            element.classList.add(loadedClassName);
          });
        } else {
          element.classList.remove(loadedClassName);
        }
      };
    }

    function renderLoader(this: InstanceType<T>): Node | undefined {

      const status = get(this);

      return !status ? document.createElement('conduit-loader') : undefined;
    }

    function renderErrors(this: InstanceType<T>): Node | undefined {

      const status = get(this);

      return status && !status.ok
          ? ComponentContext.of(this).get(ApiErrorGenerator)(status.errors)
          : undefined;
    }

  });
}
