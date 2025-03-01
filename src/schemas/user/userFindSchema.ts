import z from 'zod';

export const userFindSchema = {
  description: 'Users list',
  summary: 'Users list',
  tags: ['user'],
  security: [{ bearerAuth: [] }],
  querystring: z.object({
    page: z.coerce.number(),
    limit: z.coerce.number(),
  }),
  response: {
    200: z
      .object({
        id: z.coerce.number(),
        username: z.string(),
      })
      .array()
      .describe('Users list'),
    401: z
      .object({
        mesage: z.string(),
      })
      .describe('Unauthorized'),
  },
};
