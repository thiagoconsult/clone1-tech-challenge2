import z from 'zod';

export const userFindOneSchema = {
  description: 'User Find',
  summary: 'User Find',
  tags: ['user'],
  security: [{ bearerAuth: [] }],
  params: z.object({
    id: z.coerce.number(),
  }),
  response: {
    200: z
      .object({
        id: z.coerce.number(),
        username: z.string(),
      })
      .describe('User found successfully'),
    404: z
      .object({
        mesage: z.string(),
      })
      .describe('Resource Not Found'),
    401: z
      .object({
        mesage: z.string(),
      })
      .describe('Unauthorized'),
  },
};
