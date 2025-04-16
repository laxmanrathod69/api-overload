import express from "express";
import router from "./routes";
import { useCors } from "./middlewares/coars";

const app = express();

app.use(express.json());
useCors();

// Routes
app.use("/api/test", router);

export default app;
