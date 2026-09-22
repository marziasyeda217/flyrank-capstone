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
            Built from scratch by Marzia Syeda with zero component libraries to demonstrate complete mastery of keyboard navigation, focus management, and accessibility tree semantics.
          </p>
          <div className="p-3 bg-slate-50 rounded-lg text-xs font-mono text-slate-700 border border-slate-200">
            Keyboard test: Press ArrowLeft / ArrowRight to switch tabs. Focus wraps around; Tab moves directly into the tabpanel!
          </div>
        </div>
      ),
    },
    {
      id: "specs",
      label: "W3C ARIA Patterns",
      content: (
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800">Patterns Implemented</h4>
          <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li><strong>Dialog (Modal):</strong> <code>role="dialog"</code>, <code>aria-modal="true"</code>, focus trap, Escape dismissal, and return-to-trigger focus.</li>
            <li><strong>Tabs:</strong> <code>role="tablist"</code>, <code>role="tab"</code>, <code>role="tabpanel"</code> with roving <code>tabIndex</code> (0 vs -1).</li>
            <li><strong>Disclosure:</strong> <code>aria-expanded</code>, <code>aria-controls</code>, native button Space/Enter triggers.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "shadcn",
      label: "shadcn/ui Gaps",
      content: (
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800">Key Production Gaps Identified</h4>
          <p className="text-sm text-slate-600">
            Check <code className="font-semibold text-brand-600">NOTES.md</code> for a deep dive into scrollbar gutter compensation, DOM portal stacking contexts, polymorphic slots, and inert attributes.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-card p-6 border border-brand-border shadow-subtle">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600 font-mono">
          Accessibility Foundations · Handcrafted
        </span>
        <h1 className="text-2xl font-bold text-slate-900 mt-1">
          W3C ARIA Interactive Components
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Strictly tested keyboard-only: Modal focus trap, arrow-key tab roving, and disclosure toggles.
        </p>
      </div>

      {/* Component 1: Modal Dialog */}
      <section className="bg-white rounded-card p-6 border border-brand-border shadow-subtle space-y-4">
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
          <span className="font-bold text-brand-700">Keyboard Controls:</span>
          <span>Open modal. Press <kbd className="bg-white px-1.5 py-0.5 rounded border font-mono">Tab</kbd> to cycle forward. Press <kbd className="bg-white px-1.5 py-0.5 rounded border font-mono">Shift+Tab</kbd> to cycle backward. Press <kbd className="bg-white px-1.5 py-0.5 rounded border font-mono">Escape</kbd> to dismiss.</span>
        </div>

        <ModalDialog
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Create New Sprint Task"
          description="Notice how pressing Tab stays trapped within this modal until dismissed."
          triggerRef={openModalButtonRef}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Task created successfully!");
              setIsModalOpen(false);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Task Title *
              </label>
              <input
                type="text"
                placeholder="e.g. Optimize Face-API landmark model"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Estimated Hours
              </label>
              <input
                type="number"
                defaultValue={4}
                min={1}
                max={100}
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
                Save Task
              </button>
            </div>
          </form>
        </ModalDialog>
      </section>

      {/* Component 2: Tabs */}
      <section className="bg-white rounded-card p-6 border border-brand-border shadow-subtle space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">2. Accessible Tabs Component</h2>
          <p className="text-xs text-slate-500">
            Roving tabindex (0 for selected, -1 for inactive). Arrow key navigation with wrap-around.
          </p>
        </div>

        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
          <span className="font-bold text-brand-700">Keyboard Controls:</span>
          <span>Focus any tab. Use <kbd className="bg-white px-1.5 py-0.5 rounded border font-mono">←</kbd> and <kbd className="bg-white px-1.5 py-0.5 rounded border font-mono">→</kbd> keys to cycle tabs. Press <kbd className="bg-white px-1.5 py-0.5 rounded border font-mono">Home</kbd> / <kbd className="bg-white px-1.5 py-0.5 rounded border font-mono">End</kbd> to jump.</span>
        </div>

        <Tabs tabs={sampleTabs} ariaLabel="Playground Documentation Tabs" />
      </section>

      {/* Component 3: Disclosure */}
      <section className="bg-white rounded-card p-6 border border-brand-border shadow-subtle space-y-4">
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
              When the modal opens, we store <code>document.activeElement</code> into a ref. When the modal dismisses, the cleanup hook calls <code>.focus()</code> on the saved trigger element.
            </p>
          </Disclosure>

          <Disclosure
            title="Why use roving tabindex for Tabs instead of normal tab ordering?"
            badge="ARIA Pattern"
          >
            <p className="leading-relaxed">
              Under the W3C ARIA Tab pattern, the tablist is treated as a single compound widget in the tab order. Inactive tabs have <code>tabIndex=-1</code>, so pressing <kbd className="px-1 py-0.5 bg-slate-100 rounded border text-xs">Tab</kbd> jumps directly into the tabpanel.
            </p>
          </Disclosure>
        </div>
      </section>
    </div>
  );
}
