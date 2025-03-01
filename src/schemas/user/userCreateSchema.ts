import z from 'zod';

export const userCreateSchema = {
  description: 'Create a new user',
  summary: 'Create a new user',
  tags: ['user'],
  body: z.object({
    username: z.string(),
    password: z.string(),
  }),
  response: {
    201: z.null().describe('User created successfully'),
  },
};
