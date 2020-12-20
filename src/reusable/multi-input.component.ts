import { AbstractInElement, InConverter, InElement } from '@frontmeans/input-aspects';
import { DeltaSet } from '@proc7ts/delta-set';
import { overArray } from '@proc7ts/push-iterator';
import {
  AttachShadow,
  AttributeChanged,
  BootstrapWindow,
  Component,
  ComponentContext,
  ContentRoot,
  DomProperty,
  domPropertyPathTo,
  ElementRenderer,
  Render,
} from '@wesib/wesib';
import { Conduit__NS } from '../core';

export class MultiInputEvent extends CustomEvent<readonly string[]> {
}

const trailingSpace = /\s$/;

/**
 * Tags input based on [multi-input](https://github.com/samdutton/multi-input) component by Sam Dutton.
 *
 * Does not allow duplicates. Does not limit a list of allowed values. Expects values to be space-separated.
 *
 * Raises {@link MultiInputEvent} on list update.
 */
@Component(['multi-input', Conduit__NS])
@AttachShadow()
export class MultiInputComponent {

  private readonly _values = new DeltaSet<string>();
  private _input?: HTMLInputElement;
  private _datalist?: HTMLDataListElement;

  constructor(private readonly _context: ComponentContext) {
  }

  get input(): HTMLInputElement {
    // Initialize it lazily as it may be dynamically created.
    if (this._input) {
      return this._input;
    }

    const { element } = this._context as { element: Element };

    this._input = element.querySelector('input')!;
    this._input.onblur = this._input.onchange = this._handleBlur.bind(this);
    this._input.oninput = this._handleInput.bind(this);
    this._input.onkeydown = this._handleKeydown.bind(this);

    return this._input;
  }

  get datalist(): HTMLDataListElement {
    // Initialize it lazily as it may be dynamically created.
    if (this._datalist) {
      return this._datalist;
    }

    const { element } = this._context as { element: Element };

    this._datalist = element.querySelector('datalist')!;

    return this._datalist;
  }

  get values(): readonly string[] {
    return Array.from(this._values);
  }

  @DomProperty()
  set values(values: readonly string[]) {
    this._values.clear();
    this._values.delta(values || []);
  }

  get readonly(): boolean {
    return this.input.disabled || this.input.readOnly;
  }

  @AttributeChanged('disabled')
  setDisabled(value: string | null): void {
    if (value != null) {
      this.input.setAttribute('disabled', value);
    } else {
      this.input.removeAttribute('disabled');
    }
  }

  @AttributeChanged('readonly')
  setReadonly(value: string | null): void {
    if (value != null) {
      this.input.setAttribute('readonly', value);
    } else {
      this.input.removeAttribute('readonly');
    }
  }

  @Render()
  render(): ElementRenderer {

    const { contentRoot, element } = this._context as { contentRoot: ContentRoot; element: Element };
    const { document } = this._context.get(BootstrapWindow);

    contentRoot.innerHTML = `<style>
:host {
  border: var(--multi-input-border, 1px solid #ddd);
  display: block;
  overflow: hidden;
  padding: 5px;
}
/* NB use of pointer-events to only allow events from the × icon */
::slotted(div.item) {
  background-color: var(--multi-input-item-bg-color, #dedede);
  border: var(--multi-input-item-border, 1px solid #ccc);
  border-radius: 2px;
  color: #222;
  display: inline-block;
  font-size: var(--multi-input-item-font-size, 14px);
  margin: 5px;
  padding: 2px 25px 2px 5px;
  pointer-events: none;
  position: relative;
  top: -1px;
}
/* NB pointer-events: none above */
::slotted(div.item:hover) {
  background-color: #eee;
  color: black;
}
::slotted(input) {
  border: none;
  font-size: var(--multi-input-input-font-size, 14px);
  outline: none;
  padding: 10px 10px 10px 5px;
}
</style>
<slot></slot>`;

    element.insertBefore(document.createComment('[ITEMS['), this.input);

    const end = element.insertBefore(document.createComment(']ITEMS]'), this.input);
    const valueOption = (value: string): HTMLOptionElement | undefined => {

      const match = value + ' ';

      for (const option of overArray(this.datalist.options)) {
        if (option.value === match) {
          return option;
        }
      }

      return;
    };
    const valueItem = (value: string): Element | undefined => {
      for (const item of overArray(element.querySelectorAll('.item'))) {
        if (item.textContent === value) {
          return item;
        }
      }
      return;
    };

    return () => {
      this._values.redelta({
        add: value => {
          if (!valueItem(value)) {

            const item = document.createElement('div');

            item.className = 'item';
            item.textContent = value;
            item.onclick = () => {
              if (!this.readonly) {
                this._delete(value);
              }
            };

            element.insertBefore(item, end);
          }

          // Remove value from datalist options.
          // Value is added back if an item is deleted (see _delete()).
          valueOption(value)?.remove();
        },
        delete: value => {
          // Remove item
          valueItem(value)?.remove();

          // Add datalist option unless there is one already
          if (!valueOption(value)) {

            const option = document.createElement('option');

            // Append space to force adding value when option selected.
            option.value = value + ' ';
            this.datalist.appendChild(option);
          }
        },
      }).undelta();
    };
  }

  // Called by _handleKeydown() when the value of the input is an allowed value.
  private _add(value: string, force = false): void {
    if (!force && !trailingSpace.test(value)) {
      return;
    }
    value = value.trim();
    if (!value) {
      return;
    }

    this._values.add(value);
    this.input.value = '';
    this._sendEvent();
  }

  // Called when the × icon is tapped/clicked or
  // by _handleKeydown() when Backspace is entered.
  private _delete(value: string): void {
    this._values.delete(value);
    this._sendEvent();
  }

  // Avoid stray text remaining in the input element that's not in a div.item.
  private _handleBlur(): void {

    const { value } = this.input;

    this.input.value = '';
    this._add(value, true);
  }

  // Called when input text changes,
  // either by entering text or selecting a datalist option.
  private _handleInput(): void {
    // Add a div.item
    this._add(this.input.value);
  }

  // Called when text is entered or keys pressed in the input element.
  private _handleKeydown(event: KeyboardEvent): void {

    const value = this.input.value;

    // On Backspace, delete the div.item to the left of the input
    if (!value && event.key === 'Backspace') {

      const { values } = this;

      if (values.length) {
        this._delete(values[values.length - 1]);
      }

      return;
    }

    this._add(this.input.value);
  }

  private _sendEvent(): void {
    this._context.updateState(domPropertyPathTo('values'), this.values, this.values);
    this._context.dispatchEvent(new MultiInputEvent('conduit:input', { bubbles: true, detail: this.values }));
  }

}

export namespace MultiInputComponent {

  export interface Element extends HTMLElement {
    values: readonly string[];
  }

  export type Control = InElement<readonly string[], Element>;

}

class MultiInputControl extends AbstractInElement<readonly string[], MultiInputComponent.Element> {

  constructor(
      element: MultiInputComponent.Element,
      {
        aspects,
      }: {
        readonly aspects?: InConverter.Aspect<readonly string[]> | readonly InConverter.Aspect<readonly string[]>[];
      } = {},
  ) {
    super(
        element,
        {
          aspects,
          get: () => element.values,
          set: (values: readonly string[]) => element.values = values,
        },
    );
  }

  protected listenForInput(
      update: (input: InElement.Input<readonly string[]>) => void,
  ): void {
    this.events.on<MultiInputEvent>('conduit:input')(event => {
      update({ event, value: event.detail });
    });
  }

}

export function inMultiInput(
    element: MultiInputComponent.Element,
    {
      aspects,
    }: {
      readonly aspects?: InConverter.Aspect<readonly string[]> | readonly InConverter.Aspect<readonly string[]>[];
    } = {},
): MultiInputComponent.Control {
  return new MultiInputControl(element, { aspects });
}
