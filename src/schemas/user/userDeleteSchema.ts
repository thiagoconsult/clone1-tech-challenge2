import z from 'zod';

export const userDeleteSchema = {
  description: 'Delete user',
  summary: 'Delete user',
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
      .describe('User removed successfully'),
    401: z.object({
      mesage: z.string(),
    }),
    404: z
      .object({
        mesage: z.string(),
      })
      .describe('Resource Not Found'),
  },
};
