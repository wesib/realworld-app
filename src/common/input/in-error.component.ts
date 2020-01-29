import { ConvertInput } from '@wesib/generic/input';
import { attributePathTo, Attributes, Component, ComponentState } from '@wesib/wesib';
import { AfterEvent, afterSupplied } from 'fun-events';
import { InCssClasses, inCssInfo, InStyledElement } from 'input-aspects';
import { Conduit__NS } from '../conduit.ns';
import { bootstrapCssError } from './bootstrap-css-error';

@Component(
    ['in-error', Conduit__NS],
    Attributes('code'),
    ConvertInput(
        ({ control: { control }, aspects, context }) => {

          const { element }: { element: Element } = context;
          const codes: AfterEvent<[string[]]> = afterSupplied<[string | null]>(
              context.get(ComponentState)
                  .track(attributePathTo('code'))
                  .onUpdate
                  .thru_((_path, newValue: string) => newValue),
              () => [element.getAttribute('code')],
          ).keep.thru_(
              code => code ? code.trim().split(/\s+/) : [],
          );

          return codes.keep.thru(
              when => control.convert(
                  InStyledElement.to(context.element),
                  aspects,
              ).setup(
                  InCssClasses,
                  cssClasses => {
                    cssClasses.add(inCssInfo());
                    cssClasses.add(bootstrapCssError({ when }));
                  },
              ),
          );
        },
    ),
)
export class InErrorComponent {}
