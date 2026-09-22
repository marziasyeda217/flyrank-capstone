"use client";

import React, { useState } from "react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [candidateName, setCandidateName] = useState("Marzia Syeda");
  const [githubUrl, setGithubUrl] = useState("https://github.com/marziasyeda217/flyrank-capstone");
  const [eduwatchUrl, setEduwatchUrl] = useState("https://github.com/marziasyeda217/EduWatch-AI-Ghost-Teacher-Detection-Platform");
  const [telemetryEnabled, setTelemetryEnabled] = useState(true);
  const [highContrastA11y, setHighContrastA11y] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <span className="text-xs uppercase tracking-wider font-semibold text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded-full border border-brand-500/20">
          Environment & Preferences
        </span>
        <h1 className="text-3xl font-black text-white mt-2">Platform Settings</h1>
        <p className="text-slate-400 text-sm mt-1">
          Manage capstone metadata, accessibility overrides, and deployment telemetry.
        </p>
      </div>

      {saved && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-4 rounded-xl text-sm flex items-center justify-between animate-fadeIn">
          <span>✓ Settings saved successfully to local state.</span>
          <button onClick={() => setSaved(false)} className="text-emerald-400 hover:text-emerald-200">
            ✕
          </button>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Candidate Profile Info */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-white">Capstone Candidate Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Capstone Repository
              </label>
              <input
                type="text"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                EduWatch AI Feature Repository
              </label>
              <input
                type="text"
                value={eduwatchUrl}
                onChange={(e) => setEduwatchUrl(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
        </div>

        {/* Accessibility & UX Settings */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-white">Accessibility & Display Controls</h2>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 cursor-pointer">
              <div>
                <span className="text-sm font-semibold text-white block">High-Contrast Focus Outlines</span>
                <span className="text-xs text-slate-400">Enhances focus rings from 2px to 4px with high-visibility cyan.</span>
              </div>
              <input
                type="checkbox"
                checked={highContrastA11y}
                onChange={(e) => setHighContrastA11y(e.target.checked)}
                className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 cursor-pointer">
              <div>
                <span className="text-sm font-semibold text-white block">Realtime Telemetry & Health Sync</span>
                <span className="text-xs text-slate-400">Enables automated pinging of the /api/health endpoint every 60 seconds.</span>
              </div>
              <input
                type="checkbox"
                checked={telemetryEnabled}
                onChange={(e) => setTelemetryEnabled(e.target.checked)}
                className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
              />
            </label>
          </div>
        </div>

        {/* Deployment Info */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-white">Deployment Targets</h2>
          <div className="text-xs text-slate-400 space-y-2">
            <p>
              • <strong className="text-slate-200">Netlify Configuration:</strong> Enabled via{" "}
              <code className="bg-slate-800 px-1 py-0.5 rounded text-brand-300">netlify.toml</code> with{" "}
              <code className="bg-slate-800 px-1 py-0.5 rounded text-brand-300">@netlify/plugin-nextjs</code>.
            </p>
            <p>
              • <strong className="text-slate-200">Vercel Configuration:</strong> Enabled via{" "}
              <code className="bg-slate-800 px-1 py-0.5 rounded text-brand-300">vercel.json</code> with zero-secret protection.
            </p>
            <p>
              • <strong className="text-slate-200">Next.js Framework:</strong> Version 14.2.35 App Router with Node.js 18+ runtime.
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="submit"
            className="bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-all shadow-md shadow-brand-900/30"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
