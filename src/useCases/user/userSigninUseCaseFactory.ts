import { UserRepository } from '@/repositories/userRepository';
import { UserSigninUseCase } from './userSigninUseCase';

export function userSigninUseCaseFactory() {
  const userRepository = new UserRepository();
  const userSigninUseCase = new UserSigninUseCase(userRepository);
  return userSigninUseCase;
}
