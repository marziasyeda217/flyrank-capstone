export default function SettingsPage() {
  const sections = [
    {
      title: "Workspace Information",
      desc: "Configure project slug, repository links, and default sprint duration.",
      fields: [
        { label: "Workspace Name", val: "Engineering Core / Sprint Alpha" },
        { label: "Default Sprint Cadence", val: "2 Weeks (Starts Monday 09:00 UTC)" },
      ],
    },
    {
      title: "Continuous Deployment & Webhooks",
      desc: "Vercel preview deployment alerts and git branch triggers.",
      fields: [
        { label: "Vercel Target", val: "Connected · Production & Preview Branches" },
        { label: "Deploy Webhook", val: "https://api.vercel.com/v1/integrations/deploy/..." },
      ],
    },
    {
      title: "Environment Security",
      desc: "Zero-secret policy verification and public configuration audit.",
      fields: [
        { label: "Secret Leak Protection", val: "Active (GitGuardian / Pre-commit)" },
        { label: "Public App URL", val: "https://taskpulse-preview.vercel.app" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-card p-6 border border-brand-border shadow-subtle">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Screen Spec: 04 / Settings</span>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">Workspace & Project Settings</h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Global configuration, deployment webhooks, and team access permissions.
        </p>
      </div>

      <div className="space-y-4">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-card p-6 border border-brand-border shadow-subtle">
            <h3 className="font-bold text-base text-slate-900">{section.title}</h3>
            <p className="text-xs text-slate-500 mt-0.5 mb-4">{section.desc}</p>

            <div className="space-y-3">
              {section.fields.map((f, fi) => (
                <div key={fi} className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{f.label}</span>
                  <span className="text-xs font-mono text-slate-800 font-medium">{f.val}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
