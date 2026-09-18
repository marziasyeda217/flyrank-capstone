# CLAUDE.md

## Stack
- Next.js 14+ (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Architecture & Conventions
- **Server Components by Default:** Keep components as Server Components unless browser interactivity (`useState`, `useEffect`, event listeners) is explicitly required.
- **Client Components Isolation:** Restrict `"use client"` directives to the leaves of the component tree (e.g., interactive navigation drawers, form controls).
- **Design Tokens:** Use configured Tailwind tokens (`brand`, `status`) rather than arbitrary hex values.
- **Zero Secrets:** Never commit `.env` or sensitive credentials; keep `.env.example` updated with sanitized templates.
- **Continuous Deployment:** Every branch pushed to GitHub must build with zero TypeScript errors (`npx tsc --noEmit`) to ensure clean preview deployments on Vercel.
- **Commit Messages:** Follow Conventional Commits format (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`).
- Licensed under MIT.
