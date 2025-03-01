import { UserRepository } from '@/repositories/userRepository';
import { UserUpdateUseCase } from './userUpdateUseCase';

export function userUpdateUseCaseFactory() {
  const userRepository = new UserRepository();
  const userUpdateUseCase = new UserUpdateUseCase(userRepository);
  return userUpdateUseCase;
}
