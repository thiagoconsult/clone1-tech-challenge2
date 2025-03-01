import { teacherCreateController } from '@/controllers/teacher/teacherCreateController';
import { teacherCreateSchema } from '@/schemas/teacher/teacherCreateSchema';
import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

export async function teacherRoutes(app: FastifyInstance) {
  app.after(() => {
    app.withTypeProvider<ZodTypeProvider>().route({
      method: 'POST',
      url: '/teacher',
      schema: teacherCreateSchema,
      handler: teacherCreateController,
    });
  });
}
