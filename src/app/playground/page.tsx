import React from "react";
import PlaygroundDemo from "@/playground/PlaygroundDemo";
import Link from "next/link";

export const metadata = {
  title: "A11y Component Playground | Marzia Syeda Capstone",
  description: "Three handcrafted W3C ARIA compliant components built from scratch in React + TypeScript: Modal Dialog, Tabs, and Disclosure.",
};

export default function PlaygroundPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30">
            <span>✨ Week 1 Capstone Deliverable</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Accessible Component Playground
          </h1>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Handcrafted from first principles in React 18 + TypeScript against official{" "}
            <strong className="text-white">W3C WAI-ARIA Authoring Practices</strong>. Zero component library dependencies.
            Strict keyboard navigation, roving tabindex, focus trapping, and zero <code className="text-brand-300 bg-slate-800 px-1 py-0.5 rounded">any</code> escapes.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs">
            <Link
              href="https://github.com/marziasyeda217/flyrank-capstone/blob/main/NOTES.md"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-brand-400 hover:text-brand-300 font-medium underline underline-offset-4"
            >
              <span>📄 View Deep-Dive Audit in NOTES.md</span>
            </Link>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Target W3C Standards: APG 1.2</span>
          </div>
        </div>
      </div>

      {/* Interactive Demo Component */}
      <PlaygroundDemo />
    </div>
  );
}
