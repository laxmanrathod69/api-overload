"use client";

import { useMutation, useQuery, keepPreviousData } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "sonner";
import { getCompletionTest, onCreateTest } from "../utils";

export const useCreateTest = () => {
  const router = useRouter();

  const { mutate, isPending, data } = useMutation({
    mutationFn: (payload: CreateApiTest) => onCreateTest(payload),
    onSuccess: ({ jobId, message, status }) => {
      console.log(`status: ${status} jobId: ${jobId}`); // TODO: remove later
      toast.success(message || "Test created successfully");

      if (jobId) {
        router.push(`/test-completion?jobId=${jobId as string}`);
      }
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
      console.error(JSON.stringify(error, null, 2));
    },
  });

  return { mutate, data, isPending };
};

// TODO: Add toast for error and success
export const useCompletionTest = (jobId: string) => {
  const queryKey = useMemo(() => ["completion", jobId], [jobId]);
  const queryFn = useCallback(() => getCompletionTest(jobId), [jobId]);

  return useQuery({
    queryKey,
    queryFn,
    enabled: !!jobId,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 3,
  });
};
