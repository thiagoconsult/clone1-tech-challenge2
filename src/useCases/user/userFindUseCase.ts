import { IUserRepository } from '@/repositories/IuserRepository';

export class UserFindUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  handler(page: number, limit: number) {
    return this.userRepository.find(page, limit);
  }
}
