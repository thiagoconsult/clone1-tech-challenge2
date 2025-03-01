import { ResourceNotFound } from '@/errors/resourceNotFound';
import { userFindOneSchema } from '@/schemas/user/userFindOneSchema';
import { userFindOneUseCaseFactory } from '@/useCases/user/userFindOneUseCaseFactory';
import { FastifyReply, FastifyRequest } from 'fastify';

export const userFindOneController = async (
  req: FastifyRequest,
  res: FastifyReply,
) => {
  const { id } = userFindOneSchema.params.parse(req.params);

  const userFindOneUseCase = userFindOneUseCaseFactory();

  const user = await userFindOneUseCase.handler(id);

  if (!user) {
    throw new ResourceNotFound();
  }

  return res.send({ id: user.id, username: user.username });
};
