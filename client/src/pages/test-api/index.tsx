import { FormContainer } from "@/components/global/forms";

const TestAPI = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full h-screen">
      <div className="w-[27rem] flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white">Test API</h1>
        <p className="text-white font-medium text-base">
          Enter the details to test an API endpoint.
        </p>
      </div>
      <FormContainer
        type={"TEST_API"}
        className="w-[27rem] flex items-center justify-center"
      />
    </div>
  );
};

export default TestAPI;
