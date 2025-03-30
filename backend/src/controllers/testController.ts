import { Request, Response } from "express";
import { addToQueue } from "../services/loadTestService";
import prisma from "../config/db";

export const createTest = async (req: Request, res: Response) => {
  try {
    const { apiUrl, method, headers, concurrency } = req.body;

    // Add the load test to the job queue
    const job = await addToQueue(apiUrl, method, headers, concurrency);

    // Send response with job details
    res.status(201).json({
      message: "Test started successfully!",
      jobId: job.id,
    });
  } catch (error: any) {
    console.error(JSON.stringify(error));
    res.status(500).json({ message: error.message });
  }
};

export const getTests = async (req: Request, res: Response) => {
  try {
    // Get all tests from the database
    const tests = await prisma.test.findMany();
    res.status(200).json(tests);
  } catch (error: any) {
    console.error(JSON.stringify(error));
    res.status(500).json({ message: error.message });
  }
};
