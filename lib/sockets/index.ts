import { Server as IOServer, Socket } from "socket.io";
import type { Server as HTTPServer } from "http";

let io: IOServer | null = null;

export const initSocketServer = (server: HTTPServer) => {
  if (!io) {
    console.log("🔌 Initializing Socket.io server...");
    io = new IOServer(server, {
      cors: { origin: "*" },
    });

    io.on("connection", (socket: Socket) => {
      console.log("🔥 Client connected");

      socket.on("disconnect", () => {
        console.log("❌ Client disconnected");
      });

      // You can add more custom socket events here
    });
  }

  return io;
};

export const getIO = () => {
  if (!io) throw new Error("Socket.io not initialized yet!");
  return io;
};
