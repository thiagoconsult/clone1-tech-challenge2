import { userCreateSchema } from '@/schemas/user/userCreateSchema';
import { userCreateUseCaseFactory } from '@/useCases/user/userCreateUseCaseFactory';
import { hash } from 'bcryptjs';

import { FastifyReply, FastifyRequest } from 'fastify';

export async function userCreateController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { username, password } = userCreateSchema.body.parse(req.body);

  const userCreateUseCase = userCreateUseCaseFactory();

  const hashedPassword = await hash(password, 8);

  const user = { username, password: hashedPassword };

  await userCreateUseCase.handler(user);

  return res.status(201).send();
}
