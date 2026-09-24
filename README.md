# FlyRank Foundations Capstone

**Candidate:** Marzia Syeda  
**GitHub Repository:** [https://github.com/marziasyeda217/flyrank-capstone](https://github.com/marziasyeda217/flyrank-capstone)  
**Live Deployment:** [https://marzia-flyrank-capstone-website.netlify.app/](https://marzia-flyrank-capstone-website.netlify.app/)  
**Target Deployments:** Netlify & Vercel  

---

## 📌 Project Overview
This repository contains the complete production capstone for the **FlyRank Foundations Program**, authored and designed by **Marzia Syeda**.

The platform is an enterprise-grade Next.js 14 web application built to demonstrate mastery in:
1. **W3C WAI-ARIA Accessibility:** Handcrafted interactive components (Modal Dialog, Tabs, Disclosure) built strictly against official W3C APG patterns with zero component libraries, zero `any` escapes, and verified keyboard traps.
2. **Three-Beat Storytelling Framework:** Deep architectural case study on **EduWatch AI**, tracking the problem of fraudulent "ghost teachers" in public schools, the edge-computing technical solution, and measured outcomes ($1.2M+ saved, 98.4% accuracy).
3. **Enterprise Design System & Tokens:** Tailwind CSS tokens (`brand`, `status`) configured with strict responsive boundaries (`xs: 375px` to `xl: 1280px`).
4. **Server Components Architecture:** React Server Components (RSC) by default, isolating Client Components (`"use client"`) strictly to interactive surfaces.
5. **Zero-Secret Deployment Pipeline:** Fully configured for seamless deployment on both **Netlify** (`netlify.toml`) and **Vercel** (`vercel.json`) with automated environment safety.

---

## 🗺️ Application Sitemap & Routed Screens

| Route | Description | Rendering Mode |
| :--- | :--- | :--- |
| `/` | Hero overview, stats, Three-Beat EduWatch AI highlight, and screen directory | Server Component |
| `/playground` | Interactive W3C ARIA testing suite (Modal, Tabs, Disclosure) with keyboard badges | Client Component |
| `/tasks` | 4-lane agile Kanban board with priority filtering, search, and hour estimates | Client Component |
| `/sprints` | Sprint roadmap tracking milestones, dates, deliverables, and completion rates | Server Component |
| `/case-studies` | Directory of Three-Beat engineering case studies | Server Component |
| `/case-studies/eduwatch` | Full deep-dive analysis on EduWatch AI architecture, edge CV, and impact | Server Component |
| `/settings` | Candidate profile, accessibility high-contrast toggles, and telemetry preferences | Client Component |
| `/health` | Realtime diagnostic dashboard with latency monitors and subsystem checks | Client Component |
| `/api/health` | Diagnostic JSON telemetry endpoint with runtime details and candidate verification | Server API Route |

---

## ♿ Accessibility Compliance (Week 1 Deliverable)

All interactive components inside `src/playground/` comply with W3C WAI-ARIA 1.2:
- **Modal Dialog (`ModalDialog.tsx`):**
  - Traps keyboard focus (`Tab` and `Shift+Tab` cycle).
  - Dismisses on `Escape` key and outside backdrop clicks.
  - Automatically restores focus to the triggering element on unmount.
  - Implements `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`.
- **Tabs (`Tabs.tsx`):**
  - Roving `tabIndex` (`tabIndex={0}` for active tab, `tabIndex={-1}` for inactive tabs).
  - Arrow key navigation (`ArrowLeft` / `ArrowRight`) with automatic boundary wrap-around.
  - Shortcut support: `Home` (first tab) and `End` (last tab).
  - Semantic `role="tablist"`, `role="tab"`, and `role="tabpanel"` linked via `aria-controls` and `aria-labelledby`.
- **Disclosure (`Disclosure.tsx`):**
  - Collapsible content toggle controlled via `aria-expanded` and `aria-controls`.
  - Accessible via standard `Space` and `Enter` activations.
- **Architectural Audit:** Documented comprehensively in [`NOTES.md`](./NOTES.md).

---

## 📖 Three-Beat Case Study: EduWatch AI (Week 2 Deliverable)

- **Beat 1 (The Problem):** In remote public schools, ghost teachers draw state paychecks without reporting to class. Traditional roll calls are forged via proxy signatures.
- **Beat 2 (What I Did):** Engineered on-device edge facial recognition with cryptographic tamper seals (Ed25519) and an offline-first SQLite synchronization queue.
- **Beat 3 (What Came of It):** 98.4% model accuracy, 312 ghost teacher accounts flagged, 420+ schools tested, and $1.2M+ in annual taxpayer funds recuperated.
- **Future Roadmap:** Detailed in [`NEXT_CASE_STUDY.md`](./NEXT_CASE_STUDY.md) with recurring monthly calendar reminder evidence.

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js 18.17.0+ (Tested on Node v20.x & v24.x)
- npm 9+ or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/marziasyeda217/flyrank-capstone.git
cd flyrank-capstone

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Check & Build
```bash
# Validate strict TypeScript (0 errors, no any escapes)
npx tsc --noEmit

# Production build
npm run build
```

---

## 🌐 Deployment Instructions

### Deploying to Netlify
1. Log into your Netlify dashboard at [app.netlify.com](https://app.netlify.com).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select **GitHub** and authorize `marziasyeda217/flyrank-capstone`.
4. Netlify will automatically detect the settings from [`netlify.toml`](./netlify.toml):
   - **Build Command:** `npm run build`
   - **Publish Directory:** `.next`
   - **Plugin:** `@netlify/plugin-nextjs`
5. Choose a custom site name (e.g., `marziasyeda-capstone.netlify.app`).
6. Click **Deploy Site**.

### Deploying to Vercel
1. Log into your Vercel dashboard at [vercel.com](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Import `marziasyeda217/flyrank-capstone`.
4. Vercel will automatically detect Next.js framework configuration from [`vercel.json`](./vercel.json).
5. Name the project `marziasyeda-capstone` (or similar unique slug).
6. Click **Deploy**.

---

## 🔒 Zero-Secret & Security Checklist
- `.gitignore` strictly excludes `.env`, `.env*.local`, `.env.production`, and credential stores.
- `.env.example` provides non-sensitive configuration defaults.
- All dynamic routes and APIs include sanitized response headers.

---

*Author: Marzia Syeda · FlyRank Foundations Capstone*
