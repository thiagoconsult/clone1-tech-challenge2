import { User } from '@/entities/user';
import { IUserRepository } from './IuserRepository';
import { db } from '@/config/database';

export class UserRepository implements IUserRepository {
  async search(term: string): Promise<User | undefined> {
    const result = await db.Instance?.query<User>(
      `
      SELECT * FROM "user"
      WHERE username ILIKE $1
      `,
      [`%${term}%`],
    );
    return result?.rows[0];
  }

  async updateOne(id: number, password: string): Promise<User | undefined> {
    const result = await db.Instance?.query<User>(
      `
      UPDATE "user"
      SET password = COALESCE($2, password)
      WHERE "user".id = $1
      RETURNING *
      `,
      [id, password],
    );
    return result?.rows[0];
  }

  async findOne(id: number): Promise<User | undefined> {
    const result = await db.Instance?.query<User>(
      `
    SELECT * FROM "user"
    WHERE "user".id = $1
    `,
      [id],
    );
    return result?.rows[0];
  }

  async delete(id: number): Promise<User | undefined> {
    const result = await db.Instance?.query<User>(
      `
      DELETE FROM "user"
      WHERE "user".id = $1
      RETURNING *
      `,
      [id],
    );
    return result?.rows[0];
  }

  async signin(username: string): Promise<User | undefined> {
    const result = await db.Instance?.query<User>(
      `
      SELECT * FROM "user"
      WHERE "user".username = $1
      `,
      [username],
    );
    return result?.rows[0];
  }

  async create({ username, password }: User): Promise<User | undefined> {
    const result = await db.Instance?.query<User>(
      `
        INSERT INTO "user" (username, password) 
        VALUES($1, $2) 
        RETURNING *
        `,
      [username, password],
    );
    return result?.rows[0];
  }

  async find(page: number, limit: number): Promise<User[] | undefined> {
    const offset = (page - 1) * limit;

    const result = await db.Instance?.query<User>(
      `
      SELECT * FROM "user"
      LIMIT $1 OFFSET $2
      `,
      [limit, offset],
    );
    return result?.rows;
  }
}
