import http from "http";
import { Server } from "socket.io";
import app from "../app";

export const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("Client connected 🔥");

  socket.on("disconnect", () => {
    console.log("Client disconnected ❌");
  });
});

export { io };
