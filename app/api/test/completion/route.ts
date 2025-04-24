import prisma from "@/config/db";
import { errorMessage } from "@/lib/utils/errorMessage";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const jobId = searchParams.get("jobId");

    if (!jobId) {
      return NextResponse.json({ status: 400, message: "Job ID is required" });
    }

    const job = await prisma.test.findUnique({
      where: { jobId },
    });

    if (!job) {
      return NextResponse.json({
        status: 404,
        message: "Test result not found for the provided Job ID",
      });
    }

    return NextResponse.json({
      status: 200,
      data: job,
      message: "Test result fetched successfully",
    });
  } catch (error: unknown) {
    console.error("Error fetching test result:", error);
    return NextResponse.json({
      status: 500,
      message: errorMessage(error),
    });
  }
};
