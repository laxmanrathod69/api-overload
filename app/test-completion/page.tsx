"use client";

import { useCompletionTest } from "@/hooks/test-api";
import { useSearchParams } from "next/navigation";

// WIP: complete this page
const TestCompletion = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId") || "";

  const { data } = useCompletionTest(jobId);
  console.log(`data: ${JSON.stringify(data)}`);

  return <div className="text-white">TestCompletion Page {data?.data?.jobId}</div>;
};

export default TestCompletion;
