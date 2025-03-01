import { IUserRepository } from '@/repositories/IuserRepository';

export class UserSearchUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  handler(term: string) {
    return this.userRepository.search(term);
  }
}
