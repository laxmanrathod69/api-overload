import express from "express";
import {
  createTest,
  getTests,
  onGetTestResult,
} from "../controllers/testController";

const router = express.Router();

router.post("/create", createTest);
router.get("/completion/:jobId", onGetTestResult);
router.get("/results", getTests);

export default router;
