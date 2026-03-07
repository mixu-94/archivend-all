import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-primary">
      {/* Geometric SVG background pattern */}
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <pattern id="diag" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <line x1="0" y1="120" x2="120" y2="0" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, oklch(0.38 0.12 258 / 0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Gold diagonal accent bar */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10 origin-top-right"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, var(--brand-accent) 40%, var(--brand-accent) 42%, transparent 42%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="block h-px w-12" style={{ background: "var(--brand-accent)" }} />
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ color: "var(--brand-accent)" }}
              >
                Günzburg · Bayern
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ihr Partner für{" "}
              <span style={{ color: "var(--brand-accent)" }}>überlegene</span>{" "}
              Bauwerte
            </h1>

            {/* Divider */}
            <div className="w-20 h-1 mb-8 rounded-full" style={{ background: "var(--brand-accent)" }} />

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
              Professionelle Immobiliendienstleistungen und Bauprojektmanagement —
              von der Bewertung bis zur schlüsselfertigen Übergabe.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="font-semibold text-base px-8 py-6 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: "var(--brand-accent)",
                  color: "var(--brand-accent-foreground)",
                }}
              >
                <Link href="/leistungen">
                  Unsere Leistungen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold bg-transparent px-8 py-6 border-white/40 hover:bg-brand-accent/20 hover:border-brand-accent/60 transition-all duration-200"
                style={{ color: "white" }}
              >
                <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
              </Button>
            </div>

            {/* Mobile stats grid (hidden on lg+) */}
            <div className="grid grid-cols-2 gap-3 mt-8 lg:hidden">
              {[
                { value: "10+", label: "Jahre Erfahrung" },
                { value: "50+", label: "Objekte" },
                { value: "100%", label: "Zufriedenheit" },
                { value: "4+", label: "Referenzprojekte" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg p-3 text-center"
                  style={{
                    background: "oklch(1 0 0 / 0.06)",
                    border: "1px solid oklch(1 0 0 / 0.12)",
                  }}
                >
                  <span className="block text-xl font-bold" style={{ color: "var(--brand-accent)" }}>
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/60">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Quick contact line */}
            <div className="mt-12 flex items-center gap-3">
              <span className="block h-px w-8" style={{ background: "oklch(1 0 0 / 0.3)" }} />
              <a
                href={`tel:${COMPANY.contact.phoneClean}`}
                className="text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                {COMPANY.contact.phone}
              </a>
            </div>
          </div>

          {/* Right — Luxury house photo, bleeds to viewport right edge */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div
              className="relative h-[640px] overflow-hidden"
              style={{ marginRight: "calc(-50vw + 50%)" }}
            >
              <Image
                src="/images/hero-house.png"
                alt=""
                fill
                className="object-cover object-center"
                sizes="60vw"
                priority
              />

              {/* Dark tint — integrates photo with navy theme */}
              <div
                className="absolute inset-0"
                style={{ background: "oklch(0.18 0.07 258 / 0.28)" }}
              />

              {/* Left gradient fade — seamless blend into text column */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, var(--brand-primary) 0%, var(--brand-primary) 8%, oklch(0.27 0.096 258.5 / 0.55) 30%, transparent 62%)",
                }}
              />

              {/* Top fade */}
              <div
                className="absolute top-0 left-0 right-0 h-24"
                style={{ background: "linear-gradient(to bottom, var(--brand-primary), transparent)" }}
              />

              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-52"
                style={{ background: "linear-gradient(to top, var(--brand-primary), transparent)" }}
              />

              {/* Stats badge */}
              <div
                className="absolute bottom-6 left-6 right-6 flex items-center justify-between px-5 py-4 rounded-xl backdrop-blur-sm z-10"
                style={{
                  background: "oklch(0.27 0.096 258.5 / 0.85)",
                  border: "1px solid var(--brand-accent)",
                  boxShadow: "0 0 0 1px oklch(0.73 0.115 78 / 0.15), 0 4px 24px oklch(0 0 0 / 0.4)",
                }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold" style={{ color: "var(--brand-accent)" }}>10+</p>
                  <p className="text-xs text-white/70">Jahre Erfahrung</p>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <p className="text-2xl font-bold" style={{ color: "var(--brand-accent)" }}>50+</p>
                  <p className="text-xs text-white/70">Objekte</p>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <p className="text-2xl font-bold" style={{ color: "var(--brand-accent)" }}>100%</p>
                  <p className="text-xs text-white/70">Zufriedenheit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-white text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 text-white animate-bounce" />
      </div>
    </section>
  );
}
