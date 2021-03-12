import { supplyOn } from '@proc7ts/fun-events';
import { Field, SharedField } from '@wesib/generic/forms';
import {
  BootstrapContext,
  BootstrapWindow,
  Component,
  ComponentContext,
  ElementRenderer,
  Render,
  StateProperty,
} from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { FeedService, FeedSupport } from '../../core/feed';
import { inMultiInput, MultiInputComponent } from '../../reusable';

@Component(
    ['article-tag-editor', Conduit__NS],
    {
      feature: {
        needs: [
          FeedSupport,
          MultiInputComponent,
        ],
      },
    },
)
export class ArticleTagEditorComponent {

  @StateProperty()
  private tags: string[] = [];

  @SharedField()
  tagList?: Field<readonly string[]>;

  constructor(private readonly _context: ComponentContext) {
    _context.get(FeedService).tags.do(supplyOn(_context))(
        (...tags) => this.tags = tags,
    ).whenOff(
        () => this.tags = [],
    );

    const bsContext = _context.get(BootstrapContext);

    _context.whenSettled(({ element }: { element: Element }) => {
      bsContext.whenDefined(MultiInputComponent)(({ elementDef: { tagName } }) => {
        this.tagList = Field.by(opts => inMultiInput(element.querySelector(tagName!)!, opts));
      }).needs(_context);
    });
  }

  @Render()
  render(): ElementRenderer {

    const { document } = this._context.get(BootstrapWindow);
    const { element }: { element: Element } = this._context;
    const datalist = element.querySelector('datalist')!;

    return () => {
      datalist.innerHTML = '';
      this.tags.forEach(tag => {

        const option = datalist.appendChild(document.createElement('option'));

        option.value = tag + ' ';
      });
    };
  }

}
