import { TYPES } from '@/inversify/types';
import { NextAuthService } from '@/services/nextauth_service';
import { Result } from '@/types/result';
import { inject, injectable } from 'inversify';
import { SignInOptions, SignInResponse, SignOutResponse } from 'next-auth/react';

@injectable()
export class NextAuthRepository {
  #nextAuthService: NextAuthService;

  constructor(@inject(TYPES.NextAuthService) nextAuthService: NextAuthService) {
    this.#nextAuthService = nextAuthService;
  }

  async nextAuthSignIn(body: SignInOptions | undefined): Promise<Result<SignInResponse>> {
    const result: SignInResponse | undefined = await this.#nextAuthService.nextAuthSignin(body);
    return new Result({
      response: result,
      data: result,
      statusCode: result?.status ?? 400
    })
  }

  async nextAuthSignOut(): Promise<Result<SignOutResponse>> {
    const result: SignOutResponse = await this.#nextAuthService.nextAuthSignOut();
    return new Result({
      response: result,
      data: result,
      statusCode: 200
    })
  }
}