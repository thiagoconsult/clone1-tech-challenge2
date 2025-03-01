import { ResourceNotFound } from '@/errors/resourceNotFound';
import { userDeleteSchema } from '@/schemas/user/userDeleteSchema';
import { userDeleteUseCaseFactory } from '@/useCases/user/UserDeleteUseCaseFactory';
import { FastifyReply, FastifyRequest } from 'fastify';

export const userDeleteController = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const { id } = userDeleteSchema.params.parse(req.params);

  const userDeleteUseCase = userDeleteUseCaseFactory();

  const result = await userDeleteUseCase.handler(id);

  if (!result) {
    throw new ResourceNotFound();
  }

  return res.send();
};
