# TaskPulse - Next.js App Router Sprint Hub

Production-ready Next.js App Router scaffold built for the Foundations Agile Hub capstone.

## 🚀 Live Preview & Deployment
- **Deployment Platform:** Vercel
- **GitHub Repository:** [https://github.com/marziasyeda217/flyrank-capstone](https://github.com/marziasyeda217/flyrank-capstone)
- **Live Preview URL:** `https://flyrank-capstone.vercel.app`
- **Health Check Route:** `https://flyrank-capstone.vercel.app/health`
- **API Health Endpoint:** `https://flyrank-capstone.vercel.app/api/health`

## 📁 Routed Spec Screens (Server Components by Default)
- `/` — **Overview Dashboard** (Active sprint metrics, velocity stats, screen cards)
- `/tasks` — **Task Backlog & Kanban** (4 status lanes: To Do, In Progress, Review, Completed)
- `/sprints` — **Sprint Planning** (Milestone schedules, target velocity, lifecycle)
- `/analytics` — **Metrics & Velocity** (Burndown forecast, lead time, throughput)
- `/settings` — **Project Preferences** (Deployment webhooks, team roles, zero-secret policy)
- `/health` — **Health Diagnostic Page** (Server-rendered telemetry, uptime, memory, and subsystem verification)

## 🎨 Design Tokens (Tailwind CSS)
Configured in `tailwind.config.ts`:
- Breakpoints: `xs: '375px'`, `sm: '640px'`, `md: '768px'`, `lg: '1024px'`, `xl: '1280px'`
- Semantic Brand: `brand` (50–900, dark `#0f172a`, card `#ffffff`, subtle `#f8fafc`, border `#e2e8f0`)
- Status Badges: `todo` (#f59e0b), `inprogress` (#3b82f6), `review` (#8b5cf6), `done` (#10b981)

## 🔒 Security
- Strict `.gitignore` prevents `.env`, `.env*.local`, or credential leaks.
- Template provided in `.env.example` with zero actual secrets.

## 💻 Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```
