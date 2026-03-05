import Link from "next/link";
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
            <pattern
              id="grid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id="diag"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="120"
                x2="120"
                y2="0"
                stroke="white"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
      </div>

      {/* Gradient overlay — deep left, fades right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, oklch(0.38 0.12 258 / 0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Gold diagonal accent bar */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-10 origin-top-right"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, var(--brand-accent) 40%, var(--brand-accent) 42%, transparent 42%)",
        }}
        aria-hidden="true"
      />

      {/* Large decorative numeral */}
      <span
        className="absolute right-8 bottom-8 text-[20rem] font-bold leading-none select-none pointer-events-none"
        style={{ color: "oklch(1 0 0 / 0.025)", lineHeight: 1 }}
        aria-hidden="true"
      >
        A
      </span>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 py-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="block h-px w-12"
              style={{ background: "var(--brand-accent)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ color: "var(--brand-accent)" }}
            >
              Crailsheim · Baden-Württemberg
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ihr Partner für{" "}
            <span
              style={{
                color: "var(--brand-accent)",
                display: "inline-block",
              }}
            >
              überlegene
            </span>{" "}
            Bauwerte
          </h1>

          {/* Divider */}
          <div
            className="w-20 h-1 mb-8 rounded-full"
            style={{ background: "var(--brand-accent)" }}
          />

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
            Professionelle Immobiliendienstleistungen, Bauprojektmanagement und
            exklusive Luftfahrtservices — alles aus einer Hand.
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
              className="font-semibold text-base px-8 py-6 border-white/40 text-white hover:bg-white/10 hover:border-white transition-all duration-200"
            >
              <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
            </Button>
          </div>

          {/* Quick contact line */}
          <div className="mt-12 flex items-center gap-3">
            <span
              className="block h-px w-8"
              style={{ background: "oklch(1 0 0 / 0.3)" }}
            />
            <a
              href={`tel:${COMPANY.contact.phoneClean}`}
              className="text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              {COMPANY.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-white text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 text-white animate-bounce" />
      </div>
    </section>
  );
}
