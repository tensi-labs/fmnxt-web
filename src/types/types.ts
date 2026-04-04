export type HoverDetail = {
  badge: string;
  updated: string;
  meta: string;
  summary: string;
  bullets: string[];
};

/** Soft info panel for course tooltips (cool mist → warm ivory). */
export const courseTooltipStyle = {
  maxWidth: 320,
  background: 'linear-gradient(155deg, #e8edf6 0%, #fafbfd 52%, #f6f2ea 100%)',
  border: '1px solid rgba(100, 116, 139, 0.22)',
  borderRadius: 12,
  boxShadow: '0 14px 32px rgba(15, 23, 42, 0.07)',
  padding: '12px 14px'
} as const;
