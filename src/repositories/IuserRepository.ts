import { User } from '@/entities/user';

export interface IUserRepository {
  create(user: User): Promise<User | undefined>;
  find(page: number, limit: number): Promise<User[] | undefined>;
  findOne(id: number): Promise<User | undefined>;
  updateOne(id: number, password: string): Promise<User | undefined>;
  delete(id: number): Promise<User | undefined>;
  search(term: string): Promise<User | undefined>;
  signin(username: string): Promise<User | undefined>;
}
