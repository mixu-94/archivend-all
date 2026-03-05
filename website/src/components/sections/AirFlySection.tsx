import Link from "next/link";
import { PlaneTakeoff, Zap, Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AIR_FLY_SERVICES } from "@/lib/constants";

const ICON_MAP = {
  PlaneTakeoff,
  Zap,
  Camera,
} as const;

type AirFlyIconName = keyof typeof ICON_MAP;

export function AirFlySection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--brand-primary)" }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="airfly-dots"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="12" cy="12" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#airfly-dots)" />
        </svg>
      </div>

      {/* Diagonal accent band */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, transparent 50%, oklch(0.38 0.12 258 / 0.5) 50%, oklch(0.38 0.12 258 / 0.5) 100%)",
        }}
      />

      {/* Gold top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "var(--brand-accent)" }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <PlaneTakeoff
                className="h-5 w-5"
                style={{ color: "var(--brand-accent)" }}
              />
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ color: "var(--brand-accent)" }}
              >
                Air Fly Division
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Erleben Sie die Welt{" "}
              <span style={{ color: "var(--brand-accent)" }}>
                von oben
              </span>
            </h2>
          </div>
          <div>
            <p className="text-white/60 text-lg leading-relaxed">
              Unser einzigartiger Air-Fly-Service bietet Ihnen exklusive
              Luftfahrterlebnisse und professionelle Flugdienstleistungen —
              von malerischen Rundflügen bis hin zu schnellen Kuriertransporten.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {AIR_FLY_SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon as AirFlyIconName];
            return (
              <div
                key={service.id}
                className="group relative rounded-xl p-8 border border-white/10 hover:border-brand-accent/50 transition-all duration-300 hover:bg-white/5"
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(225deg, var(--brand-accent) 0%, transparent 60%)",
                    borderTopRightRadius: "0.75rem",
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl"
                  style={{
                    background: "oklch(0.73 0.115 78 / 0.15)",
                    border: "1px solid oklch(0.73 0.115 78 / 0.3)",
                  }}
                >
                  {Icon && (
                    <Icon
                      className="h-7 w-7"
                      style={{ color: "var(--brand-accent)" }}
                    />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover line */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: "var(--brand-accent)" }}
                />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Button
            asChild
            size="lg"
            className="font-semibold px-8 py-6 text-base hover:scale-[1.02] transition-transform duration-200 shadow-lg"
            style={{
              background: "var(--brand-accent)",
              color: "var(--brand-accent-foreground)",
            }}
          >
            <Link href="/air-fly">
              Air Fly entdecken
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <span className="text-white/40 text-sm">
            Flexible Buchung · Professionelle Crews
          </span>
        </div>
      </div>
    </section>
  );
}
