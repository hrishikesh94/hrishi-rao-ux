import type { ReactNode } from "react";

interface TimelineProps {
  "aria-label": string;
  children: ReactNode;
}

export function Timeline({ "aria-label": ariaLabel, children }: TimelineProps) {
  return (
    <ol aria-label={ariaLabel} className="relative">
      {children}
    </ol>
  );
}

interface TimelineItemProps {
  year: string;
  "aria-label": string;
  isLast?: boolean;
  children: ReactNode;
}

export function TimelineItem({
  year,
  "aria-label": ariaLabel,
  isLast = false,
  children,
}: TimelineItemProps) {
  return (
    <li
      tabIndex={0}
      aria-label={ariaLabel}
      className="relative pl-8 pb-10 last:pb-0 group outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm"
    >
      {/* Dot */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-muted-foreground bg-background group-hover:border-accent-color group-focus-visible:border-accent-color transition-colors"
      />

      {/* Connecting line */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[5px] top-[18px] bottom-0 w-px bg-border"
        />
      )}

      {/* Year label */}
      <span className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2 block">
        {year}
      </span>

      {/* Content */}
      {children}
    </li>
  );
}
