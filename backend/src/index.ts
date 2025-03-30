import dotenv from "dotenv";
import { server } from "./sockets";

dotenv.config();
const PORT = process.env.PORT || 5000;

// TODO: Add socket.io for client and that code is in the README.md

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
