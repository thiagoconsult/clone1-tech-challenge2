import { Teacher } from '@/entities/teacher';
import { ITeacherRepository } from '@/repositories/ITeacherRepository';

export class TeacherCreateUseCase {
  constructor(private readonly teacherRepository: ITeacherRepository) {}

  handler(teacher: Teacher) {
    return this.teacherRepository.create(teacher);
  }
}
