"use client";

import React, { useState, useRef } from "react";
import { ModalDialog } from "./ModalDialog";
import { Tabs } from "./Tabs";
import { Disclosure } from "./Disclosure";

export default function PlaygroundDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalButtonRef = useRef<HTMLButtonElement | null>(null);

  const sampleTabs = [
    {
      id: "overview",
      label: "Component Overview",
      content: (
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800">Handcrafted W3C ARIA Components</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            These three components were built from scratch with zero component libraries to deeply master keyboard navigation, focus management, and accessibility tree semantics.
          </p>
          <div className="p-3 bg-slate-50 rounded-lg text-xs font-mono text-slate-700 border border-slate-200">
            Keyboard test: Press ArrowLeft / ArrowRight to switch tabs. Notice how focus wraps around and the tab panel receives focus on Tab!
          </div>
        </div>
      ),
    },
    {
      id: "specs",
      label: "W3C ARIA Specs",
      content: (
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800">Compliant Patterns Implemented</h4>
          <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li><strong>Dialog (Modal):</strong> <code>role="dialog"</code>, <code>aria-modal="true"</code>, focus trap, Escape dismissal, and return-to-trigger focus.</li>
            <li><strong>Tabs:</strong> <code>role="tablist"</code>, <code>role="tab"</code>, <code>role="tabpanel"</code> with roving <code>tabIndex</code> (0 vs -1).</li>
            <li><strong>Disclosure:</strong> <code>aria-expanded</code>, <code>aria-controls</code>, native button Space/Enter triggers.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "comparison",
      label: "shadcn/ui Gaps",
      content: (
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800">Gaps Identified in NOTES.md</h4>
          <p className="text-sm text-slate-600">
            Read <code className="font-semibold text-brand-600">playground/NOTES.md</code> for a comprehensive analysis of portal rendering, scrollbar shift compensation, polymorphic slots, and inert attributes.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
          Accessibility Foundations Playground
        </span>
        <h1 className="text-2xl font-bold text-slate-900 mt-1">
          W3C ARIA Interactive Components
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Tested strictly keyboard-only: Modal focus trap, arrow-key tab roving, and disclosure toggles.
        </p>
      </div>

      {/* Component 1: Modal Dialog */}
      <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">1. Modal Dialog Component</h2>
            <p className="text-xs text-slate-500">
              Traps focus, closes on Escape, returns focus to trigger button on close.
            </p>
          </div>
          <button
            ref={openModalButtonRef}
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Open Modal (Test Focus Trap)
          </button>
        </div>

        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
          <span className="font-bold text-brand-700">Keyboard Instructions:</span>
          <span>Open the modal. Press <kbd className="bg-white px-1.5 py-0.5 rounded border shadow-xs font-mono">Tab</kbd> to cycle inside. Press <kbd className="bg-white px-1.5 py-0.5 rounded border shadow-xs font-mono">Shift+Tab</kbd> to cycle backward. Press <kbd className="bg-white px-1.5 py-0.5 rounded border shadow-xs font-mono">Escape</kbd> to dismiss.</span>
        </div>

        <ModalDialog
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Create New Sprint Milestone"
          description="Fill out the form below. Notice how pressing Tab stays trapped within this modal."
          triggerRef={openModalButtonRef}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Milestone saved!");
              setIsModalOpen(false);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Milestone Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Sprint 25 Alpha Release"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Target Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-sm transition"
              >
                Save Milestone
              </button>
            </div>
          </form>
        </ModalDialog>
      </section>

      {/* Component 2: Tabs */}
      <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">2. Accessible Tabs Component</h2>
          <p className="text-xs text-slate-500">
            Roving tabindex (0 for selected, -1 for inactive). Arrow key navigation with wrap-around.
          </p>
        </div>

        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
          <span className="font-bold text-brand-700">Keyboard Instructions:</span>
          <span>Focus any tab button. Use <kbd className="bg-white px-1.5 py-0.5 rounded border shadow-xs font-mono">←</kbd> and <kbd className="bg-white px-1.5 py-0.5 rounded border shadow-xs font-mono">→</kbd> keys to cycle tabs. Press <kbd className="bg-white px-1.5 py-0.5 rounded border shadow-xs font-mono">Home</kbd> / <kbd className="bg-white px-1.5 py-0.5 rounded border shadow-xs font-mono">End</kbd> to jump to extremes.</span>
        </div>

        <Tabs tabs={sampleTabs} ariaLabel="Playground Documentation Tabs" />
      </section>

      {/* Component 3: Disclosure */}
      <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">3. Accessible Disclosure / Accordion</h2>
          <p className="text-xs text-slate-500">
            Expandable section with aria-expanded and aria-controls. Space/Enter toggles.
          </p>
        </div>

        <div className="space-y-3">
          <Disclosure
            title="How does focus restoration work in the ModalDialog?"
            badge="Focus Management"
            defaultOpen={true}
          >
            <p className="leading-relaxed">
              When the modal opens, we save <code>document.activeElement</code> (or the provided <code>triggerRef</code>) into a ref. When the component unmounts or closes, our <code>useEffect</code> cleanup function calls <code>.focus()</code> on the saved element. This prevents the user&apos;s focus from resetting to the top of the body.
            </p>
          </Disclosure>

          <Disclosure
            title="Why use roving tabindex for Tabs instead of normal tab ordering?"
            badge="ARIA Pattern"
          >
            <p className="leading-relaxed">
              Under the W3C ARIA Tab pattern, a tablist acts as a single composite widget in the tab order. Only the active tab has <code>tabIndex=0</code>; inactive tabs have <code>tabIndex=-1</code>. Pressing <kbd className="px-1 py-0.5 bg-slate-100 rounded border text-xs">Tab</kbd> skips remaining tabs and jumps straight into the tabpanel. Users navigate between tabs using <kbd className="px-1 py-0.5 bg-slate-100 rounded border text-xs">ArrowLeft</kbd> and <kbd className="px-1 py-0.5 bg-slate-100 rounded border text-xs">ArrowRight</kbd>.
            </p>
          </Disclosure>
        </div>
      </section>
    </div>
  );
}
