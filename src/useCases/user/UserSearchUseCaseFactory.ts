import { UserRepository } from '@/repositories/userRepository';
import { UserSearchUseCase } from './userSearchUseCase';

export function userSearchUseCaseFactory() {
  const userRepository = new UserRepository();
  const userSearchUseCase = new UserSearchUseCase(userRepository);
  return userSearchUseCase;
}
