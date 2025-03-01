import { userSigninSchema } from '@/schemas/user/userSigninSchema';
import { userSigninUseCaseFactory } from '@/useCases/user/userSigninUseCaseFactory';
import { FastifyReply, FastifyRequest } from 'fastify';
import { compare } from 'bcryptjs';
import { IncorrectCredentials } from '@/errors/incorrectCredentials';

export async function userSigninController(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { username, password } = userSigninSchema.body.parse(req.body);

  const userSigninUseCase = userSigninUseCaseFactory();

  const user = await userSigninUseCase.handler(username);

  if (!user) {
    throw new IncorrectCredentials();
  }

  const passwordTruth = await compare(password, user.password);

  if (!passwordTruth) {
    throw new IncorrectCredentials();
  }

  const token = await res.jwtSign({ username });

  return res.send({ token: token });
}
