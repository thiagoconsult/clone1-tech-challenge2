import { ResourceNotFound } from '@/errors/resourceNotFound';
import { userUpdateSchema } from '@/schemas/user/userUpdateSchema';
import { userUpdateUseCaseFactory } from '@/useCases/user/userUpdateUseCaseFactory';
import { hash } from 'bcryptjs';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function userUpdateController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { id } = userUpdateSchema.params.parse(req.params);
  const { password } = userUpdateSchema.body.parse(req.body);

  const userUpdateUseCase = userUpdateUseCaseFactory();

  const hashedPassword = await hash(password, 8);

  const result = await userUpdateUseCase.handler(id, hashedPassword);

  if (!result) {
    throw new ResourceNotFound();
  }

  return res.send();
}
