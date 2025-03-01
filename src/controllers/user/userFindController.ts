import { userFindSchema } from '@/schemas/user/userFindSchema';
import { userFindUseCaseFactory } from '@/useCases/user/userFindUseCaseFactory';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function userFindController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { page, limit } = userFindSchema.querystring.parse(req.query);

  console.log(page, limit);

  const userFindUseCase = userFindUseCaseFactory();
  const users = await userFindUseCase.handler(page, limit);

  return res.send(users);
}
