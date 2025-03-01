import z from 'zod';

export const userSigninSchema = {
  description: 'User Signin',
  summary: 'User Signin',
  tags: ['user'],
  body: z.object({
    username: z.string(),
    password: z.string(),
  }),
  response: {
    201: z
      .object({
        token: z.string(),
      })
      .describe('Login successfully'),
    401: z
      .object({
        mesage: z.string(),
      })
      .describe('Incorrect credentials'),
  },
};
