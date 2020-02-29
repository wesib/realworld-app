import { HierarchyContext } from '@wesib/generic';
import { InputToForm, NoInputToForm, OnSubmit } from '@wesib/generic/input';
import {
  Component,
  ComponentContext,
  DefaultNamespaceAliaser,
  ElementRenderer,
  Render,
  StateProperty,
} from '@wesib/wesib';
import { AfterEvent } from 'fun-events';
import { InStatus, InSubmit, InSubmitError } from 'input-aspects';
import { css__naming, QualifiedName } from 'namespace-aliaser';
import { Conduit__NS } from '../../core';
import { apiSubmit } from '../../core/api';
import { AuthService, AuthUser, UpdateSettingsRequest } from '../../core/auth';
import { ConduitInputSupport, FillConduitForm } from '../../core/input';
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
          ConduitInputSupport,
          UserBioComponent,
          UserEmailComponent,
          UserImageComponent,
          UserNameComponent,
        ],
      },
    },
    FillConduitForm<UpdateSettingsRequest>({
      emptyModel: {
        email: '',
        username: '',
      },
    }),
)
export class SettingsComponent {

  private readonly _authService: AuthService;

  @StateProperty()
  updated = false;

  @RenderLoader({ comment: 'settings' })
  loadStatus?: LoadStatus;

  constructor(private readonly _context: ComponentContext) {
    this._authService = _context.get(AuthService);

    this._context.whenOn(supply => {
      this._authService.loadUser().tillOff(supply)(
          response => {
            this.loadStatus = response;
            if (response && response.ok) {
              this.setUser(response.body);
            }
          },
      );
    });
  }

  @OnSubmit()
  submit({ control }: InputToForm<UpdateSettingsRequest>): void {
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

    const hierarchy = this._context.get(HierarchyContext);
    const form: AfterEvent<[InputToForm<UpdateSettingsRequest> | NoInputToForm]> = hierarchy.get(InputToForm);

    form.once(f => {
      if (f.control) {
        f.control.it = {
          username,
          email,
          bio,
          image,
        };
      }
    });
  }

}
