import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Marzia Syeda | FlyRank Foundations Capstone & Portfolio",
  description: "Next.js App Router capstone platform by Marzia Syeda — Server Components, Tailwind design tokens, W3C ARIA accessibility, and Week 2 three-beat case studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased bg-grid-pattern">
        <Navigation />

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-6 sm:py-8">
          {children}
        </main>

        <footer className="border-t border-brand-border bg-white/90 backdrop-blur-sm py-6 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-800">© 2026 Marzia Syeda</span>
              <span>•</span>
              <span>FlyRank Foundations Capstone</span>
              <span>•</span>
              <span>Next.js App Router</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/health" className="hover:text-brand-600 transition flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                System Health
              </a>
              <span>•</span>
              <a
                href="https://github.com/marziasyeda217/flyrank-capstone"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-800 transition font-medium"
              >
                GitHub: marziasyeda217
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
