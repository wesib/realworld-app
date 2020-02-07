import { ComponentNode, HandleNavLinks } from '@wesib/generic';
import { DefaultInAspects, inputFromControl } from '@wesib/generic/input';
import { Component, ComponentContext } from '@wesib/wesib';
import { afterAll, eventSupply, eventSupplyOf } from 'fun-events';
import { DomEventDispatcher } from 'fun-events/dom';
import {
  InCssClasses,
  inCssInfo,
  InGroup,
  inGroup,
  InMode,
  inModeByForm,
  inModeByValidity,
  InSubmit,
  InSubmitError,
  inText,
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
                .setup(control => eventSupplyOf(control).needs(formSupply))
                .setup(InCssClasses, classes => classes.add(inCssInfo()))
                .setup(InMode, mode => mode.derive(inModeByValidity()));

            inText(form.element)
                .setup(control => eventSupplyOf(control).needs(group))
                .convert(aspects)
                .setup(InCssClasses, classes => classes.add(group.aspect(InCssClasses)))
                .setup(InMode, mode => mode.derive(inModeByForm(group)));

            if (button) {
              inText(button.element)
                  .setup(control => eventSupplyOf(control).needs(group))
                  .convert(aspects)
                  .setup(InMode, mode => mode.derive(inModeByForm(group, { busy: 'off', invalid: 'off' })));
            }

            const submitDispatcher = new DomEventDispatcher(form.element);

            eventSupplyOf(submitDispatcher).needs(group);
            submitDispatcher.on('submit').instead(() => {
              group.aspect(InSubmit)
                  .submit(request => apiSubmit(authService.login(request)))
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
