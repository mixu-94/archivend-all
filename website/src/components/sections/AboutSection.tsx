import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

const VALUES = [
  {
    title: "Kompetenz & Erfahrung",
    description:
      "Jahrelange Branchenerfahrung in Immobilien und Bauprojekten — für fundierte Entscheidungen.",
  },
  {
    title: "Transparenz & Vertrauen",
    description:
      "Klare Kommunikation und ehrliche Beratung stehen bei uns an erster Stelle. Keine versteckten Kosten.",
  },
  {
    title: "Ganzheitlicher Service",
    description:
      "Von der Bewertung über die Vermarktung bis zum Abschluss — alles aus einer kompetenten Hand.",
  },
] as const;

const STATS = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "50+", label: "Objekte vermittelt" },
  { value: "2", label: "Geschäftsbereiche" },
] as const;

export function AboutSection() {
  return (
    <section
      className="py-24 md:py-32 overflow-hidden relative"
      style={{ background: "var(--brand-primary)" }}
    >
      {/* Blueprint grid (white, fine + major) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="about-sec-fine"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="white"
                strokeWidth="0.3"
                strokeOpacity="0.1"
              />
            </pattern>
            <pattern
              id="about-sec-major"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100" height="100" fill="url(#about-sec-fine)" />
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="white"
                strokeWidth="0.6"
                strokeOpacity="0.16"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-sec-major)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text content */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="block h-px w-10"
                style={{ background: "var(--brand-accent)" }}
              />
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ color: "var(--brand-accent)" }}
              >
                Über uns
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              Überlegene Bauwerte{" "}
              <span style={{ color: "var(--brand-accent)" }}>
                kompetent betreut
              </span>
            </h2>

            <p className="text-lg leading-relaxed mb-6 text-white/70">
              Die Archivend GmbH ist ein modernes Immobilienunternehmen mit Sitz
              in Günzburg, Bayern. Seit unserer Gründung 2015 stehen wir für
              verlässliche Expertise bei Immobilientransaktionen und Bauprojekten
              in der Region.
            </p>
            <p className="text-base leading-relaxed mb-10 text-white/70">
              Unser Anspruch: Kein Auftrag ist zu klein, kein Projekt zu komplex.
              Mit unserem starken Partner-Netzwerk für Hausverwaltung und
              Komplettservice bieten wir alles aus einer Hand.
            </p>

            {/* Value Propositions */}
            <ul className="flex flex-col gap-5 mb-10">
              {VALUES.map((value) => (
                <li key={value.title} className="flex items-start gap-4">
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 shrink-0"
                    style={{ color: "var(--brand-accent)" }}
                  />
                  <div>
                    <p className="font-semibold text-sm mb-1 text-white">
                      {value.title}
                    </p>
                    <p className="text-sm leading-relaxed text-white/60">
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="font-semibold px-7"
              style={{
                background: "var(--brand-accent)",
                color: "var(--brand-accent-foreground)",
              }}
            >
              <Link href="/ueber-uns">
                Mehr über uns
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right — Cream stats panel on navy background */}
          <div className="relative">
            {/* Dark navy card */}
            <div
              className="relative rounded-2xl p-10 overflow-hidden"
              style={{ background: "oklch(0.20 0.07 258)" }}
            >
              {/* Blueprint grid inside card */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
              >
                <svg width="100%" height="100%">
                  <defs>
                    <pattern
                      id="about-card-fine"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.3"
                        strokeOpacity="0.08"
                      />
                    </pattern>
                    <pattern
                      id="about-card-major"
                      width="100"
                      height="100"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        width="100"
                        height="100"
                        fill="url(#about-card-fine)"
                      />
                      <path
                        d="M 100 0 L 0 0 0 100"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.6"
                        strokeOpacity="0.14"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#about-card-major)"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative">
                <span
                  className="block font-bold mb-1 select-none"
                  style={{
                    color: "oklch(1 0 0 / 0.04)",
                    fontSize: "clamp(4rem, 8vw, 7rem)",
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  seit
                </span>
                <p
                  className="text-sm mb-8 -mt-2 text-white/50"
                >
                  Ihr verlässlicher Partner
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 gap-8">
                  {STATS.map((stat, i) => (
                    <div
                      key={stat.label}
                      className="flex items-baseline gap-4 pb-8 last:pb-0"
                      style={{
                        borderBottom:
                          i < STATS.length - 1
                            ? "1px solid oklch(1 0 0 / 0.1)"
                            : "none",
                      }}
                    >
                      <span
                        className="text-5xl font-bold leading-none"
                        style={{ color: "var(--brand-accent)" }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-base text-white/70">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom quote */}
                <div
                  className="mt-8 pt-8"
                  style={{ borderTop: "1px solid oklch(1 0 0 / 0.1)" }}
                >
                  <p
                    className="text-sm italic"
                    style={{ color: "var(--brand-accent)" }}
                  >
                    &ldquo;{COMPANY.taglineEnglish}&rdquo;
                  </p>
                  <p className="text-xs mt-1 text-white/40">
                    — Archivend GmbH, Günzburg
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent card — top-right, away from quote */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-xl flex items-center justify-center shadow-lg"
              style={{ background: "var(--brand-accent)" }}
            >
              <div className="text-center">
                <span
                  className="block text-3xl font-bold leading-none"
                  style={{ color: "var(--brand-accent-foreground)" }}
                >
                  #1
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: "oklch(0.16 0.03 258 / 0.7)" }}
                >
                  Region
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
