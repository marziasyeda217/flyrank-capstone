import React from "react";
import Link from "next/link";

interface CaseStudySummary {
  slug: string;
  title: string;
  subtitle: string;
  problemSummary: string;
  solutionSummary: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  status: "Featured Production" | "In Pipeline";
}

const CASE_STUDIES: CaseStudySummary[] = [
  {
    slug: "eduwatch",
    title: "EduWatch AI: Ghost Teacher Detection & Biometric Auditing",
    subtitle: "Eliminating payroll fraud and teacher absenteeism in public schools across developing regions using edge computer vision and zero-trust verification.",
    problemSummary:
      "Public school systems in remote areas suffer from 'ghost teachers'—instructors who draw state salaries but never report to class. Traditional roll calls were routinely forged.",
    solutionSummary:
      "Architected a localized edge-inference facial biometric audit system running on low-cost hardware with offline caching, cryptographic tamper seals, and automated discrepancy reporting.",
    metrics: [
      { label: "Verification Accuracy", value: "98.4%" },
      { label: "Ghost Accounts Flagged", value: "312" },
      { label: "Schools Pilot Tested", value: "420+" },
      { label: "Annual Payroll Saved", value: "$1.2M+" },
    ],
    tags: ["Computer Vision", "Next.js", "Edge Inference", "Public Sector AI"],
    status: "Featured Production",
  },
];

export const metadata = {
  title: "Case Studies | Marzia Syeda Capstone",
  description: "Production case studies structured in the Three-Beat narrative: The Problem, What I Did, and Measurable Outcomes.",
};

export default function CaseStudiesIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30 mb-3">
          <span>Three-Beat Narrative Framework</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Engineering Case Studies
        </h1>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-3xl">
          High-impact software engineering projects structured strictly around the three-beat cadence:
          <strong className="text-white"> (1) The Problem</strong>,{" "}
          <strong className="text-white">(2) What I Did</strong>, and{" "}
          <strong className="text-white">(3) What Came of It</strong>.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="space-y-8">
        {CASE_STUDIES.map((cs) => (
          <div
            key={cs.slug}
            className="bg-slate-900/60 border border-slate-800 hover:border-brand-500/40 rounded-2xl p-6 sm:p-8 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-8">
              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    {cs.status}
                  </span>
                  <div className="flex gap-1.5">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-brand-300 transition-colors">
                  {cs.title}
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {cs.subtitle}
                </p>

                {/* The 3-Beat Snapshot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">
                      Beat 1: The Problem
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{cs.problemSummary}</p>
                  </div>
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">
                      Beat 2: What I Did
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{cs.solutionSummary}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-brand-900/30"
                  >
                    <span>Read Full Three-Beat Case Study</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="lg:w-80 shrink-0 bg-slate-950/70 p-6 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">
                    Beat 3: Measured Outcomes
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    {cs.metrics.map((m, idx) => (
                      <div key={idx} className="bg-slate-900/80 p-3 rounded-lg border border-slate-800/60">
                        <span className="text-2xl font-black text-emerald-400 block">{m.value}</span>
                        <span className="text-[11px] text-slate-400 block mt-0.5">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500">
                  <span>Audited against FlyRank Foundations rubric</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
