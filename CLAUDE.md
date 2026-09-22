# Development Guidelines & Rules: FlyRank Foundations Capstone

## Candidate & Identity
- **Candidate:** Marzia Syeda
- **Repository:** `https://github.com/marziasyeda217/flyrank-capstone`
- **Owner Identity:** All commits, branding, and metadata MUST be attributed exclusively to Marzia Syeda (`marziasyeda217`).

## Architecture & Code Standards
- **Framework:** Next.js 14 App Router, React 18, TypeScript 5 (strict mode).
- **Server vs Client Components:** Server Components (`page.tsx`) by default; use `"use client"` only for components requiring hooks (`useState`, `useEffect`, `useRef`), event handlers, or browser APIs.
- **Accessibility:** Handcrafted interactive components must strictly satisfy W3C WAI-ARIA Authoring Practices Guide 1.2:
  - Focus trapping and restoration on dismiss for Modals.
  - Roving `tabIndex` (`0` vs `-1`) and keyboard arrow navigation (`ArrowLeft` / `ArrowRight`) for Tabs.
  - Synchronized `aria-expanded` and `aria-controls` for Disclosures.
  - Zero `any` escapes in TypeScript props or event signatures.
- **Styling:** Tailwind CSS with custom design tokens (`brand`, `status`) and mobile-first breakpoints (`xs: 375px` to `xl: 1280px`).
- **Security:** Strict zero-secret policy. Never commit credentials, `.env*` secrets, or personal access tokens.

## Essential Commands
```bash
# Run local development server
npm run dev

# Run strict TypeScript validation
npx tsc --noEmit

# Run production build
npm run build

# Start production server
npm start
```
