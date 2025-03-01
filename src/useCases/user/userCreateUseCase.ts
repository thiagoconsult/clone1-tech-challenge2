import { User } from '@/entities/user';
import { IUserRepository } from '@/repositories/IuserRepository';

export class UserCreateUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  handler(user: User) {
    return this.userRepository.create(user);
  }
}
