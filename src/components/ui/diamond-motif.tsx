type Props = {
  className?: string;
};

/**
 * Abstract geometric accent echoing the facets of the CharEliz mark.
 * Used sparingly as a corner or edge detail on dark / light surfaces.
 */
export function DiamondCluster({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="140" y="10" width="60" height="60" transform="rotate(45 170 40)" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
      <rect x="90" y="40" width="40" height="40" transform="rotate(45 110 60)" fill="currentColor" fillOpacity="0.12" />
      <rect x="150" y="90" width="50" height="50" transform="rotate(45 175 115)" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
      <rect x="60" y="100" width="28" height="28" transform="rotate(45 74 114)" fill="currentColor" fillOpacity="0.18" />
      <rect x="170" y="150" width="34" height="34" transform="rotate(45 187 167)" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
    </svg>
  );
}

/** Fine blueprint-style grid used as a subtle background texture on dark sections. */
export function BlueprintGrid({ className = "" }: Props) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="blueprint-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
    </svg>
  );
}

/** Large faceted diamond outline, used as a hero-side graphic in place of photography. */
export function FacetMark({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className={className}>
      <polygon points="200,20 340,110 340,290 200,380 60,290 60,110" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
      <polygon points="200,20 340,110 200,200 60,110" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.5" />
      <line x1="200" y1="20" x2="200" y2="200" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="60" y1="110" x2="340" y2="110" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="200" y1="200" x2="200" y2="380" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
      <polygon points="200,200 340,290 200,380 60,290" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.5" />
    </svg>
  );
}
