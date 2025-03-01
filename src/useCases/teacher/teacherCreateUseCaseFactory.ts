import { TeacherRepository } from '@/repositories/teacherRepository';
import { TeacherCreateUseCase } from './teacherCreateUseCase';

export function teacherCreateUseCaseFactory() {
  const teacherRepository = new TeacherRepository();
  const teacherCreateUseCase = new TeacherCreateUseCase(teacherRepository);
  return teacherCreateUseCase;
}
