import { Teacher } from '@/entities/teacher';

export interface ITeacherRepository {
  create(teacher: Teacher): Promise<Teacher | undefined>;
  find(page: number, limit: number): Promise<Teacher[]>;
}
