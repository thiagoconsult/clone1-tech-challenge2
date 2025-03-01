import { Teacher } from '@/entities/teacher';
import { ITeacherRepository } from './ITeacherRepository';
import { db } from '@/config/database';

export class TeacherRepository implements ITeacherRepository {
  async create({ name, user_id }: Teacher): Promise<Teacher | undefined> {
    const result = await db.Instance?.query<Teacher>(
      `
        INSERT INTO teacher (name, user_id)
        VALUES ($1, $2)
        RETURNING *
        `,
      [name, user_id],
    );
    return result?.rows[0];
  }

  find(page: number, limit: number): Promise<Teacher[]> {
    throw new Error('Method not implemented.');
  }
}
