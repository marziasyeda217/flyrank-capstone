import React, { useState } from "react";

export interface DisclosureProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
  badge?: string;
  onToggle?: (isOpen: boolean) => void;
}

/**
 * W3C ARIA Compliant Disclosure Component
 * - <button> with aria-expanded and aria-controls
 * - Region with id matching aria-controls
 * - Keyboard interaction: Enter and Space trigger button click natively
 * - Accessible SVG rotation indicator
 */
export const Disclosure: React.FC<DisclosureProps> = ({
  title,
  children,
  defaultOpen = false,
  id = "disclosure-content",
  badge,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    onToggle?.(nextState);
  };

  const contentId = `${id}-region`;
  const buttonId = `${id}-button`;

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={handleToggle}
          className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <span>{title}</span>
            {badge && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                {badge}
              </span>
            )}
          </div>
          <svg
            aria-hidden="true"
            className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </h3>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className={`px-5 pb-5 pt-1 text-sm text-slate-600 border-t border-slate-100 animate-in fade-in duration-150 ${
          !isOpen ? "hidden" : "block"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
