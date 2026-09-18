# Architectural Comparison & Accessibility Audit: Handcrafted vs. shadcn/ui (Radix UI)

**Module:** Foundations Engineering · Component Accessibility Deep-Dive  
**Author:** Marzia Syeda  
**Components Evaluated:** Modal Dialog, Roving Tablist (Tabs), Expandable Disclosure  
**Location in Codebase:** `playground/` ([ModalDialog.tsx](playground/ModalDialog.tsx), [Tabs.tsx](playground/Tabs.tsx), [Disclosure.tsx](playground/Disclosure.tsx), [PlaygroundDemo.tsx](playground/PlaygroundDemo.tsx))  
**Interactive Route:** `/playground`

---

## 1. Executive Summary

To master assistive technology patterns and understand what AI code generators frequently miss, we implemented three core interactive widgets from scratch against the **W3C ARIA Authoring Practices Guide (APG)**:
1. **Modal Dialog:** `role="dialog"`, `aria-modal="true"`, focus trapping with Tab/Shift+Tab, Escape listener, body scroll-locking, and focus restoration to the invocation trigger.
2. **Tabs:** `role="tablist"`, `role="tab"`, and `role="tabpanel"` using a **roving `tabIndex`** pattern (active: `0`, inactive: `-1`), arrow key navigation (`←`/`→`) with wrapping, and `Home`/`End` shortcuts.
3. **Disclosure:** Native button toggle with `aria-expanded` and `aria-controls` linked to an accessible collapsible region.

After inspecting **shadcn/ui**'s source code (which builds on Radix UI primitives: `@radix-ui/react-dialog` and `@radix-ui/react-tabs`), we analyzed the architectural and production-readiness gaps between a naive custom implementation and a battle-tested library.

---

## 2. Component Implementation Verification (Keyboard-Only)

All three handcrafted components were strictly tested without mouse input:

| Component | Tested Key(s) | Expected ARIA Spec Behavior | Handcrafted Result |
| :--- | :--- | :--- | :---: |
| **Modal Dialog** | `Tab` / `Shift+Tab` | Traps focus inside the dialog; wraps from last element to first, and vice versa. | ✅ Pass |
| **Modal Dialog** | `Escape` | Immediately closes the dialog and stops propagation. | ✅ Pass |
| **Modal Dialog** | Focus Return | Focus automatically returns to the button that opened the modal upon dismissal. | ✅ Pass |
| **Tabs** | `ArrowRight` / `ArrowLeft` | Moves focus between tabs with automatic boundary wrap-around. | ✅ Pass |
| **Tabs** | `Home` / `End` | Jumps focus to first / last active tab in the tablist. | ✅ Pass |
| **Tabs** | `Tab` into panel | Skips inactive tabs (`tabIndex={-1}`) and focuses directly into the active tabpanel. | ✅ Pass |
| **Disclosure** | `Enter` / `Space` | Natively toggles collapsed/expanded state and synchronizes `aria-expanded`. | ✅ Pass |

---

## 3. Concrete Gaps Identified: What shadcn/ui Handled That We Missed

Reading the underlying Radix primitives in shadcn/ui revealed five critical production engineering gaps:

### Gap 1: Scrollbar Gutter Jitter & Layout Shift Compensation
- **Our Handcrafted Version:**  
  We implemented scroll locking naively via `document.body.style.overflow = "hidden"`.
- **The Failure:**  
  On Windows browsers (Chrome/Edge/Firefox with standard scrollbars), removing `overflow` causes the vertical scrollbar (~15–17px wide) to disappear instantly. This produces a jarring layout shift where the entire background website jerks to the right upon opening the dialog, and jerks back to the left on closing.
- **How shadcn / Radix Solves It:**  
  Radix utilizes `react-remove-scroll`. Before locking the body, it dynamically measures the scrollbar width:
  ```javascript
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  ```
  It injects dynamic padding compensation onto `document.body` to preserve layout geometry down to the exact pixel.

---

### Gap 2: Stacking Context & DOM Tree Clipping (Portal Mounting)
- **Our Handcrafted Version:**  
  Our dialog is mounted inline directly inside the React component hierarchy where it was declared.
- **The Failure:**  
  If any parent container has CSS properties like `overflow: hidden`, `transform: translate(...)`, `filter`, or `perspective`, CSS creates a **new stacking context and containing block**. Consequently, `position: fixed` ceases to be relative to the viewport and becomes trapped inside the parent container's dimensions.
- **How shadcn / Radix Solves It:**  
  Radix wraps dialog content in `<DialogPrimitive.Portal>`, teleporting the DOM nodes directly under `document.body` via `ReactDOM.createPortal`. Crucially, it manages this while preserving React's synthetic event bubbling and Context tree hierarchies.

---

### Gap 3: Mobile Screen Reader Leaks & Nested Inert Boundaries
- **Our Handcrafted Version:**  
  We trapped keyboard focus using a standard `keydown` event listener checking `e.key === "Tab"`.
- **The Failure:**  
  While this works for desktop keyboard users, **mobile assistive technologies** (iOS VoiceOver or Android TalkBack) do not navigate using the `Tab` key. Instead, users swipe left/right to move through the accessibility tree. Because the background elements are still visible in the accessibility tree, a VoiceOver swipe can easily escape our modal and read elements behind the backdrop!
- **How shadcn / Radix Solves It:**  
  Radix dynamically applies `aria-hidden="true"` and modern HTML `inert` attributes to all sibling root elements outside the open dialog. Furthermore, Radix maintains an internal **FocusScope stack** with sentinel guard elements (`<span data-radix-focus-guard />`) that intercept focus at the document boundaries and bounce it back safely, even when stacking multiple dialogs or dropdowns.

---

### Gap 4: Polymorphic Composition via the `asChild` Pattern (`@radix-ui/react-slot`)
- **Our Handcrafted Version:**  
  Our components enforce hard-coded DOM elements:
  ```tsx
  // Rigid element generation:
  <button onClick={onClose}>✕</button>
  ```
- **The Failure:**  
  If a consumer wants the trigger to be a Next.js `<Link href="/login">` or a custom icon component, they must write hacky wrappers or nested buttons (which violates HTML semantics by nesting `<button>` inside `<button>`).
- **How shadcn / Radix Solves It:**  
  Radix provides the `asChild` prop backed by `@radix-ui/react-slot`. When `asChild` is set to true, Radix merges props, classes, event handlers, and ARIA attributes directly onto the single child element without adding an extra DOM wrapper:
  ```tsx
  <DialogTrigger asChild>
    <Link href="/new-task">Create Task</Link>
  </DialogTrigger>
  ```

---

### Gap 5: Right-to-Left (RTL) Localization & Dual Activation Modes
- **Our Handcrafted Version:**  
  In `Tabs.tsx`, pressing `ArrowRight` unconditionally increments the tab index (`currentIndex + 1`).
- **The Failure:**  
  In Right-to-Left writing systems (Arabic, Hebrew, Persian), visual order is reversed. Pressing `ArrowRight` should navigate to the *previous* tab visually. In our custom version, the navigation direction is backwards in RTL locales.
- **How shadcn / Radix Solves It:**  
  Radix checks the `dir` attribute (or a `DirectionProvider` context) and flips arrow navigation automatically. Furthermore, Radix supports both `activationMode="automatic"` (selection follows focus) and `activationMode="manual"` (focus moves with arrows, selection requires Space/Enter), which is required by the W3C spec for heavy tab panels that trigger expensive network fetches.

---

## 4. TypeScript Typing Standards

All handcrafted components in `playground/` avoid `any` escapes:
- Props are strongly typed with explicit interfaces (`ModalDialogProps`, `TabsProps`, `TabItem`, `DisclosureProps`).
- Event handlers are typed with specific React synthetic events (`React.KeyboardEvent<HTMLButtonElement>`).
- Element references use explicit HTML generics: `useRef<HTMLDivElement | null>(null)`.

```bash
# Verification Command:
npx tsc --noEmit
# Result: 0 errors
```

---

## 5. Key Engineering Takeaways

1. **Accessibility is not just HTML attributes:** Adding `role="dialog"` is trivial; handling scrollbar jumps, portaled stacking contexts, sentinel focus guards, and mobile screen reader barriers is where 90% of real accessibility engineering occurs.
2. **AI code requires rigorous review:** AI tools readily produce accessible-looking markup that completely falls apart under actual keyboard navigation and screen reader audits.
3. **Libraries like shadcn/Radix are battle-hardened for a reason:** Using headless primitives like Radix is not "lazy"—it provides tested edge-case handling for layout shift, stacking contexts, and internationalization that takes hundreds of hours to replicate correctly from scratch.
