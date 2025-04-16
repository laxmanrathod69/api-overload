import app from "../app";
import cors from "cors";

export const useCors = () =>
  app.use(
    cors({
      origin: process.env.CLIENT_API_BASE_URL!,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
