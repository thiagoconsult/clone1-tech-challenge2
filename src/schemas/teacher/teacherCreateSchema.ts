import z from 'zod';

export const teacherCreateSchema = {
  description: 'Create a new teacher',
  summary: 'Create a new teacher',
  tags: ['teacher'],
  body: z.object({
    name: z.string(),
    user_id: z.coerce.number(),
  }),
  response: {
    201: z.object({
      mesage: z.string(),
    }),
  },
};
