import { Component } from '@wesib/wesib';
import { InCssClasses, inCssError, inCssInfo, inText, InValidation, requirePresent } from 'input-aspects';
import { Conduit__NS, InputControl, InputName } from '../../common';

@Component(['login-email', Conduit__NS])
@InputControl({
  controlOf: ({
    node,
    aspects,
    supply,
  }) => inText(node.element)
      .convert(aspects)
      .setup(InValidation, validation => validation.by(requirePresent()))
      .setup(InCssClasses, classes => {
        classes.add(inCssInfo()).needs(supply);
        classes.add(inCssError({ mark: 'is-invalid' })).needs(supply);
      }),
})
@InputName('email')
export class LoginEmailComponent {
}
