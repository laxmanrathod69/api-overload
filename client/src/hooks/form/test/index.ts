import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TestFormValues, useTestFormSchema } from "./schema";

const onSubmit = async (data: TestFormValues) => {
  const transformedData = {
    ...data,
    headers: JSON.stringify(JSON.parse(data.headers)),
  };
  console.log(`data: ${JSON.stringify(transformedData, null, 2)}`);
};

export const useTestForm = () => {
  const form = useForm<TestFormValues>({
    resolver: zodResolver(useTestFormSchema()),
    defaultValues: {
      apiUrl: "",
      methods: "GET",
      headers: JSON.stringify({ "Content-Type": "application/json" }, null, 2),
      concurrency: "",
    },
  });

  const { handleSubmit } = form;

  return {
    form,
    handleSubmit,
    onSubmit,
  };
};
