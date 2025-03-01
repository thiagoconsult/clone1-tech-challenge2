import { userCreateController } from '@/controllers/user/userCreateController';
import { userDeleteController } from '@/controllers/user/userDeleteController';
import { userFindController } from '@/controllers/user/userFindController';
import { userFindOneController } from '@/controllers/user/userFindOneController';
import { UserSearchController } from '@/controllers/user/userSearchController';
import { userSigninController } from '@/controllers/user/userSigninController';
import { userUpdateController } from '@/controllers/user/userUpdateController';
import { jwtValidade } from '@/middlewares/jwtValidade';
import { userCreateSchema } from '@/schemas/user/userCreateSchema';
import { userDeleteSchema } from '@/schemas/user/userDeleteSchema';
import { userFindOneSchema } from '@/schemas/user/userFindOneSchema';
import { userFindSchema } from '@/schemas/user/userFindSchema';
import { userSearchSchema } from '@/schemas/user/userSearchSchema';
import { userSigninSchema } from '@/schemas/user/userSigninSchema';
import { userUpdateSchema } from '@/schemas/user/userUpdateSchema';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

export async function userRoutes(app: FastifyInstance) {
  app.after(() => {
    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'GET',
      url: '/user/search',
      schema: userSearchSchema,
      onRequest: jwtValidade,
      handler: UserSearchController,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'GET',
      url: '/user/:id',
      schema: userFindOneSchema,
      onRequest: jwtValidade,
      handler: userFindOneController,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'DELETE',
      url: '/user/:id',
      schema: userDeleteSchema,
      onRequest: jwtValidade,
      handler: userDeleteController,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'PUT',
      url: '/user/:id',
      schema: userUpdateSchema,
      onRequest: jwtValidade,
      handler: userUpdateController,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'GET',
      url: '/user',
      schema: userFindSchema,
      onRequest: jwtValidade,
      handler: userFindController,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'POST',
      url: '/user',
      schema: userCreateSchema,
      handler: userCreateController,
    });

    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'POST',
      url: '/signin',
      schema: userSigninSchema,
      handler: userSigninController,
    });
  });
}
