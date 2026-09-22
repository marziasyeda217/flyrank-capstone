import React from "react";
import Link from "next/link";

interface SprintData {
  id: string;
  name: string;
  phase: string;
  dates: string;
  status: "completed" | "active" | "planned";
  completionRate: number;
  description: string;
  deliverables: { title: string; done: boolean; link?: string }[];
}

const SPRINTS: SprintData[] = [
  {
    id: "SPRINT-01",
    name: "Sprint 1: Accessible Foundations",
    phase: "Week 1 · Foundations",
    dates: "Sep 01 - Sep 07",
    status: "completed",
    completionRate: 100,
    description:
      "Handcraft core W3C ARIA compliant interactive components (Modal, Tabs, Disclosure) from scratch with zero third-party dependencies, zero TypeScript escapes, and strict keyboard focus trapping.",
    deliverables: [
      { title: "W3C Modal Dialog with Tab Cycle & Escape Trap", done: true, link: "/playground" },
      { title: "Roving Tabindex Keyboard Navigation for Tabs", done: true, link: "/playground" },
      { title: "Collapsible Disclosure with aria-expanded & aria-controls", done: true, link: "/playground" },
      { title: "Architectural Comparison Audit (NOTES.md)", done: true },
    ],
  },
  {
    id: "SPRINT-02",
    name: "Sprint 2: Three-Beat Storytelling & Case Study",
    phase: "Week 2 · Production Story",
    dates: "Sep 08 - Sep 14",
    status: "completed",
    completionRate: 100,
    description:
      "Formulate technical engineering achievements into the classic three-beat narrative arc: The Problem (Ghost Teachers), What I Did (EduWatch AI Architecture), and Measurable Outcomes.",
    deliverables: [
      { title: "Three-Beat Narrative Framework Implementation", done: true, link: "/case-studies/eduwatch" },
      { title: "EduWatch AI Architecture Deep-Dive & Metrics", done: true, link: "/case-studies/eduwatch" },
      { title: "Interactive Metric Cards (98.4% Accuracy, 420+ Schools)", done: true, link: "/case-studies" },
      { title: "Recurring Oct 2 Calendar Roadmap (NEXT_CASE_STUDY.md)", done: true },
    ],
  },
  {
    id: "SPRINT-03",
    name: "Sprint 3: Enterprise Next.js Architecture & Tokens",
    phase: "Week 3 · Design System",
    dates: "Sep 15 - Sep 21",
    status: "completed",
    completionRate: 100,
    description:
      "Modernize layout tokens with Tailwind CSS, establishing a strict responsive grid from xs (375px) mobile viewports to xl (1280px) desktop viewports, with Server Component architecture by default.",
    deliverables: [
      { title: "Strict Tailwind design tokens (brand, status, responsive)", done: true },
      { title: "Kanban Task Board with Dynamic Filtering", done: true, link: "/tasks" },
      { title: "System Health Telemetry Diagnostic Route (/health & /api/health)", done: true, link: "/health" },
      { title: "Clean Settings & Production Environment Configuration", done: true, link: "/settings" },
    ],
  },
  {
    id: "SPRINT-04",
    name: "Sprint 4: Production Launch & Verification",
    phase: "Week 4 · Capstone Submission",
    dates: "Sep 22 - Sep 28",
    status: "active",
    completionRate: 90,
    description:
      "Final verification and deployment preparation for Marzia Syeda's FlyRank Foundations capstone submission. Netlify and Vercel multi-cloud configurations with zero leaked secrets.",
    deliverables: [
      { title: "Zero Secrets Protection (.gitignore & .env.example)", done: true },
      { title: "Multi-cloud hosting configuration (netlify.toml & vercel.json)", done: true },
      { title: "Personalized Portfolio Branding & Clean GitHub Release", done: true },
      { title: "Reviewer Arijana Ibrovic verification readiness", done: false },
    ],
  },
];

export const metadata = {
  title: "Sprint Roadmap | Marzia Syeda Capstone",
  description: "Sprint velocity, milestone deliverables, and completion status for FlyRank Foundations.",
};

export default function SprintsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded-full border border-brand-500/20">
            Agile Velocity Tracking
          </span>
          <h1 className="text-3xl font-black text-white mt-2">Sprint Roadmap & Milestones</h1>
          <p className="text-slate-400 text-sm mt-1">
            Weekly release milestones driving the FlyRank Foundations Capstone from core ARIA primitives to production.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl">
            <span className="text-xs text-slate-400 block">Overall Completion</span>
            <span className="text-2xl font-black text-brand-400">97.5%</span>
          </div>
        </div>
      </div>

      {/* Sprints Timeline List */}
      <div className="space-y-6">
        {SPRINTS.map((sprint, index) => (
          <div
            key={sprint.id}
            className={`border rounded-2xl p-6 sm:p-8 transition-all ${
              sprint.status === "completed"
                ? "bg-slate-900/40 border-slate-800"
                : sprint.status === "active"
                ? "bg-slate-900/80 border-brand-500/40 ring-1 ring-brand-500/20 shadow-lg"
                : "bg-slate-900/20 border-slate-850"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-slate-400">{sprint.id}</span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs font-semibold text-brand-400">{sprint.phase}</span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-400">{sprint.dates}</span>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-semibold capitalize ${
                      sprint.status === "completed"
                        ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                        : sprint.status === "active"
                        ? "bg-brand-500/20 text-brand-300 border border-brand-500/30 animate-pulse"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {sprint.status}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white">{sprint.name}</h2>
                <p className="text-slate-300 text-sm mt-2 max-w-4xl leading-relaxed">
                  {sprint.description}
                </p>
              </div>

              {/* Progress Gauge */}
              <div className="lg:w-56 shrink-0 bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Completion</span>
                  <span className="font-bold text-white">{sprint.completionRate}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      sprint.status === "completed" ? "bg-emerald-400" : "bg-brand-500"
                    }`}
                    style={{ width: `${sprint.completionRate}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="border-t border-slate-800/80 pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Key Milestone Deliverables
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sprint.deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-center justify-between bg-slate-950/40 p-3 rounded-lg border border-slate-800/60 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          item.done
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-slate-800 text-slate-500 border border-slate-700"
                        }`}
                      >
                        {item.done ? "✓" : "○"}
                      </span>
                      <span className={item.done ? "text-slate-200" : "text-slate-400"}>
                        {item.title}
                      </span>
                    </div>
                    {item.link && (
                      <Link
                        href={item.link}
                        className="text-brand-400 hover:text-brand-300 font-medium ml-2 underline underline-offset-2 shrink-0"
                      >
                        Inspect →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
