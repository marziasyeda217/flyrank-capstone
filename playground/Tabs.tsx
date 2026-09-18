import React, { useState, useRef, KeyboardEvent } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  ariaLabel: string;
  onChange?: (tabId: string) => void;
}

/**
 * W3C ARIA Compliant Tabs Pattern
 * - role="tablist"
 * - role="tab" with aria-selected, aria-controls, id, tabIndex (0 for selected, -1 for others)
 * - role="tabpanel" with aria-labelledby, id, tabIndex=0
 * - Keyboard navigation: ArrowRight / ArrowLeft roving tabindex with wrapping
 * - Home key moves to first non-disabled tab; End key moves to last non-disabled tab
 */
export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTabId,
  ariaLabel,
  onChange,
}) => {
  const initialId = defaultTabId || tabs[0]?.id || "";
  const [selectedTabId, setSelectedTabId] = useState<string>(initialId);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const handleSelectTab = (id: string) => {
    setSelectedTabId(id);
    onChange?.(id);
  };

  const enabledTabs = tabs.filter((t) => !t.disabled);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, currentId: string) => {
    const currentIndex = enabledTabs.findIndex((t) => t.id === currentId);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        nextIndex = (currentIndex + 1) % enabledTabs.length;
        break;
      case "ArrowLeft":
        e.preventDefault();
        nextIndex = (currentIndex - 1 + enabledTabs.length) % enabledTabs.length;
        break;
      case "Home":
        e.preventDefault();
        nextIndex = 0;
        break;
      case "End":
        e.preventDefault();
        nextIndex = enabledTabs.length - 1;
        break;
      default:
        return;
    }

    const nextTab = enabledTabs[nextIndex];
    if (nextTab) {
      handleSelectTab(nextTab.id);
      const nextButton = tabRefs.current.get(nextTab.id);
      nextButton?.focus();
    }
  };

  const activeTab = tabs.find((t) => t.id === selectedTabId);

  return (
    <div className="w-full space-y-3">
      {/* Tab List */}
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200"
      >
        {tabs.map((tab) => {
          const isSelected = tab.id === selectedTabId;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                if (el) tabRefs.current.set(tab.id, el);
                else tabRefs.current.delete(tab.id);
              }}
              id={`tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={isSelected}
              aria-controls={`tabpanel-${tab.id}`}
              tabIndex={isSelected ? 0 : -1}
              disabled={tab.disabled}
              onClick={() => handleSelectTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, tab.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                isSelected
                  ? "bg-white text-brand-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              } ${tab.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      {tabs.map((tab) => {
        const isSelected = tab.id === selectedTabId;
        if (!isSelected) return null;

        return (
          <div
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            tabIndex={0}
            className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 animate-in fade-in duration-150"
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
};
