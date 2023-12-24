import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "./Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Net VR E-Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overscroll-none",
          fontSans.variable
        )}
      >
        <Navbar />
        <Toaster />
        <main className="text-white bg-[#3E6389]">
          <AuthProvider>{children}</AuthProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
