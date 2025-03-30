import express from "express";
import { createTest, getTests } from "../controllers/testController";

const router = express.Router();

router.post("/create", createTest);

router.get("/", getTests);

export default router;
