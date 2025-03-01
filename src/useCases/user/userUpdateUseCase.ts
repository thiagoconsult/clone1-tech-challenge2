import { IUserRepository } from '@/repositories/IuserRepository';

export class UserUpdateUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  handler(id: number, password: string) {
    return this.userRepository.updateOne(id, password);
  }
}
