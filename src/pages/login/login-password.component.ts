import { Component } from '@wesib/wesib';
import { InCssClasses, inCssInfo, inText, InValidation, requirePresent } from 'input-aspects';
import { addCssError, Conduit__NS, InputControl, InputName } from '../../common';

@Component(['login-password', Conduit__NS])
@InputControl({
  controlOf: ({
    node,
    aspects,
    supply,
  }) => inText(node.element)
      .convert(aspects)
      .setup(InValidation, validation => validation.by(requirePresent()))
      .setup(InCssClasses, classes => classes.add(inCssInfo()).needs(supply))
      .setup(control => addCssError(control, { mark: 'is-invalid' }).needs(supply)),
})
@InputName('password')
export class LoginPasswordComponent {
}
