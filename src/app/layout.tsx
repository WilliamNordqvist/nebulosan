import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen w-screen bg-slate-100 overflow-scroll">
          {children}
        </main>
      </body>
    </html>
  );
}
