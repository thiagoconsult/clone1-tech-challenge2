import { UserRepository } from '@/repositories/userRepository';
import { UserFindOneUseCase } from './userFindOneUseCase';

export function userFindOneUseCaseFactory() {
  const userRepository = new UserRepository();
  const userFindOneUseCase = new UserFindOneUseCase(userRepository);
  return userFindOneUseCase;
}
