import { API_FORM_ITEMS } from "@/constants";
import { GenerateForm } from "./generate-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useTestForm } from "@/hooks/form/test";

export const TestAPIForm = () => {
  const { form, handleSubmit, onSubmit } = useTestForm();

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        {API_FORM_ITEMS.map((item) => (
          <GenerateForm key={item.id} items={item} form={form} />
        ))}
        <Button type="submit" variant="secondary" className="font-medium">
          Submit
        </Button>
      </form>
    </Form>
  );
};
