"use client";

import React, { useState } from "react";
import Link from "next/link";

interface TaskItem {
  id: string;
  title: string;
  description: string;
  status: "backlog" | "in_progress" | "review" | "done";
  priority: "low" | "medium" | "high" | "critical";
  estimatedHours: number;
  tags: string[];
  assignee: string;
}

const INITIAL_TASKS: TaskItem[] = [
  {
    id: "TSK-101",
    title: "Handcraft W3C ARIA Accessible Modal Dialog",
    description: "Focus trap implementation with Tab / Shift+Tab cycle, escape key unmount, and return focus to activator trigger.",
    status: "done",
    priority: "critical",
    estimatedHours: 5,
    tags: ["A11y", "React", "TypeScript"],
    assignee: "Marzia Syeda",
  },
  {
    id: "TSK-102",
    title: "Implement W3C Roving Tabindex for Tabs Pattern",
    description: "ArrowLeft / ArrowRight navigation, Home/End shortcut keys, active tab index=0 and inactive tab index=-1.",
    status: "done",
    priority: "high",
    estimatedHours: 4,
    tags: ["A11y", "ARIA", "Keyboard"],
    assignee: "Marzia Syeda",
  },
  {
    id: "TSK-103",
    title: "Produce Comparative Audit in NOTES.md",
    description: "Document concrete architectural gaps between bespoke components and shadcn/Radix UI primitives.",
    status: "done",
    priority: "medium",
    estimatedHours: 3,
    tags: ["Documentation", "Radix UI"],
    assignee: "Marzia Syeda",
  },
  {
    id: "TSK-104",
    title: "Three-Beat Case Study: EduWatch AI Ghost Teacher Detection",
    description: "Structure Problem, Technical Execution, and Measurable Outcomes into interactive web layout.",
    status: "done",
    priority: "critical",
    estimatedHours: 6,
    tags: ["Case Study", "AI", "EduWatch"],
    assignee: "Marzia Syeda",
  },
  {
    id: "TSK-105",
    title: "Responsive Design Tokens & Breakpoint System",
    description: "Configure Tailwind tokens for xs (375px), xl (1280px), status colors, and custom dark theme palette.",
    status: "done",
    priority: "medium",
    estimatedHours: 3,
    tags: ["CSS", "Tailwind", "Responsive"],
    assignee: "Marzia Syeda",
  },
  {
    id: "TSK-106",
    title: "Netlify & Vercel Zero-Config Deployment Pipeline",
    description: "Add netlify.toml and vercel.json with environment protection and production build optimization.",
    status: "done",
    priority: "high",
    estimatedHours: 2,
    tags: ["DevOps", "Netlify", "Vercel"],
    assignee: "Marzia Syeda",
  },
  {
    id: "TSK-107",
    title: "Automated Accessibility Testing Suite (axe-core)",
    description: "Integrate jest-axe and playwright accessibility fixtures into continuous integration pipeline.",
    status: "in_progress",
    priority: "medium",
    estimatedHours: 4,
    tags: ["Testing", "CI/CD", "axe-core"],
    assignee: "Marzia Syeda",
  },
  {
    id: "TSK-108",
    title: "Realtime WebSocket Telemetry for EduWatch Inference",
    description: "Live classroom attendance sync and biometric verification streaming endpoint.",
    status: "backlog",
    priority: "high",
    estimatedHours: 8,
    tags: ["WebSockets", "AI Inference"],
    assignee: "Marzia Syeda",
  },
];

const COLUMNS = [
  { id: "backlog", label: "Backlog", badgeClass: "bg-slate-800 text-slate-300" },
  { id: "in_progress", label: "In Progress", badgeClass: "bg-amber-500/20 text-amber-300 border border-amber-500/30" },
  { id: "review", label: "Review & QA", badgeClass: "bg-brand-500/20 text-brand-300 border border-brand-500/30" },
  { id: "done", label: "Completed", badgeClass: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" },
] as const;

export default function TasksPage() {
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
  const [filterPriority, setFilterPriority] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTasks = tasks.filter((t) => {
    const matchesPriority = filterPriority === "all" || t.priority === filterPriority;
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesPriority && matchesSearch;
  });

  const getPriorityBadge = (p: TaskItem["priority"]) => {
    switch (p) {
      case "critical":
        return "bg-rose-500/20 text-rose-300 border-rose-500/40";
      case "high":
        return "bg-amber-500/20 text-amber-300 border-amber-500/40";
      case "medium":
        return "bg-blue-500/20 text-blue-300 border-blue-500/40";
      case "low":
        return "bg-slate-700/50 text-slate-300 border-slate-600";
    }
  };

  const totalHours = tasks.reduce((sum, t) => sum + t.estimatedHours, 0);
  const completedHours = tasks
    .filter((t) => t.status === "done")
    .reduce((sum, t) => sum + t.estimatedHours, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded-full border border-brand-500/20">
              Sprint Execution Board
            </span>
            <span className="text-xs text-slate-400">
              Progress: {Math.round((completedHours / totalHours) * 100)}% ({completedHours}/{totalHours} hrs)
            </span>
          </div>
          <h1 className="text-3xl font-black text-white">Capstone Task Board</h1>
          <p className="text-slate-400 text-sm mt-1">
            Tracking Foundations deliverables, accessibility standards, and EduWatch AI integration milestones.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-center">
            <p className="text-xs text-slate-400">Total Tasks</p>
            <p className="text-lg font-bold text-white">{tasks.length}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-center">
            <p className="text-xs text-slate-400">Done</p>
            <p className="text-lg font-bold text-emerald-400">
              {tasks.filter((t) => t.status === "done").length}
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Search tasks, tags, or IDs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs text-slate-400 whitespace-nowrap">Filter Priority:</span>
          {(["all", "critical", "high", "medium", "low"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setFilterPriority(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize whitespace-nowrap ${
                filterPriority === p
                  ? "bg-brand-600 text-white font-semibold"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Kanban Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {COLUMNS.map((column) => {
          const colTasks = filteredTasks.filter((t) => t.status === column.id);
          return (
            <div
              key={column.id}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl flex flex-col p-4 min-h-[500px]"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <span className="font-bold text-sm text-white">{column.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${column.badgeClass}`}>
                  {colTasks.length}
                </span>
              </div>

              {/* Tasks List */}
              <div className="space-y-3 flex-1 overflow-y-auto">
                {colTasks.length === 0 ? (
                  <div className="text-center py-10 text-slate-600 text-xs italic">
                    No tasks in this lane
                  </div>
                ) : (
                  colTasks.map((task) => (
                    <div
                      key={task.id}
                      className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-brand-500/40 transition-all rounded-xl p-4 space-y-3 group shadow-sm"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-slate-400 font-semibold">{task.id}</span>
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-medium border uppercase tracking-wider ${getPriorityBadge(
                            task.priority
                          )}`}
                        >
                          {task.priority}
                        </span>
                      </div>

                      <h3 className="font-bold text-white text-sm leading-snug group-hover:text-brand-300 transition-colors">
                        {task.title}
                      </h3>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {task.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {task.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-slate-900/80 text-slate-400 text-[10px] px-2 py-0.5 rounded border border-slate-700"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="flex items-center gap-1 font-medium text-slate-300">
                          <span className="w-4 h-4 rounded-full bg-brand-600 flex items-center justify-center text-[9px] text-white font-bold">
                            MS
                          </span>
                          {task.assignee}
                        </span>
                        <span>⏱️ {task.estimatedHours}h</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
