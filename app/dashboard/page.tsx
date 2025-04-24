"use client";

import { useSocket } from "@/hooks/sockets";

const DashboardPage = () => {
  const socket = useSocket();
  console.log(`Socket connected: ${socket}`);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard 📈</h1>
      <p>Socket.io connected to server 🚀</p>
    </div>
  );
};

export default DashboardPage;
