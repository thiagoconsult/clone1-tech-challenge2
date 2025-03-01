import { ResourceNotFound } from '@/errors/resourceNotFound';
import { userSearchSchema } from '@/schemas/user/userSearchSchema';
import { userSearchUseCaseFactory } from '@/useCases/user/UserSearchUseCaseFactory';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function UserSearchController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { term } = userSearchSchema.querystring.parse(req.query);

  const userSearchUseCase = userSearchUseCaseFactory();

  const user = await userSearchUseCase.handler(term);

  if (!user) {
    throw new ResourceNotFound();
  }

  return res.send({ id: user.id, username: user.username });
}
