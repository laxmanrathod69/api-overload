import { Worker } from "bullmq";
import prisma from "../config/db";
import axios from "axios";
import { loadTestQueue } from "../config/bullmq";
import { redis } from "../config/redis";
import { v4 } from "uuid";
import { getIO } from "@/lib/sockets";

const ioEmit = async (event: string, data: any) => {
  try {
    const io = getIO();
    io.emit(event, data);
  } catch (err) {
    console.warn("Socket not ready yet, skipping emit");
  }
};

// Load Test Worker (this is where the test logic runs)
export const loadTestWorker = new Worker(
  "loadTestQueue",
  async (job) => {
    const { apiUrl, method, headers, concurrency } = job.data;

    // Create a new test record in the database
    const test = await prisma.test.create({
      data: {
        apiUrl,
        method,
        headers,
        concurrency,
        jobId: job.id!,
        status: "In Progress",
      },
    });

    let totalResponseTime = 0;
    let successCount = 0;
    let failureCount = 0;
    let successResponseTime = 0;
    let failureResponseTime = 0;

    // Simulating concurrent API requests
    const requests = Array.from({ length: concurrency }, async () => {
      const startTime = Date.now();

      try {
        await axios({
          url: apiUrl,
          method,
          headers,
        });

        const elapsedTime = Date.now() - startTime;

        successCount++;
        successResponseTime += elapsedTime;
        totalResponseTime += elapsedTime;
      } catch (error: any) {
        const elapsedTime = Date.now() - startTime;

        failureCount++;
        failureResponseTime += elapsedTime;
        totalResponseTime += elapsedTime;

        // WIP: Add Retry Logic
        console.error(`Request failed for ${apiUrl}:`, error.message);
      } finally {
        ioEmit("loadTestProgress", {
          jobId: job.id,
          successCount,
          failureCount,
        });
      }
    });

    await Promise.all(requests);

    // Calculate average response times for successes and failures separately
    const responseTime = totalResponseTime / concurrency;
    const successRate = (successCount / concurrency) * 100;
    const failureRate = (failureCount / concurrency) * 100;

    // Update test with results
    const endTime = new Date();
    await prisma.test.update({
      where: { id: test.id },
      data: {
        status: "Completed",
        endTime,
        responseTime,
        successRate,
        failureRate,
      },
    });

    ioEmit("loadTestComplete", { jobId: job.id, successCount, failureCount });
    return { successCount, failureCount };
  },
  { connection: redis }
);

export const addToQueue = async (
  apiUrl: string,
  method: string,
  headers: any,
  concurrency: number
) => {
  const jobId = v4();
  const job = await loadTestQueue.add(
    "loadTest",
    {
      apiUrl,
      method,
      headers,
      concurrency,
      jobId,
    },
    { jobId }
  );

  return job;
};
