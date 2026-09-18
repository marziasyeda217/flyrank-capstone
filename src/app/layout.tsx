import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TaskPulse | Agile Sprint & Velocity Hub",
  description: "Production-grade Next.js App Router scaffold for agile sprint tracking, velocity analytics, and team backlog management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full flex flex-col bg-slate-50 text-slate-900`}
      >
        {/* Responsive Navigation Header */}
        <Navigation />

        {/* Main Content Area - Responsive at 375px & 1280px */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-6 sm:py-8">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="border-t border-brand-border bg-white py-6 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-slate-700">TaskPulse v1.0.0</span>
              <span>•</span>
              <span>Next.js App Router (Server-First Architecture)</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/health" className="hover:text-brand-600 transition flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                System Health
              </a>
              <span>•</span>
              <span>Zero-Secret Configuration</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
