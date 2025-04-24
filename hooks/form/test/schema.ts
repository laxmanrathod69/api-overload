import { z } from "zod";

const testFormSchema = z.object({
  apiUrl: z.string().url("Invalid URL"),

  methods: z.enum(["GET", "POST", "PUT", "DELETE"]),
  headers: z.string().optional(),
  concurrency: z.coerce.number().min(1).max(1000),
});

export const useTestFormSchema = () => testFormSchema;

export type TestFormValues = z.infer<typeof testFormSchema>;
