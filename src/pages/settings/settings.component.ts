import { inFormElement, inGroup, InStatus, InSubmit, InSubmitError } from '@frontmeans/input-aspects';
import { css__naming, QualifiedName } from '@frontmeans/namespace-aliaser';
import { supplyOn } from '@proc7ts/fun-events';
import { Field, Form, FormShare, OnSubmit, SharedField, SharedForm } from '@wesib/generic/forms';
import {
  Component,
  ComponentContext,
  DefaultNamespaceAliaser,
  ElementRenderer,
  Render,
  StateProperty,
} from '@wesib/wesib';
import { Conduit__NS } from '../../core';
import { apiSubmit } from '../../core/api';
import { AuthService, AuthUser, UpdateSettingsRequest } from '../../core/auth';
import { ConduitFormsSupport, submitButton } from '../../core/forms';
import { LoadStatus, RenderLoader } from '../../core/loader';
import { ChangePasswordComponent } from './change-password.component';
import { UserBioComponent } from './user-bio.component';
import { UserEmailComponent } from './user-email.component';
import { UserImageComponent } from './user-image.component';
import { UserNameComponent } from './user-name.component';

const updatedClassName: QualifiedName = ['updated', Conduit__NS];

@Component(
    ['settings', Conduit__NS],
    {
      feature: {
        needs: [
          ChangePasswordComponent,
          ConduitFormsSupport,
          UserBioComponent,
          UserEmailComponent,
          UserImageComponent,
          UserNameComponent,
        ],
      },
    },
)
export class SettingsComponent {

  private readonly _authService: AuthService;

  @StateProperty()
  updated = false;

  @RenderLoader({ comment: 'settings' })
  loadStatus?: LoadStatus;

  @SharedForm()
  form?: Form<UpdateSettingsRequest>;

  @SharedField({
    form: {
      share: FormShare,
      local: true,
    },
    name: '',
  })
  submitButton?: Field<void>;

  constructor(private readonly _context: ComponentContext) {
    this._authService = _context.get(AuthService);
    this._authService.loadUser().do(supplyOn(_context))(
        response => {
          this.loadStatus = response;
          if (response && response.ok) {
            this.setUser(response.body);
          }
        },
    );

    _context.whenSettled(({ element }: { element: Element }) => {
      this.form = Form.by(
          opts => inGroup(
              {
                email: '',
                username: '',
              },
              opts,
          ),
          opts => inFormElement(element.querySelector('form')!, opts),
      );
      this.submitButton = submitButton(element.querySelector('button')!);
    });
  }

  @OnSubmit()
  submit({ control }: Form.Controls<UpdateSettingsRequest>): void {
    this.updated = false;
    control.aspect(InStatus).markEdited();
    control.aspect(InSubmit)
        .submit(request => apiSubmit(this._authService.updateSettings(request)))
        .then(user => {
          this.setUser(user);
          this.updated = true;
        })
        .catch(e => {
          if (e instanceof InSubmitError) {
            console.error('Failed to update user settings', ...e.errors);
          } else {
            console.error('Failed to update user settings', e);
          }
        });
  }

  @Render()
  render(): ElementRenderer {

    const { element }: { element: Element } = this._context;
    const updatedClass = css__naming.name(updatedClassName, this._context.get(DefaultNamespaceAliaser));

    return () => {
      if (this.updated) {
        element.classList.add(updatedClass);
      } else {
        element.classList.remove(updatedClass);
      }
    };
  }

  private setUser(
      {
        username,
        email,
        bio,
        image,
      }: AuthUser,
  ): void {

    const control = this?.form?.control;

    if (control) {
      control.it = {
        username,
        email,
        bio,
        image,
      };
    }
  }

}
