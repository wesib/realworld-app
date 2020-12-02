import { InCssClasses, inCssInfo, InStyledElement } from '@frontmeans/input-aspects';
import { AfterEvent } from '@proc7ts/fun-events';
import { ConvertInput } from '@wesib/generic/input';
import { Attributes, Component, trackAttribute } from '@wesib/wesib';
import { Conduit__NS } from '../conduit.ns';
import { bootstrapCssError } from './bootstrap-css-error';

@Component(
    ['in-error', Conduit__NS],
    Attributes('code'),
    ConvertInput(
        ({ control: { control }, aspects, context }) => {

          const codes: AfterEvent<[string[]]> = trackAttribute(context, 'code')
              .read().keepThru_(
                  code => code ? code.trim().split(/\s+/) : [],
              );

          return codes.keepThru(
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
