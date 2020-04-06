import { EventEmitter, OnEvent } from '@proc7ts/fun-events';
import { bootstrapComponents, BootstrapContext, Feature } from '@wesib/wesib';
import { ApiFetch, ApiRequest, ApiResponse } from '../api';
import { AuthService } from './auth-service';
import { AuthSupport } from './auth-support.feature';
import { AuthToken, notAuthenticated, NotAuthenticated } from './authentication';

describe('AuthService', () => {

  let apiResponse: EventEmitter<[ApiResponse<any>]>;
  let mockApiFetch: jest.Mock<OnEvent<[ApiResponse<any>]>, [ApiRequest<any>]>;
  let authService: AuthService;

  beforeEach(() => {
    mockApiFetch = jest.fn(_request => apiResponse.on());
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
      expect(actualToken?.token).toBe(expectedToken);
    });
  });

  function setToken(token: string = (Math.random() * 0x10000000).toString(31)): string {
    localStorage.setItem('wesib-conduit:auth', token);
    return token;
  }

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

});
