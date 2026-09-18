import Link from "next/link";

export default function TasksPage() {
  const lanes = [
    {
      name: "To Do",
      color: "border-amber-400 text-amber-600 bg-amber-50",
      tasks: [
        { title: "Implement SSO OAuth 2.0 flow", tag: "Backend", priority: "High", hours: 6 },
        { title: "Design database indexing plan", tag: "Database", priority: "Medium", hours: 4 },
      ],
    },
    {
      name: "In Progress",
      color: "border-blue-400 text-blue-600 bg-blue-50",
      tasks: [
        { title: "Scaffold App Router navigation", tag: "Frontend", priority: "High", hours: 5 },
        { title: "Set up Tailwind tokens", tag: "Design", priority: "Low", hours: 3 },
      ],
    },
    {
      name: "In Review",
      color: "border-purple-400 text-purple-600 bg-purple-50",
      tasks: [
        { title: "Accessibility audit on forms", tag: "QA", priority: "Medium", hours: 4 },
      ],
    },
    {
      name: "Completed",
      color: "border-emerald-400 text-emerald-600 bg-emerald-50",
      tasks: [
        { title: "Continuous deployment to Vercel", tag: "DevOps", priority: "High", hours: 2 },
        { title: "Health check endpoint setup", tag: "API", priority: "Medium", hours: 3 },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-card p-6 border border-brand-border shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Screen Spec: 01 / Tasks</span>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">Task Backlog & Kanban</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Server-rendered task board with 4 sprint lanes and status breakdown.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-sm transition">
            + Add Task (Placeholder)
          </button>
        </div>
      </div>

      {/* Lanes Grid - Responsive at 375px & 1280px */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {lanes.map((lane) => (
          <div key={lane.name} className="bg-white rounded-card p-4 border border-brand-border shadow-subtle flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${lane.color}`}>
                {lane.name}
              </span>
              <span className="text-xs font-mono font-semibold text-slate-400">
                {lane.tasks.length}
              </span>
            </div>

            <div className="space-y-3 flex-1">
              {lane.tasks.map((task, i) => (
                <div key={i} className="p-3.5 rounded-lg border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:shadow-subtle transition">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    #{task.tag}
                  </span>
                  <h4 className="text-sm font-semibold text-slate-800 mt-1 leading-snug">
                    {task.title}
                  </h4>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                    <span className={`font-semibold ${task.priority === "High" ? "text-rose-600" : "text-slate-600"}`}>
                      {task.priority} Priority
                    </span>
                    <span>{task.hours}h est.</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
