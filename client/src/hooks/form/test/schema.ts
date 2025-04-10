import { z } from "zod";

const testFormSchema = z.object({
  apiUrl: z.string().url("Invalid URL"),
  headers: z.string().refine(
    (value) => {
      try {
        JSON.parse(value);
        return true;
      } catch {
        return false;
      }
    },
    { message: "Headers must be a valid JSON string" }
  ),
  methods: z.enum(["GET", "POST", "PUT", "DELETE"]),
  concurrency: z
    .string()
    .min(1, "Concurrency must be at least 1")
    .max(100, "Concurrency cannot exceed 100"),
});

export const useTestFormSchema = () => testFormSchema;

export type TestFormValues = z.infer<typeof testFormSchema>;
