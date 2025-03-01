import { IUserRepository } from '@/repositories/IuserRepository';

export class UserDeleteUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  handler(id: number) {
    return this.userRepository.delete(id);
  }
}
