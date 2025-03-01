import z from 'zod';

export const userUpdateSchema = {
  description: 'Update user',
  summary: 'Update user',
  tags: ['user'],
  security: [{ bearerAuth: [] }],
  params: z.object({
    id: z.coerce.number(),
  }),
  body: z.object({
    password: z.string(),
  }),
  response: {
    200: z
      .object({
        mesage: z.string(),
      })
      .describe('User changed successfully'),
    401: z
      .object({
        mesage: z.string(),
      })
      .describe('Unauthorized'),
  },
  404: z
    .object({
      mesage: z.string(),
    })
    .describe('Resource Not Found'),
};
