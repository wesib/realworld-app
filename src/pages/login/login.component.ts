import { ComponentNode, HandleNavLinks } from '@wesib/generic';
import { DefaultInAspects, inputFromControl } from '@wesib/generic/input';
import { Component, ComponentContext } from '@wesib/wesib';
import { afterAll, eventSupply } from 'fun-events';
import { DomEventDispatcher } from 'fun-events/dom';
import {
  InCssClasses,
  inCssInfo,
  InGroup,
  inGroup,
  InMode,
  InStyledElement,
  InSubmit, InSubmitError,
  InSupply,
  inText,
  InValidation,
} from 'input-aspects';
import { apiSubmit, AuthService, Conduit__NS, LoginRequest } from '../../common';
import { LoginEmailComponent } from './login-email.component';
import { LoginPasswordComponent } from './login-password.component';

@Component(
    ['login', Conduit__NS],
    HandleNavLinks(),
    {
      feature: {
        needs: [
          LoginEmailComponent,
          LoginPasswordComponent,
        ],
      },
    },
)
export class LoginComponent {

  constructor(context: ComponentContext) {

    const componentNode = context.get(ComponentNode);
    const authService = context.get(AuthService);

    context.whenOn(connectSupply => {

      afterAll({
        form: componentNode.select('form', { all: true, deep: true }).first,
        button: componentNode.select('button', { all: true, deep: true }).first,
        aspects: context.get(DefaultInAspects),
      }).consume(
          ({
            form: [form],
            button: [button],
            aspects: [aspects],
          }) => {
            if (!form) {
              return;
            }

            const formSupply = eventSupply();
            const group: InGroup<LoginRequest> = inGroup<LoginRequest>({
              email: '',
              password: '',
            })
                .setup(InSupply, s => s.needs(formSupply))
                .setup(
                    InMode,
                    (mode, group) => {
                      // Prevent submitting of invalid form
                      mode.derive(group.aspect(InValidation).read.keep.thru_(
                          result => result.ok || result.messages('submit').length === result.messages().length
                              ? 'on'
                              : '-on',
                      ));
                    },
                );

            const submit = group.aspect(InSubmit);

            group.convert(InStyledElement.to(form.element), aspects)
                .setup(InCssClasses, classes => classes.add(inCssInfo()));

            if (button) {
              inText(button.element)
                  .convert(aspects)
                  .setup(InMode, mode => {
                    mode.derive(group.aspect(InMode));
                    // Disable submit while submitting or not ready
                    mode.derive(submit.read.keep.thru_(
                        ({ ready, busy }) => !ready || busy ? 'off' : 'on',
                    ));
                  });
            }

            new DomEventDispatcher(form.element).on('submit').instead(() => {
              submit.submit(request => apiSubmit(authService.login(request)))
                  .catch(e => {
                    if (e instanceof InSubmitError) {
                      console.log('Failed to login', ...e.errors);
                    } else {
                      console.log('Failed to login', e);
                    }
                  });
            });

            inputFromControl(context, group);

            return formSupply;
          },
      ).needs(connectSupply);
    });
  }

}
