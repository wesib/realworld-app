import { HierarchyContext, Navigation, PageHashURLParam } from '@wesib/generic';
import {
  BootstrapWindow,
  Component,
  ComponentContext,
  DefaultNamespaceAliaser,
  ElementRenderer,
  Render,
  StateProperty,
} from '@wesib/wesib';
import { trackValue } from 'fun-events';
import { css__naming } from 'namespace-aliaser';
import { Conduit__NS } from '../../common';
import { ApiResponse } from '../../common/api';
import { ApiErrorGenerator } from '../../common/input';
import { UserProfile, UserService, UserSupport } from '../../common/users';
import { CurrentUserProfile, currentUserProfileBy, noUserProfile } from './current-user-profile';
import { UserInfoComponent } from './user-info.component';

@Component(
    ['profile', Conduit__NS],
    {
      feature: {
        needs: [
          UserInfoComponent,
          UserSupport,
        ],
      },
    },
)
export class ProfileComponent {

  private readonly _response = trackValue<ApiResponse<UserProfile>>();

  constructor(private readonly _context: ComponentContext) {

    const userService = _context.get(UserService);
    const navigation = _context.get(Navigation);
    const hierarchy = _context.get(HierarchyContext);
    const profile = currentUserProfileBy(
        this._response.read.keep.thru_(
            response => response && response.ok ? response.body : noUserProfile,
        ),
    );

    hierarchy.provide({ a: CurrentUserProfile, is: profile });
    _context.whenOn(supply => {
      navigation.read
          .thru_(
              page => page.get(PageHashURLParam).pathname.substring(1),
          )
          .tillOff(supply)
          .consume(username => {
            if (!username) {
              this._response.it = undefined;
              return;
            }
            return userService.userProfile(username)(response => this.response = response);
          });
    });
  }

  get response(): ApiResponse<UserProfile> | undefined {
    return this._response.it;
  }

  @StateProperty()
  set response(value: ApiResponse<UserProfile> | undefined) {
    this._response.it = value;
  }

  @Render()
  render(): ElementRenderer {

    const visibleClassName = css__naming.name(['visible', Conduit__NS], this._context.get(DefaultNamespaceAliaser));
    const genErrors = this._context.get(ApiErrorGenerator);
    const { element, contentRoot }: { element: Element; contentRoot: Node } = this._context;
    const { document } = this._context.get(BootstrapWindow);
    let loader: Element | undefined;

    return () => {

      const { response } = this;

      if (!response) {
        displayLoader();
      } else if (!response.ok) {
        displayErrors(response);
      } else {
        displayContents(response);
      }
    };

    function displayContents(_response: ApiResponse.Ok<UserProfile>): void {
      hideLoader();
      setContentsVisible(true);
    }

    function displayErrors({ errors }: ApiResponse.Failure): void {
      hideLoader();
      setContentsVisible(false);
      loader = genErrors(errors);
      if (loader) {
        contentRoot.appendChild(loader);
      }
    }

    function displayLoader(): void {
      setContentsVisible(false);
      if (!loader) {
        loader = contentRoot.appendChild(document.createElement('conduit-loader'));
      }
    }

    function hideLoader(): void {
      if (loader) {
        loader.remove();
        loader = undefined;
      }
    }

    function setContentsVisible(visible: boolean): void {
      if (visible) {
        element.classList.add(visibleClassName);
      } else {
        element.classList.remove(visibleClassName);
      }
    }
  }

}
