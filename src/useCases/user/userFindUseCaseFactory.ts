import { UserRepository } from '@/repositories/userRepository';
import { UserFindUseCase } from './userFindUseCase';

export function userFindUseCaseFactory() {
  const userRepository = new UserRepository();
  const userFindUseCase = new UserFindUseCase(userRepository);
  return userFindUseCase;
}
