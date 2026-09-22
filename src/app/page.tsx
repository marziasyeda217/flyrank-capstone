import Link from "next/link";

export default function HomePage() {
  const quickStats = [
    { label: "Active Sprint", value: "Sprint 24", sub: "Ends in 4 days", color: "text-brand-700" },
    { label: "Sprint Velocity", value: "48 pts", sub: "+14% trajectory", color: "text-purple-600" },
    { label: "Completed Tasks", value: "28 / 34", sub: "82% progress", color: "text-emerald-600" },
    { label: "A11y Compliance", value: "100%", sub: "W3C ARIA audited", color: "text-cyan-600" },
  ];

  const screens = [
    {
      title: "Task Kanban & Backlog",
      href: "/tasks",
      desc: "Interactive sprint board with Todo, In Progress, Review, and Completed lanes.",
      badge: "Spec 01",
    },
    {
      title: "Sprint Roadmaps",
      href: "/sprints",
      desc: "Milestone schedules, target velocity, and active sprint lifecycle management.",
      badge: "Spec 02",
    },
    {
      title: "Three-Beat Case Studies",
      href: "/case-studies",
      desc: "Deep engineering case studies on EduWatch AI and civic platforms using the Week 2 shape.",
      badge: "Spec 03",
    },
    {
      title: "W3C ARIA Playground",
      href: "/playground",
      desc: "Handcrafted Modal Dialog, Tabs (roving tabindex), and Disclosure tested keyboard-only.",
      badge: "Spec 04",
    },
    {
      title: "Diagnostic Health Check",
      href: "/health",
      desc: "Live Server Component rendering uptime, process memory, and subsystem availability.",
      badge: "Live Telemetry",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 rounded-card p-6 sm:p-10 text-white shadow-card relative overflow-hidden">
        <div className="max-w-3xl relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-200 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              FlyRank Foundations Capstone · Marzia Syeda
            </span>
            <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
              Production Build
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Marzia Syeda — Agile Sprint & AI Systems Hub
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Engineered for the FlyRank Foundations track. Built with Next.js 14 App Router, Server Components by default, Tailwind base tokens, W3C ARIA accessible components, and continuous deployment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/case-studies/eduwatch"
              className="px-5 py-2.5 rounded-lg text-sm font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-md transition transform active:scale-95 flex items-center gap-1.5"
            >
              <span>Featured Case Study (EduWatch AI)</span> →
            </Link>
            <Link
              href="/tasks"
              className="px-4 py-2.5 rounded-lg text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 shadow-sm transition"
            >
              Explore Tasks Board
            </Link>
            <Link
              href="/playground"
              className="px-4 py-2.5 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition"
            >
              A11y Playground
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-card border border-brand-border shadow-subtle">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</p>
            <p className={`text-2xl sm:text-3xl font-extrabold mt-1 ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-slate-500 mt-1">{stat.sub}</p>
          </div>
        ))}
      </section>

      {/* Featured Three-Beat Case Study Banner */}
      <section className="bg-white rounded-card p-6 sm:p-8 border border-brand-border shadow-subtle space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700">
              Week 2 Three-Beat Shape Highlight
            </span>
          </div>
          <Link
            href="/case-studies/eduwatch"
            className="text-xs font-bold text-brand-600 hover:text-brand-800 underline"
          >
            Read Full Three-Beat Analysis →
          </Link>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">
            EduWatch: AI Ghost Teacher Detection & Attendance Transparency
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Eliminating proxy attendance in rural public schools using in-browser face recognition with blink liveness, coordinate geofencing, and legal-citation RAG complaint generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-lg bg-rose-50/50 border border-rose-100 text-xs">
            <span className="font-bold text-rose-700 block mb-1">Beat 1: Problem</span>
            <span className="text-slate-600">20–25% teacher absenteeism in rural schools, falsified paper registers.</span>
          </div>
          <div className="p-3.5 rounded-lg bg-blue-50/50 border border-blue-100 text-xs">
            <span className="font-bold text-blue-700 block mb-1">Beat 2: What I Did</span>
            <span className="text-slate-600">Face-API.js liveness detection, 150m GPS geofencing, legal citation RAG.</span>
          </div>
          <div className="p-3.5 rounded-lg bg-emerald-50/50 border border-emerald-100 text-xs">
            <span className="font-bold text-emerald-700 block mb-1">Beat 3: What Came Of It</span>
            <span className="text-slate-600">0 hardware cost, 98.4% accuracy, live on Netlify, zero server GPU bills.</span>
          </div>
        </div>
      </section>

      {/* Routed Spec Screens Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Routed Spec Screens</h2>
          <span className="text-xs text-slate-500 font-mono">5 of 5 Routes Active</span>
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
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {screen.badge}
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
      </section>
    </div>
  );
}
