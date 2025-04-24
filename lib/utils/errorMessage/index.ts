export const errorMessage = (error: unknown): string => {
  const errorMessage =
    error instanceof Error ? error.message : "Internal server error. Please try again later.";
  return errorMessage;
};
