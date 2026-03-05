import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

const GOLD = "oklch(0.73 0.115 78)";

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
              <span
                className="block h-px w-12"
                style={{ background: "var(--brand-accent)" }}
              />
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
            <div
              className="w-20 h-1 mb-8 rounded-full"
              style={{ background: "var(--brand-accent)" }}
            />

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
              Professionelle Immobiliendienstleistungen, Bauprojektmanagement
              und exklusive Luftfahrtservices — alles aus einer Hand.
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

          {/* Right — Blueprint floor plan */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "oklch(0.18 0.065 258)" }}
            >
              <svg
                viewBox="0 0 480 520"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-[520px]"
              >
                <defs>
                  <pattern
                    id="hero-bp-fine"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.3"
                      strokeOpacity="0.12"
                    />
                  </pattern>
                  <pattern
                    id="hero-bp-major"
                    width="100"
                    height="100"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect width="100" height="100" fill="url(#hero-bp-fine)" />
                    <path
                      d="M 100 0 L 0 0 0 100"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.6"
                      strokeOpacity="0.18"
                    />
                  </pattern>
                </defs>

                {/* Blueprint grid */}
                <rect width="480" height="520" fill="url(#hero-bp-major)" />

                {/* ── Outer walls (L-shape) ── */}
                <polyline
                  points="70,70 390,70 390,240 300,240 300,420 70,420 70,70"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeOpacity="0.85"
                  strokeLinejoin="miter"
                />

                {/* ── Interior walls ── */}
                <g stroke="white" fill="none" strokeOpacity="0.65">
                  {/* Main vertical divider */}
                  <line x1="210" y1="70" x2="210" y2="420" strokeWidth="2" />
                  {/* Main horizontal divider */}
                  <line x1="70" y1="200" x2="390" y2="200" strokeWidth="2" />
                  {/* Bathroom/guest divider */}
                  <line x1="210" y1="280" x2="300" y2="280" strokeWidth="1.5" />
                </g>

                {/* ── Doors ── */}
                <g
                  stroke="white"
                  fill="none"
                  strokeWidth="0.8"
                  strokeOpacity="0.42"
                >
                  {/* Living → hallway */}
                  <line x1="210" y1="148" x2="238" y2="148" />
                  <path d="M 210,148 A 28,28 0 0,1 238,120" />
                  {/* Bedroom */}
                  <line x1="210" y1="310" x2="238" y2="310" />
                  <path d="M 210,310 A 28,28 0 0,1 238,282" />
                  {/* Front entry */}
                  <line x1="110" y1="420" x2="138" y2="420" />
                  <path d="M 110,420 A 28,28 0 0,0 138,392" />
                </g>

                {/* ── Windows ── */}
                <g
                  stroke="white"
                  fill="none"
                  strokeWidth="1.2"
                  strokeOpacity="0.42"
                >
                  {/* Top wall — left window */}
                  <line x1="100" y1="70" x2="160" y2="70" />
                  <line x1="103" y1="66" x2="103" y2="74" />
                  <line x1="157" y1="66" x2="157" y2="74" />
                  {/* Top wall — right window */}
                  <line x1="250" y1="70" x2="355" y2="70" />
                  <line x1="253" y1="66" x2="253" y2="74" />
                  <line x1="352" y1="66" x2="352" y2="74" />
                  {/* Right wall */}
                  <line x1="390" y1="95" x2="390" y2="162" />
                  <line x1="386" y1="98" x2="394" y2="98" />
                  <line x1="386" y1="159" x2="394" y2="159" />
                  {/* Left wall */}
                  <line x1="70" y1="275" x2="70" y2="365" />
                  <line x1="66" y1="278" x2="74" y2="278" />
                  <line x1="66" y1="362" x2="74" y2="362" />
                </g>

                {/* ── Dimension lines — gold ── */}
                <g stroke={GOLD} fill={GOLD} strokeWidth="0.9" opacity="0.82">
                  {/* Total width */}
                  <line x1="70" y1="46" x2="390" y2="46" />
                  <line x1="70" y1="41" x2="70" y2="51" />
                  <line x1="390" y1="41" x2="390" y2="51" />
                  <text
                    x="230"
                    y="43"
                    textAnchor="middle"
                    fontSize="9.5"
                    fontFamily="monospace"
                    fontWeight="600"
                    fill={GOLD}
                  >
                    16.00 m
                  </text>

                  {/* Total height */}
                  <line x1="46" y1="70" x2="46" y2="420" />
                  <line x1="41" y1="70" x2="51" y2="70" />
                  <line x1="41" y1="420" x2="51" y2="420" />
                  <text
                    x="14"
                    y="248"
                    textAnchor="middle"
                    fontSize="9.5"
                    fontFamily="monospace"
                    fontWeight="600"
                    fill={GOLD}
                    transform="rotate(-90,14,248)"
                  >
                    17.50 m
                  </text>

                  {/* Left room width (dashed) */}
                  <line
                    x1="70"
                    y1="183"
                    x2="210"
                    y2="183"
                    strokeDasharray="3,2"
                    strokeOpacity="0.5"
                  />
                  <line x1="70" y1="179" x2="70" y2="187" />
                  <line x1="210" y1="179" x2="210" y2="187" />
                  <text
                    x="140"
                    y="181"
                    textAnchor="middle"
                    fontSize="8.5"
                    fontFamily="monospace"
                    fill={GOLD}
                  >
                    7.00 m
                  </text>
                </g>

                {/* ── Room labels ── */}
                <g fontFamily="monospace" fill="white" textAnchor="middle">
                  <text x="140" y="126" fontSize="10.5" fillOpacity="0.48">
                    Wohnzimmer
                  </text>
                  <text x="140" y="140" fontSize="8" fillOpacity="0.25">
                    28 m²
                  </text>

                  <text x="300" y="118" fontSize="10.5" fillOpacity="0.48">
                    Küche /
                  </text>
                  <text x="300" y="132" fontSize="10.5" fillOpacity="0.48">
                    Esszimmer
                  </text>
                  <text x="300" y="146" fontSize="8" fillOpacity="0.25">
                    24 m²
                  </text>

                  <text x="102" y="223" fontSize="9" fillOpacity="0.38">
                    Flur
                  </text>

                  <text x="140" y="318" fontSize="10.5" fillOpacity="0.48">
                    Schlafzimmer
                  </text>
                  <text x="140" y="332" fontSize="8" fillOpacity="0.25">
                    18 m²
                  </text>

                  <text x="255" y="259" fontSize="9.5" fillOpacity="0.42">
                    Gästezimmer
                  </text>
                  <text x="255" y="271" fontSize="7.5" fillOpacity="0.22">
                    12 m²
                  </text>

                  <text x="255" y="355" fontSize="9.5" fillOpacity="0.42">
                    Bad
                  </text>
                  <text x="255" y="367" fontSize="7.5" fillOpacity="0.22">
                    8 m²
                  </text>
                </g>

                {/* ── Staircase ── */}
                <g
                  transform="translate(155,204)"
                  stroke="white"
                  strokeWidth="0.7"
                  strokeOpacity="0.32"
                  fill="none"
                >
                  <rect width="42" height="30" />
                  <line x1="0" y1="6" x2="42" y2="6" />
                  <line x1="0" y1="12" x2="42" y2="12" />
                  <line x1="0" y1="18" x2="42" y2="18" />
                  <line x1="0" y1="24" x2="42" y2="24" />
                  <line
                    x1="21"
                    y1="3"
                    x2="21"
                    y2="26"
                    stroke={GOLD}
                    strokeOpacity="0.55"
                    strokeWidth="0.9"
                  />
                  <polygon
                    points="21,1 18,7 24,7"
                    fill={GOLD}
                    fillOpacity="0.55"
                  />
                </g>

                {/* ── Compass rose ── */}
                <g transform="translate(430,104)">
                  <circle
                    cx="0"
                    cy="0"
                    r="20"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.6"
                    strokeOpacity="0.18"
                  />
                  <polygon
                    points="0,-16 3.5,-7 -3.5,-7"
                    fill={GOLD}
                    fillOpacity="0.78"
                  />
                  <polygon
                    points="0,16 3.5,7 -3.5,7"
                    fill="white"
                    fillOpacity="0.18"
                  />
                  <polygon
                    points="16,0 7,3.5 7,-3.5"
                    fill="white"
                    fillOpacity="0.18"
                  />
                  <polygon
                    points="-16,0 -7,3.5 -7,-3.5"
                    fill="white"
                    fillOpacity="0.18"
                  />
                  <text
                    x="0"
                    y="-22"
                    textAnchor="middle"
                    fontSize="8"
                    fill={GOLD}
                    fontFamily="monospace"
                    fontWeight="700"
                  >
                    N
                  </text>
                </g>

                {/* ── Title block ── */}
                <g transform="translate(315,298)">
                  <rect
                    width="150"
                    height="110"
                    rx="3"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.7"
                    strokeOpacity="0.16"
                  />
                  <line
                    x1="0"
                    y1="26"
                    x2="150"
                    y2="26"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.12"
                  />
                  <line
                    x1="0"
                    y1="52"
                    x2="150"
                    y2="52"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.12"
                  />
                  <text
                    x="75"
                    y="17"
                    textAnchor="middle"
                    fontSize="7.5"
                    fill={GOLD}
                    fontFamily="monospace"
                    fontWeight="700"
                    letterSpacing="1.5"
                  >
                    ARCHIVEND GMBH
                  </text>
                  <text
                    x="8"
                    y="39"
                    fontSize="8"
                    fill="white"
                    fillOpacity="0.38"
                    fontFamily="monospace"
                  >
                    Grundriss Erdgeschoss
                  </text>
                  <text
                    x="8"
                    y="64"
                    fontSize="7"
                    fill="white"
                    fillOpacity="0.25"
                    fontFamily="monospace"
                  >
                    Maßstab: 1 : 100
                  </text>
                  <text
                    x="8"
                    y="77"
                    fontSize="7"
                    fill="white"
                    fillOpacity="0.25"
                    fontFamily="monospace"
                  >
                    Projekt: Musterhaus
                  </text>
                  <text
                    x="8"
                    y="90"
                    fontSize="7"
                    fill="white"
                    fillOpacity="0.25"
                    fontFamily="monospace"
                  >
                    Datum: 2025-03-05
                  </text>
                  <text
                    x="8"
                    y="103"
                    fontSize="7"
                    fill="white"
                    fillOpacity="0.25"
                    fontFamily="monospace"
                  >
                    Blatt: 01 / 03
                  </text>
                </g>
              </svg>

              {/* Stats badge */}
              <div
                className="absolute bottom-6 left-6 right-6 flex items-center justify-between px-5 py-4 rounded-xl backdrop-blur-sm"
                style={{ background: "oklch(0.27 0.096 258.5 / 0.85)" }}
              >
                <div className="text-center">
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "var(--brand-accent)" }}
                  >
                    10+
                  </p>
                  <p className="text-xs text-white/70">Jahre Erfahrung</p>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "var(--brand-accent)" }}
                  >
                    50+
                  </p>
                  <p className="text-xs text-white/70">Objekte</p>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "var(--brand-accent)" }}
                  >
                    100%
                  </p>
                  <p className="text-xs text-white/70">Zufriedenheit</p>
                </div>
              </div>
            </div>
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
