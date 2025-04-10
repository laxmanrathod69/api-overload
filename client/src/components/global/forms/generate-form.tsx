import { ErrorMessage } from "@hookform/error-message";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const renderField = (items: FieldItems, register: RegisterFn) => {
  const { id, name, type, placeholder } = items;

  switch (type) {
    case "textarea":
      return (
        <Textarea
          id={id}
          placeholder={placeholder}
          rows={4}
          className="bg-neutral-800 hover:brightness-125 border-neutral-700 text-gray-200 focus:outline-none focus-visible:ring-0 p-2 rounded-md"
          {...register(name)}
        />
      );
    case "select":
      return (
        <Select onValueChange={(value) => console.log(value)}>
          <SelectTrigger className="bg-neutral-800 hover:brightness-125 border-neutral-700 text-gray-200 focus:outline-none focus-visible:ring-0">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="bg-neutral-800 hover:brightness-125 border-neutral-700 text-gray-200 focus:outline-none focus-visible:ring-0">
            <SelectItem value="get">GET</SelectItem>
            <SelectItem value="post">POST</SelectItem>
            <SelectItem value="put">PUT</SelectItem>
            <SelectItem value="delete">DELETE</SelectItem>
          </SelectContent>
        </Select>
      );
    default:
      return (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className="bg-neutral-800 hover:brightness-125 border-neutral-700 text-gray-200 focus:outline-none focus-visible:ring-0"
          {...register(name)}
        />
      );
  }
};

export const GenerateForm = React.memo(({ items, form }: GenerateFormProps) => {
  const { label, name } = items;
  const { register, errors } = form;

  return (
    <Label
      className="flex flex-col gap-2 text-white text-sm font-medium"
      htmlFor={`input-${label}`}
    >
      {label && label}
      {renderField(items, register)}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="text-red-400 text-[.65rem] relative left-1">
            {message === "Required" ? "" : message}
          </p>
        )}
      />
    </Label>
  );
});
