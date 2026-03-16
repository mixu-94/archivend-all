const STATS = [
  { value: "10+", label: "Jahre Erfahrung", sub: "in der Branche" },
  { value: "50+", label: "Objekte vermittelt", sub: "privat & gewerblich" },
  { value: "100%", label: "Kundenzufriedenheit", sub: "unser Versprechen" },
  { value: "4+", label: "Referenz-Projekte", sub: "Neubau · Sanierung · Entwicklung" },
] as const;

const DARK = "var(--on-accent)";
const DARK_MID = "var(--on-accent-muted)";
const DARK_SUBTLE = "var(--on-accent-faint)";

export function StatsSection() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: "var(--brand-accent)" }}
    >
      {/* Subtle diagonal texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="stats-diag"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="40"
                x2="40"
                y2="0"
                stroke={DARK}
                strokeWidth="0.5"
                strokeOpacity="0.07"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-diag)" />
        </svg>
      </div>

      {/* Top / bottom hairlines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: DARK_SUBTLE }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: DARK_SUBTLE }}
      />

      <div className="container mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="relative flex flex-col items-center text-center lg:items-start lg:text-left px-0 lg:px-8"
            >
              {/* Vertical separator (desktop) */}
              {index < STATS.length - 1 && (
                <div
                  className="absolute right-0 top-2 bottom-2 w-px hidden lg:block"
                  style={{ background: DARK_SUBTLE }}
                  aria-hidden="true"
                />
              )}

              {/* Value */}
              <span
                className="text-5xl md:text-6xl font-bold leading-none mb-2"
                style={{ color: DARK }}
              >
                {stat.value}
              </span>

              {/* Label */}
              <span className="text-sm font-semibold" style={{ color: DARK }}>
                {stat.label}
              </span>

              {/* Sub */}
              <span className="text-xs mt-1" style={{ color: DARK_MID }}>
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
