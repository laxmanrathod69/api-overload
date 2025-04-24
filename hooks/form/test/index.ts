"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateTest } from "@/hooks/test-api";
import { TestFormValues, useTestFormSchema } from "./schema";

export const useTestForm = () => {
  const form = useForm<TestFormValues>({
    resolver: zodResolver(useTestFormSchema()),
    defaultValues: {
      apiUrl: "",
      methods: "GET",
      headers: "",
      concurrency: 1,
    },
  });

  const { mutate, isPending } = useCreateTest();

  // TODO: Check it later
  const onSubmit = async (payload: TestFormValues) => {
    if (!isPending) {
      mutate({
        apiUrl: payload.apiUrl,
        method: payload.methods,
        concurrency: payload.concurrency,
        headers: payload.headers,
      });
    }
  };

  const { handleSubmit } = form;

  return {
    form,
    handleSubmit,
    onSubmit,
  };
};
