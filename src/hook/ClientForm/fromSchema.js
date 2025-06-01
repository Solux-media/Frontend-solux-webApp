import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  question1: z.string().min(10, "Answer must be at least 10 characters"),
  question2: z.string().min(10, "Answer must be at least 10 characters"),
});

export type FormValues = z.infer<typeof formSchema>;