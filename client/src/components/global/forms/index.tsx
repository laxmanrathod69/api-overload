import { useMemo } from "react";
import { TestAPIForm } from "./test-api";
// import { AuthForm } from "./auth-form";

export const FormContainer = ({ type, className }: FormProps) => {
  const formComponent = useMemo(() => {
    switch (type) {
      case "TEST_API":
        return <TestAPIForm />;
      // case "AUTH":
      //   return <AuthForm />;
      default:
        return null;
    }
  }, [type]);

  return <div className={className}>{formComponent}</div>;
};
