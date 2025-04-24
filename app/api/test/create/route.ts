import { addToQueue } from "@/services/loadTestService";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { apiUrl, method, headers, concurrency } = await req.json();
    if (!apiUrl || !method || !concurrency) {
      return NextResponse.json({ status: 400, message: "Missing required fields" });
    }

    // Add the load test to the job queue
    const job = await addToQueue(apiUrl, method, headers || {}, concurrency);

    // Send response with job details
    return NextResponse.json({ jobId: job.id, status: 201, message: "Test started successfully!" });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
};
