import { SetInputName } from '@wesib/generic/input';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { FeedService, FeedSupport } from '../../core/feed';
import { UseConduitInput } from '../../core/input';
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
    UseConduitInput({
      select: 'conduit-multi-input',
      makeControl({ node: { element } }) {
        return inMultiInput(element);
      },
    }),
    SetInputName('tagList'),
)
export class ArticleTagEditorComponent {

  @StateProperty()
  private tags: string[] = [];

  constructor(private readonly _context: ComponentContext) {
    _context.whenOn(supply => {
      _context.get(FeedService)
          .tags()
          .tillOff(supply)
          .to((...tags) => this.tags = tags)
          .whenOff(() => this.tags = []);
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
