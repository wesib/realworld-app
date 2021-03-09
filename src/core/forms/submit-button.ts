import { InRole, inSubmitButton } from '@frontmeans/input-aspects';
import { AfterEvent, mapAfter } from '@proc7ts/fun-events';
import { ShareLocator } from '@wesib/generic';
import { AdjacentField, Field, Form } from '@wesib/generic/forms';

export function submitButton<TSharer extends object>(
    element: AfterEvent<[HTMLElement?]>,
    adjacentTo?: ShareLocator.Mandatory<Form<unknown>>,
): Field<void, TSharer> {
  return AdjacentField.toForm(
      builder => element.do(
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
