import { UserRepository } from '@/repositories/userRepository';
import { UserDeleteUseCase } from './userDeleteUseCase';

export function userDeleteUseCaseFactory() {
  const userRepository = new UserRepository();
  const userDeleteUseCase = new UserDeleteUseCase(userRepository);
  return userDeleteUseCase;
}
