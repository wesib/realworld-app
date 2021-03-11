import { InRole, inSubmitButton } from '@frontmeans/input-aspects';
import { AfterEvent, afterValue, mapAfter } from '@proc7ts/fun-events';
import { ShareLocator } from '@wesib/generic';
import { adjacentToForm, Field, Form } from '@wesib/generic/forms';

export function submitButton<TSharer extends object>(
    element: HTMLElement | AfterEvent<[HTMLElement?]>,
    adjacentTo?: ShareLocator.Mandatory<Form<unknown>>,
): Field<void, TSharer> {
  return adjacentToForm(
      builder => afterValue(element).do(
          mapAfter(button => button && {
            control: builder.control.build(
                opts => button
                    && inSubmitButton(
                        button,
                        {
                          ...opts,
                          form: builder.adjusted.control,
                        },
                    ).setup(InRole, role => role.add('submit-button')),
            ),
          }),
      ),
      adjacentTo,
  );
}
