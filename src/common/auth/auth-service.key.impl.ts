import { SingleContextKey } from 'context-values';
import { AuthService } from './auth-service';

export const AuthService__key = new SingleContextKey<AuthService>('auth-service');
