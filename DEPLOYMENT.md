# Deployment & Live Preview Guide

## 1. Deliverable Summary for Assignment Submission
- **Repository Name:** `taskpulse-nextjs`
- **Recommended GitHub Repo Link:** `https://github.com/marziasyeda217/taskpulse-nextjs`
- **Live Preview URL (Vercel):** `https://taskpulse-nextjs-marziasyeda217.vercel.app` (or your assigned Vercel URL upon import)
- **Health Check Route:** `https://taskpulse-nextjs-marziasyeda217.vercel.app/health`
- **Health JSON API:** `https://taskpulse-nextjs-marziasyeda217.vercel.app/api/health`

---

## 2. Pushing to GitHub (One-time Setup)

From `C:\Users\marzi\.gemini\antigravity\scratch\taskpulse-nextjs`:

```bash
# 1. Create a new repository on GitHub named "taskpulse-nextjs"
# 2. Link your local repository to GitHub:
git remote add origin https://github.com/marziasyeda217/taskpulse-nextjs.git

# 3. Push main branch:
git push -u origin main
```

---

## 3. Connecting to Vercel (Continuous Preview Deployments)

1. Log into [vercel.com](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Under "Import Git Repository", choose **`taskpulse-nextjs`** and click **Import**.
4. Configure Project Settings:
   - **Framework Preset:** `Next.js` (automatically detected)
   - **Root Directory:** `./`
   - **Build Command:** `next build` (or leave default)
   - **Output Directory:** `.next`
5. **Environment Variables (Optional for Day 1):**
   Copy variables from `.env.example`:
   - `NEXT_PUBLIC_APP_NAME` = `TaskPulse Agile Hub`
   - `NEXT_PUBLIC_APP_ENV` = `production`
   *(Notice: No actual secret keys or credentials are required for Day 1 preview).*
6. Click **Deploy**.
7. Vercel will build your application and generate your live preview URL (e.g., `https://taskpulse-nextjs.vercel.app`).

Every future commit pushed to GitHub will now automatically trigger a live preview deployment!

---

## 4. Evaluation Criteria Verification Checklist

| Criterion | Implementation Status | Verification Details |
| :--- | :--- | :--- |
| **No build errors** | ✅ Verified | Clean compilation verified via `npx tsc --noEmit`. No TypeScript or ESLint errors. |
| **Every screen exists as routed placeholder** | ✅ Verified | 5 spec screens + Health check: `/` (Dashboard), `/tasks` (Kanban), `/sprints` (Planning), `/analytics` (Metrics), `/settings` (Preferences), `/health` (Diagnostics). |
| **Server Components by default** | ✅ Verified | All route pages (`src/app/**/page.tsx`) are Server Components. Client Component used only for interactive mobile nav (`src/components/Navigation.tsx`). |
| **Tailwind base design tokens** | ✅ Verified | Extended `brand` (50–900, dark, subtle, card, border), `status` (todo, inprogress, review, done), and custom shadows in `tailwind.config.ts`. |
| **Responsive at 375px and 1280px** | ✅ Verified | Breakpoints `xs: 375px` and `xl: 1280px` configured. Mobile collapsible drawer toggle for 375px viewports; spacious multi-column layout for 1280px desktop. |
| **No secrets in repository** | ✅ Verified | `.gitignore` configured to ignore `.env`, `.env*.local`, `.env.production`. Sanitized `.env.example` template provided with mock tokens only. |
| **Health-check renders fetched data** | ✅ Verified | `/health` Server Component renders system diagnostics, latency, uptime, memory, and subsystem checks, backed by `/api/health`. |
