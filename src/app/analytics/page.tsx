export default function AnalyticsPage() {
  const metrics = [
    { title: "Average Sprint Velocity", val: "48.2 pts", change: "+14%", positive: true },
    { title: "Sprint Completion Rate", val: "91.4%", change: "+5.2%", positive: true },
    { title: "Cycle Time (Lead)", val: "2.8 days", change: "-0.6 days", positive: true },
    { title: "Bug Spillover Ratio", val: "3.1%", change: "-1.2%", positive: true },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-card p-6 border border-brand-border shadow-subtle">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Screen Spec: 03 / Analytics</span>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">Velocity & Workload Metrics</h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Throughput forecasting, team workload allocation, and historical sprint trends.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white p-5 rounded-card border border-brand-border shadow-subtle">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{m.title}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{m.val}</p>
            <p className="text-xs font-semibold text-emerald-600 mt-1 flex items-center gap-1">
              <span>↑</span> {m.change} vs trailing average
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-card p-6 border border-brand-border shadow-subtle">
        <h3 className="font-bold text-slate-900 text-base mb-2">Sprint Burn-Down Trajectory</h3>
        <p className="text-xs text-slate-500 mb-6">Visual tracking of committed points vs actual burndown progress.</p>
        <div className="h-48 rounded-xl bg-slate-50 border border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 text-sm">
          <span>📊 Interactive Chart Canvas Placeholder (Server-Rendered Ready)</span>
          <span className="text-xs text-slate-400 mt-1">Sprint 24 trajectory: 7.2 pts ahead of baseline</span>
        </div>
      </div>
    </div>
  );
}
