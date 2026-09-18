import Link from "next/link";

export default function HomePage() {
  const quickStats = [
    { label: "Active Sprint", value: "Sprint 24", sub: "Ends in 4 days", color: "text-brand-700" },
    { label: "Completed Tasks", value: "28 / 34", sub: "82% progress", color: "text-emerald-600" },
    { label: "Open Issues", value: "6", sub: "2 high priority", color: "text-amber-600" },
    { label: "Team Velocity", value: "48 pts", sub: "+12% vs last sprint", color: "text-purple-600" },
  ];

  const screens = [
    {
      title: "Task Kanban & Backlog",
      href: "/tasks",
      desc: "Interactive board with Todo, In Progress, Review, and Done lanes. Client-side drag and filtering.",
      status: "Ready",
    },
    {
      title: "Sprint Planning",
      href: "/sprints",
      desc: "Milestones, burn-down forecasts, velocity targets, and roadmap scheduling.",
      status: "Ready",
    },
    {
      title: "Velocity & Analytics",
      href: "/analytics",
      desc: "Workload distribution, team allocation, and throughput metrics.",
      status: "Ready",
    },
    {
      title: "Settings & Preferences",
      href: "/settings",
      desc: "Project metadata, notification webhooks, workflow rules, and member roles.",
      status: "Ready",
    },
    {
      title: "Diagnostic Health Check",
      href: "/health",
      desc: "Real-time fetched diagnostic page rendering runtime uptime and system telemetry.",
      status: "Live",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 rounded-card p-6 sm:p-8 text-white shadow-card">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-200 bg-white/10 px-3 py-1 rounded-full mb-3">
            Foundations Milestone · Day 1 Scaffold
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Agile Sprint & Backlog Hub
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            Production-grade Next.js App Router scaffold built with Server Components by default, Tailwind base tokens, responsive navigation (375px to 1280px), and continuous deployment pipeline.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/tasks"
              className="px-4 py-2.5 rounded-lg text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 shadow-sm transition"
            >
              Explore Tasks Board →
            </Link>
            <Link
              href="/health"
              className="px-4 py-2.5 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Verify Health Page
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-card border border-brand-border shadow-subtle">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</p>
            <p className={`text-2xl sm:text-3xl font-extrabold mt-1 ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-slate-500 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Spec Screens Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">Routed Spec Screens</h2>
          <span className="text-xs text-slate-500">5 of 5 placeholder routes active</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {screens.map((screen) => (
            <Link
              key={screen.href}
              href={screen.href}
              className="group bg-white p-6 rounded-card border border-brand-border hover:border-brand-500/50 hover:shadow-card transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-brand-600 transition">
                    {screen.title}
                  </h3>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {screen.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                  {screen.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-600">
                <span>View Route: {screen.href}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
