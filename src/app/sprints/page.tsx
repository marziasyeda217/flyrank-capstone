export default function SprintsPage() {
  const sprints = [
    { id: 24, name: "Sprint 24: Core Scaffolding & CI", status: "Active", progress: 82, dates: "Sep 15 - Sep 28", points: "48 / 55 pts" },
    { id: 25, name: "Sprint 25: Realtime Collaboration", status: "Upcoming", progress: 0, dates: "Sep 29 - Oct 12", points: "50 pts targeted" },
    { id: 23, name: "Sprint 23: Foundations & Discovery", status: "Completed", progress: 100, dates: "Sep 01 - Sep 14", points: "52 pts delivered" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-card p-6 border border-brand-border shadow-subtle">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Screen Spec: 02 / Sprints</span>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">Sprint Planning & Roadmaps</h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Milestone schedules, target velocity, and active sprint lifecycle management.
        </p>
      </div>

      <div className="space-y-4">
        {sprints.map((sprint) => (
          <div key={sprint.id} className="bg-white rounded-card p-6 border border-brand-border shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-lg">
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                  sprint.status === "Active" ? "bg-emerald-100 text-emerald-800" :
                  sprint.status === "Upcoming" ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-700"
                }`}>
                  {sprint.status}
                </span>
                <span className="text-xs text-slate-400 font-mono">{sprint.dates}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{sprint.name}</h3>
              <p className="text-xs text-slate-500 font-medium">Sprint velocity capacity: {sprint.points}</p>
            </div>

            <div className="w-full md:w-64 space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-600">
                <span>Progress</span>
                <span>{sprint.progress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-600 rounded-full transition-all duration-300"
                  style={{ width: `${sprint.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
