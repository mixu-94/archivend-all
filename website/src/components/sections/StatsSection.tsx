import { Separator } from "@/components/ui/separator";

const STATS = [
  { value: "10+", label: "Jahre Erfahrung", sub: "in der Branche" },
  { value: "50+", label: "Objekte vermittelt", sub: "privat & gewerblich" },
  { value: "100%", label: "Kundenzufriedenheit", sub: "unser Versprechen" },
  { value: "3", label: "Geschäftsbereiche", sub: "Immobilien · Bau · Air Fly" },
] as const;

export function StatsSection() {
  return (
    <section className="py-16 bg-white border-y border-border">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {STATS.map((stat, index) => (
            <div key={stat.label} className="relative flex flex-col items-center text-center lg:items-start lg:text-left px-0 lg:px-8">
              {/* Vertical separator (desktop) */}
              {index < STATS.length - 1 && (
                <div
                  className="absolute right-0 top-2 bottom-2 w-px hidden lg:block"
                  style={{ background: "var(--brand-border, oklch(0.89 0.01 258))" }}
                  aria-hidden="true"
                />
              )}

              {/* Value */}
              <span
                className="text-5xl md:text-6xl font-bold leading-none mb-2"
                style={{ color: "var(--brand-accent)" }}
              >
                {stat.value}
              </span>

              {/* Label */}
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--brand-text)" }}
              >
                {stat.label}
              </span>

              {/* Sub */}
              <span
                className="text-xs mt-1"
                style={{ color: "var(--brand-text-muted)" }}
              >
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
