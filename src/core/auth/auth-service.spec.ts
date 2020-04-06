import { noop } from '@proc7ts/call-thru';
import { EventEmitter, OnEvent } from '@proc7ts/fun-events';
import { bootstrapComponents, BootstrapContext, Feature } from '@wesib/wesib';
import { ApiFetch, ApiRequest, ApiResponse } from '../api';
import { AuthService } from './auth-service';
import { AuthSupport } from './auth-support.feature';
import { AuthToken, AuthUser, notAuthenticated, NotAuthenticated } from './authentication';

describe('AuthService', () => {

  let apiResponse: EventEmitter<[ApiResponse<any>]>;
  let mockApiFetch: jest.Mock<OnEvent<[ApiResponse<any>]>, [ApiRequest<any>]>;
  let authService: AuthService;

  beforeEach(() => {
    apiResponse = new EventEmitter();
    mockApiFetch = jest.fn(_request => apiResponse.on());
  });
  afterEach(() => {
    localStorage.removeItem('wesib-conduit:auth');
  });

  describe('token', () => {
    it('is absent by default', async () => {
      await bootstrap();

      let actualToken: AuthToken | NotAuthenticated | undefined;

      authService.token().once(token => actualToken = token);
      expect(actualToken).toBe(notAuthenticated);
    });
    it('is obtained from local storage', async () => {

      const expectedToken = setToken();

      await bootstrap();

      let actualToken: AuthToken | NotAuthenticated | undefined;

      authService.token().once(token => actualToken = token);
      expect(actualToken).toEqual({ token: expectedToken });
    });
    it('is updated on local storage update', async () => {
      await bootstrap();

      let actualToken: AuthToken | NotAuthenticated | undefined;

      authService.token(token => actualToken = token);

      const newToken = updateToken();

      expect(actualToken).toEqual({ token: newToken });
    });
  });

  describe('user', () => {
    it('is absent by default', async () => {
      await bootstrap();

      let actualUser: AuthUser | NotAuthenticated | undefined;

      authService.user().once(user => actualUser = user);
      expect(actualUser).toBe(notAuthenticated);
    });
    it('is requested by token', async () => {

      const token = setToken();

      await bootstrap();

      let actualUser: AuthUser | NotAuthenticated | undefined;

      authService.user(user => actualUser = user);

      expect(mockApiFetch).toHaveBeenCalledWith(expect.objectContaining({
        path: 'user',
        init: expect.objectContaining({
          method: 'GET',
        }),
        auth: true,
      }));

      const expectedUser = respondWithUser();

      expect(actualUser).toEqual({ ...expectedUser, token });
    });
    it('is requested only once per token', async () => {
      setToken();

      await bootstrap();

      authService.user(noop);

      respondWithUser();
      authService.user().once(noop);
      authService.user().once(noop);

      expect(mockApiFetch).toHaveBeenCalledTimes(1);
    });
    it('is requested again on token update', async () => {
      setToken();

      await bootstrap();

      let actualUser: AuthUser | NotAuthenticated | undefined;

      authService.user(user => actualUser = user);

      const newToken = updateToken();
      const expectedUser = respondWithUser();

      expect(mockApiFetch).toHaveBeenCalledTimes(2);
      expect(actualUser).toEqual({ ...expectedUser, token: newToken });
    });
  });

  async function bootstrap(): Promise<BootstrapContext> {
    @Feature({
      needs: AuthSupport,
      setup(setup) {
        setup.provide({ a: ApiFetch, is: mockApiFetch });
      },
    })
    class TestFeature {
    }

    const bsContext = await bootstrapComponents(TestFeature).whenReady();

    authService = bsContext.get(AuthService);

    return bsContext;
  }

  function setToken(token: string = randomToken()): string {
    localStorage.setItem('wesib-conduit:auth', token);
    return token;
  }

  function updateToken(token = randomToken()): string {

    const newToken = setToken(token);

    window.dispatchEvent(new StorageEvent(
        'storage',
        {
          storageArea: localStorage,
          key: 'wesib-conduit:auth',
          newValue: newToken,
        },
    ));

    return newToken;
  }

  function randomToken(): string {
    return (Math.random() * 0x10000000).toString(31);
  }

  function respondWithUser(user: AuthUser = randomUser()): AuthUser {

    const response: ApiResponse.Ok<AuthUser> = {
      ok: true,
      body: user,
      response: 'response' as any,
    };

    apiResponse.send(response);

    return user;
  }

  function randomUser(): AuthUser {

    const token = randomToken();

    return {
      email: `user${token}@localhost`,
      token,
      username: `User ${token}`,
      bio: `User ${token} bio`,
      image: `http://localhost/test/user-${token}.png`,
    };
  }
});
