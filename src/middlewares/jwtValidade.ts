import { UnauthorizedError } from '@/errors/unauthorizedError';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function jwtValidade(req: FastifyRequest, res: FastifyReply) {
  try {
    const route = `${req.method}${req.routeOptions.url}`;
    const freeRouteList = ['POST/user', 'POST/signin'];

    if (freeRouteList.includes(route)) return;

    await req.jwtVerify();
  } catch (error) {
    console.error(error);
    throw new UnauthorizedError();
  }
}
