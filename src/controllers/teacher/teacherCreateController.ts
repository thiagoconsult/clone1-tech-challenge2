import { teacherCreateSchema } from '@/schemas/teacher/teacherCreateSchema';
import { teacherCreateUseCaseFactory } from '@/useCases/teacher/teacherCreateUseCaseFactory';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function teacherCreateController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { name, user_id } = teacherCreateSchema.body.parse(req.body);

  const teacherCreateUseCase = teacherCreateUseCaseFactory();

  await teacherCreateUseCase.handler({ name, user_id });

  return res.send();
}
