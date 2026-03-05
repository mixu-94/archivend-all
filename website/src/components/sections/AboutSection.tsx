import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const VALUES = [
  {
    title: "Kompetenz & Erfahrung",
    description:
      "Jahrelange Branchenerfahrung in Immobilien, Bauprojekten und Luftfahrt — für fundierte Entscheidungen.",
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
  { value: "3", label: "Geschäftsbereiche" },
] as const;

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
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
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--brand-text)", letterSpacing: "-0.02em" }}
            >
              Überlegene Bauwerte{" "}
              <span style={{ color: "var(--brand-primary)" }}>
                kompetent betreut
              </span>
            </h2>

            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--brand-text-muted)" }}
            >
              Die Archivend GmbH ist ein modernes Immobilienunternehmen mit Sitz
              in Crailsheim. Wir stehen für professionelle Kompetenz bei der
              Vermittlung und Verwaltung von Immobilien sowie bei der
              Abwicklung von Bauprojekten.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "var(--brand-text-muted)" }}
            >
              Unser Anspruch: Jeder Auftrag wird mit derselben Sorgfalt und
              Leidenschaft betreut. Mit unserem einzigartigen Air-Fly-Service
              bieten wir zusätzlich exklusive Luftfahrtlösungen für
              Privatpersonen und Unternehmen.
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
                    <p
                      className="font-semibold text-sm mb-1"
                      style={{ color: "var(--brand-text)" }}
                    >
                      {value.title}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--brand-text-muted)" }}
                    >
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
                background: "var(--brand-primary)",
                color: "white",
              }}
            >
              <Link href="/ueber-uns">
                Mehr über uns
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right — Decorative stats panel */}
          <div className="relative">
            {/* Main card */}
            <div
              className="relative rounded-2xl p-10 overflow-hidden"
              style={{ background: "var(--brand-primary)" }}
            >
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern
                      id="about-grid"
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-grid)" />
                </svg>
              </div>

              {/* Headline */}
              <div className="relative">
                <span
                  className="block text-6xl font-bold mb-1 select-none"
                  style={{
                    color: "oklch(1 0 0 / 0.05)",
                    fontSize: "clamp(4rem, 8vw, 7rem)",
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  seit
                </span>
                <p className="text-white/70 text-sm mb-8 -mt-2">
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
                      <span className="text-white/70 text-base">{stat.label}</span>
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
                    &ldquo;Your assignment is our passion&rdquo;
                  </p>
                  <p className="text-white/50 text-xs mt-1">
                    — Archivend GmbH, Crailsheim
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div
              className="absolute -bottom-5 -left-5 w-28 h-28 rounded-xl flex items-center justify-center shadow-lg"
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
