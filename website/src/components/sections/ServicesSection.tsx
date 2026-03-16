import Link from "next/link";
import {
  Building2,
  Handshake,
  Home,
  FileText,
  ClipboardList,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  Building2,
  Handshake,
  Home,
  FileText,
  ClipboardList,
  TrendingUp,
} as const;

type IconName = keyof typeof ICON_MAP;

const DARK = "var(--on-accent)";
const DARK_MID = "var(--on-accent-muted)";

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gold-Zone — Header */}
      <div
        className="relative pt-24 md:pt-32 pb-20 md:pb-28"
        style={{ background: "var(--brand-accent)" }}
      >
        {/* Subtle diagonal texture */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="services-diag"
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
            <rect width="100%" height="100%" fill="url(#services-diag)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-10 relative">
          {/* Section Header */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-px w-10" style={{ background: DARK }} />
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ color: DARK }}
              >
                Was wir bieten
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: DARK, letterSpacing: "-0.02em" }}
            >
              Unsere Leistungen
            </h2>
            <p className="text-lg" style={{ color: DARK_MID }}>
              Sechs spezialisierte Leistungsbereiche — vom ersten Beratungsgespräch
              bis zum erfolgreichen Abschluss. Persönlich betreut, professionell
              abgewickelt.
            </p>
          </div>
        </div>

        {/* Diagonal SVG divider — navy cuts into gold */}
        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
          style={{ height: 48 }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 1200 48" preserveAspectRatio="none" className="w-full h-full">
            <polygon points="0,48 1200,0 1200,48" style={{ fill: "var(--brand-primary)" }} />
          </svg>
        </div>
      </div>

      {/* Navy-Zone — Cards */}
      <div
        className="pt-10 md:pt-14 pb-24 md:pb-32"
        style={{ background: "var(--brand-primary)" }}
      >
        <div className="container mx-auto px-6 md:px-10">
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.icon as IconName];
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className={cn(
                    "group relative rounded-xl p-8 border border-white/8 transition-all duration-300",
                    "hover:-translate-y-1 hover:shadow-2xl hover:border-brand-accent/40"
                  )}
                  style={{
                    background: "var(--brand-primary)",
                    boxShadow: "0 4px 24px var(--shadow-sm)",
                  }}
                >
                  {/* Index number — gold shimmer on hover */}
                  <span
                    className="absolute top-6 right-8 text-5xl font-bold leading-none select-none pointer-events-none transition-all duration-300 opacity-[0.06] group-hover:opacity-100"
                    style={{ color: "var(--brand-accent)" }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Gold accent bar on left */}
                  <div
                    className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full transition-all duration-300 group-hover:top-4 group-hover:bottom-4"
                    style={{ background: "var(--brand-accent)" }}
                  />

                  {/* Icon — gold on navy bg */}
                  <div
                    className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg transition-colors duration-300"
                    style={{
                      background: "var(--accent-fill)",
                      border: "1px solid var(--accent-border)",
                    }}
                  >
                    {Icon && (
                      <Icon
                        className="h-6 w-6"
                        style={{ color: "var(--brand-accent)" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <h3
                    className="text-lg font-bold mb-3 text-white transition-colors duration-200"
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-1">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "var(--brand-accent)" }}
                    >
                      Mehr erfahren
                    </span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5"
                      style={{ color: "var(--brand-accent)" }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA to full services page */}
          <div className="mt-14 text-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:gap-3 hover:text-white"
              style={{ color: "var(--brand-accent)" }}
            >
              Alle Leistungen im Überblick
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
