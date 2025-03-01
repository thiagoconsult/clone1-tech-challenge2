import { IUserRepository } from '@/repositories/IuserRepository';

export class UserFindOneUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  handler(id: number) {
    return this.userRepository.findOne(id);
  }
}
