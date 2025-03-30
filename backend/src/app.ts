import express from "express";
import router from "./routes";

const app = express();

app.use(express.json());

// Routes
app.use("/api/test", router);

export default app;
