import type { Metadata } from "next";
import { Orbitron, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/provider/react-query";
import { Toaster } from "sonner";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains", // TODO: Check if this is correct
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "API Overload — Because APIs need stress too!",
  description: "API Overload is a stress testing tool for APIs, built with Next.js and TypeScript.",
};

const RootLayout = ({ children }: RootProps) => {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${inter.variable} ${jetbrains.variable} antialiased`} // TODO: add dark mode
      >
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
