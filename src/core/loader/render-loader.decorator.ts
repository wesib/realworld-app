import { StatePath } from '@proc7ts/fun-events';
import { css__naming, QualifiedName } from '@proc7ts/namespace-aliaser';
import { RenderExecution } from '@proc7ts/render-scheduler';
import {
  ComponentClass,
  ComponentContext,
  ComponentDef,
  ComponentProperty,
  ComponentPropertyDecorator,
  DefaultNamespaceAliaser,
  ElementRenderer,
  Render,
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
      path?: StatePath;
      offline?: boolean;
      comment?: string;
    } = {},
): ComponentPropertyDecorator<LoadStatus | undefined, T> {
  return ComponentProperty(({ get, set: setValue, key }) => {

    const {
      path = [LoadStatus__symbol, key],
      offline,
      loaded = defaultLoadedClass,
      comment = String(key),
    } = def;
    let loadedClassName: string;

    return {
      componentDef: ComponentDef.all(
          {
            feature: {
              needs: LoaderComponent,
            },
            define(defContext) {
              loadedClassName = css__naming.name(loaded, defContext.get(DefaultNamespaceAliaser));
            },
          },
          Render({ path, offline }).As(updateClass, key),
          RenderHTML({ path, offline, comment: `LOADER(${comment})` }).As(renderLoader, key),
          RenderHTML({ path, offline, comment: `ERRORS(${comment})` }).As(renderErrors, key),
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
