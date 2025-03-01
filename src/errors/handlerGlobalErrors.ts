import { env } from '@/config/envSchema';
import { FastifyReply, FastifyRequest } from 'fastify';
import { ZodError } from 'zod';
import { IncorrectCredentials } from './incorrectCredentials';
import { UnauthorizedError } from './unauthorizedError';
import { ResourceNotFound } from './resourceNotFound';
import { DatabaseError } from 'pg';

export function handlerGlobalErros(
  error: Error,
  req: FastifyRequest,
  res: FastifyReply,
) {
  if (env.ENV === 'development') {
    console.error(error);
  }

  if (error instanceof ZodError) {
    return res
      .status(400)
      .send({ error: `Validation error: ${error.format()}` });
  }

  if (error instanceof IncorrectCredentials) {
    return res.status(401).send({ mesage: error.message });
  }

  if (error instanceof UnauthorizedError) {
    return res.status(401).send({ mesage: error.message });
  }

  if (error instanceof ResourceNotFound) {
    return res.status(404).send({ mesage: error.message });
  }

  if (error instanceof DatabaseError) {
    return res.status(400).send({ mesage: error.message });
  }

  return res.status(500).send({ error: `${error}` });
}
