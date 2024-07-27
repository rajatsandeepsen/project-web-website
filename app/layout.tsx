import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import { cn } from "@/lib/utils";

const calSans = localFont({
  src: "./calsans.ttf"
})

export const metadata: Metadata = {
  title: "Project-Web",
  description: "A browser made for developers, by developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(calSans.className, "overflow-x-clip w-[100vw] scroll-smooth")}>{children}</body>
    </html>
  );
}

