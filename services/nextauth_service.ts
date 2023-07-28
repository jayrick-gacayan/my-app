import { injectable } from 'inversify';
import {
  SignInOptions,
  SignInResponse,
  SignOutResponse,
  signIn,
  signOut
} from 'next-auth/react';

@injectable()
export class NextAuthService {
  async nextAuthSignin(body: SignInOptions | undefined):
    Promise<SignInResponse | undefined> {
    return await signIn('credentials', { redirect: false, ...body })
  }

  async nextAuthSignOut(callbackUrl?: string): Promise<SignOutResponse> {
    return await signOut({ redirect: false, callbackUrl: '/auth/sign_in' });
  }
}