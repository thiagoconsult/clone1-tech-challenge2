import { UserRepository } from '@/repositories/userRepository';
import { UserCreateUseCase } from './userCreateUseCase';

export function userCreateUseCaseFactory() {
  const userRepository = new UserRepository();
  const userCreateUseCase = new UserCreateUseCase(userRepository);
  return userCreateUseCase;
}
