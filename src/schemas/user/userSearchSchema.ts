import z from 'zod';

export const userSearchSchema = {
  description: 'Search User',
  summary: 'Search User',
  tags: ['user'],
  security: [{ bearerAuth: [] }],
  querystring: z.object({
    term: z.string(),
  }),
  200: z.object({
    mesage: z.string(),
  }),
  404: z.object({
    mesage: z.string(),
  }),
  401: z.object({
    mesage: z.string(),
  }),
};
