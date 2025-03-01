import { IUserRepository } from '@/repositories/IuserRepository';

export class UserSigninUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  handler(username: string) {
    return this.userRepository.signin(username);
  }
}
