"use client";

import { useEffect } from "react";
import { io } from "socket.io-client";

export const useSocket = () => {
  useEffect(() => {
    const socket = io();

    socket.on("connect", () => {
      console.log("✅ Connected to server");
    });

    socket.on("progress", (data) => {
      console.log("📈 Progress update:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
};
