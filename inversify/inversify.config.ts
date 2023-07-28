import { Container } from 'inversify';
import 'reflect-metadata';
import { TYPES } from './types';
import { AuthService } from '@/services/auth_service';
import { AuthRepository } from '@/repositories/auth_repository';
import { NextAuthService } from '@/services/nextauth_service';
import { NextAuthRepository } from '@/repositories/nextauth_repository';

export const authContainer = new Container();
authContainer.bind(TYPES.AuthService).to(AuthService);
authContainer.bind(TYPES.AuthRepository).to(AuthRepository);

export const nextAuthContainer = new Container();
nextAuthContainer.bind(TYPES.NextAuthService).to(NextAuthService);
nextAuthContainer.bind(TYPES.NextAuthRepository).to(NextAuthRepository);

