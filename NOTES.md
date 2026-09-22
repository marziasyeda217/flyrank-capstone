# Comparative Architectural Audit: Handcrafted W3C ARIA vs shadcn/ui (Radix Primitives)

**Candidate:** Marzia Syeda  
**Project:** FlyRank Foundations Capstone  
**Repository:** [https://github.com/marziasyeda217/flyrank-capstone](https://github.com/marziasyeda217/flyrank-capstone)  
**Spec Reference:** W3C WAI-ARIA Authoring Practices Guide (APG 1.2)

---

## Executive Summary
For the Week 1 Foundations milestone, three interactive components were built from first principles in React 18 + TypeScript without third-party component libraries:
1. **Modal Dialog** (`src/playground/ModalDialog.tsx`)
2. **Tabs** (`src/playground/Tabs.tsx`)
3. **Disclosure / Accordion** (`src/playground/Disclosure.tsx`)

Following the evaluation rubric, these handcrafted components were systematically audited against the production implementation of `shadcn/ui` (which wraps Radix UI headless primitives `@radix-ui/react-dialog` and `@radix-ui/react-tabs`). This document details concrete edge cases and gaps identified during the comparison.

---

## Concrete Gap 1: Scrollbar Jitter & Layout Reflow During Scroll Locking

### The Handcrafted Approach
In `ModalDialog.tsx`, body scroll lock is implemented simply by toggling CSS styles on mount and unmount:
```tsx
document.body.style.overflow = "hidden";
// Cleanup on close:
document.body.style.overflow = "unset";
```

### The shadcn / Radix Solution
While simple, setting `overflow: hidden` removes the browser window's vertical scrollbar (typically 15px to 17px wide on Windows and Chromium). When the scrollbar vanishes, the entire document layout violently shifts horizontally to the right by that width (known as *layout jitter* or *scrollbar shift*).

Radix UI solves this through `@radix-ui/react-remove-scroll`:
1. It dynamically calculates the exact width of the user's scrollbar:
   $$\text{scrollbarWidth} = \text{window.innerWidth} - \text{document.documentElement.clientWidth}$$
2. It injects a compensating right margin or padding onto the `<body>` element equal to the computed scrollbar width (`padding-right: var(--scrollbar-width)`).
3. It handles nested scroll containers so that wheel events inside the modal still scroll its internal content without bubbling or unlocking the background.

---

## Concrete Gap 2: Incomplete Outside-Tree Inactivity (`aria-hidden` / `inert`) vs Edge Focus Leaks

### The Handcrafted Approach
The bespoke modal implements an active keydown focus trap:
```tsx
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Tab") {
    // Cycles focus between first and last focusable elements in dialogRef
  }
};
```

### The shadcn / Radix Solution
While intercepting `Tab` prevents standard keyboard navigation from escaping, it leaves multiple vulnerability vectors:
1. **Screen Reader Virtual Cursors (NVDA / JAWS / VoiceOver):** Users navigating with arrow keys or screen-reader virtual buffers can navigate *past* DOM bounds unless outside DOM elements have `aria-hidden="true"` or the HTML standard `inert` attribute applied.
2. **Dynamic DOM Injections & Browser Address Bar Cycling:** Radix injects invisible boundary guard elements (`<span tabIndex={0} style={{ position: "fixed", opacity: 0 }} />`) before and after the portal root to trap browser-level focus shifts (e.g. `F6` or reverse tab from the address bar).
3. **`aria-hidden` Orchestration:** Radix uses `aria-hidden` on all sibling branches outside the modal container, safely restoring previous attribute values when the modal dismisses.

---

## Concrete Gap 3: Polymorphic Composition via `asChild` / Slot Pattern

### The Handcrafted Approach
The bespoke `Disclosure` and `Tabs` hardcode concrete HTML tags:
- `Disclosure` always renders a `<button>` trigger and a `<div>` panel.
- `Tabs` always renders `<div role="tablist">` with child `<button role="tab">` elements.

If a developer wants the trigger to be a custom styled link (`<Link href="...">`), a specialized button component, or an SVG container, they are forced to wrap or pass render props, violating semantic purity.

### The shadcn / Radix Solution
shadcn components leverage Radix's `@radix-ui/react-slot` (`asChild` pattern). By providing `asChild`, Radix merges its props, keyboard event handlers, and ARIA attributes directly onto whatever custom child element the developer provides, avoiding superfluous wrapper `<div>` elements and preserving clean CSS cascading.

---

## Concrete Gap 4: Right-to-Left (RTL) Bidirectional Keyboard Support

### The Handcrafted Approach
In `Tabs.tsx`, the arrow key logic assumes Left-to-Right layout:
```tsx
if (e.key === "ArrowRight") {
  nextIndex = (currentIndex + 1) % tabCount;
} else if (e.key === "ArrowLeft") {
  nextIndex = (currentIndex - 1 + tabCount) % tabCount;
}
```

### The shadcn / Radix Solution
In Right-to-Left (RTL) locales (such as Arabic or Hebrew), pressing `ArrowRight` should move to the *previous* tab, and `ArrowLeft` should advance to the *next* tab. Radix UI reads the computed reading direction via `dir="rtl"` / `DirectionContext` and dynamically flips the arrow key mappings:
```tsx
const isRtl = direction === "rtl";
const nextKey = isRtl ? "ArrowLeft" : "ArrowRight";
const prevKey = isRtl ? "ArrowRight" : "ArrowLeft";
```

---

## Concrete Gap 5: Portal Unmounting & Animated Exit Transitions

### The Handcrafted Approach
The bespoke modal immediately unmounts from the DOM when `isOpen` becomes `false`. As a result, CSS exit animations or fade-outs are impossible without complex external transition state machines.

### The shadcn / Radix Solution
Radix implements `@radix-ui/react-presence`. It detects CSS animation/transition end events (`onAnimationEnd`), keeping the element in the DOM until the exit animation concludes before cleanly detaching the portal.

---

## Summary Matrix

| Capability | Handcrafted Version | shadcn / Radix Primitives |
| :--- | :--- | :--- |
| **W3C Keyboard Navigation** | ✅ Full (Tab, Esc, Arrows, Home/End) | ✅ Full |
| **Roving Tabindex** | ✅ Explicit (`tabIndex={isActive ? 0 : -1}`) | ✅ Fully Managed |
| **Focus Trap** | ✅ Keydown Loop | ✅ Guards + `aria-hidden` + `inert` |
| **Return Focus on Dismiss** | ✅ Tracked Trigger Reference | ✅ Automated Anchor Tracking |
| **Prevent Scrollbar Layout Shift**| ❌ Basic `overflow: hidden` | ✅ Dynamic Width Margin Offset |
| **Bidirectional RTL Support** | ❌ Hardcoded LTR | ✅ Dynamic `dir` Detection |
| **Polymorphic Rendering** | ❌ Fixed Element Tags | ✅ `asChild` Slot Composition |
| **Exit Animation Lifecycle** | ❌ Instant Unmount | ✅ Presence State Machine |

---

*Authored by Marzia Syeda for the FlyRank Foundations Capstone.*
