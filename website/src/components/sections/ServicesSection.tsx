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

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-surface">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="block h-px w-10"
              style={{ background: "var(--brand-accent)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ color: "var(--brand-accent)" }}
            >
              Was wir bieten
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
            style={{ color: "var(--brand-text)", letterSpacing: "-0.02em" }}
          >
            Unsere Leistungen
          </h2>
          <p className="text-lg" style={{ color: "var(--brand-text-muted)" }}>
            Sechs spezialisierte Leistungsbereiche — vom ersten Beratungsgespräch
            bis zum erfolgreichen Abschluss. Persönlich betreut, professionell
            abgewickelt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon as IconName];
            return (
              <Link
                key={service.id}
                href={service.href}
                className={cn(
                  "group relative bg-card rounded-xl p-8 border transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-xl",
                  "border-border hover:border-brand-accent/30"
                )}
                style={
                  {
                    "--tw-shadow-color": "oklch(0.27 0.096 258.5 / 0.1)",
                  } as React.CSSProperties
                }
              >
                {/* Index number — decorative */}
                <span
                  className="absolute top-6 right-8 text-5xl font-bold leading-none select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-[0.04]"
                  style={{ color: "var(--brand-primary)" }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Gold accent bar on left */}
                <div
                  className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full transition-all duration-300 group-hover:top-4 group-hover:bottom-4"
                  style={{ background: "var(--brand-accent)" }}
                />

                {/* Icon */}
                <div
                  className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg transition-colors duration-300"
                  style={{
                    background: "oklch(0.27 0.096 258.5 / 0.08)",
                  }}
                >
                  {Icon && (
                    <Icon
                      className="h-6 w-6 transition-colors duration-300 group-hover:text-brand-primary"
                      style={{ color: "var(--brand-primary)" }}
                    />
                  )}
                </div>

                {/* Content */}
                <h3
                  className="text-lg font-bold mb-3 transition-colors duration-200 group-hover:text-brand-primary"
                  style={{ color: "var(--brand-text)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--brand-text-muted)" }}
                >
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
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:gap-3"
            style={{ color: "var(--brand-primary)" }}
          >
            Alle Leistungen im Überblick
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
