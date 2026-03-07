import type { Metadata } from "next";
import Link from "next/link";
import { Building2, MapPin, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { REFERENCE_PROJECTS, COMPANY } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Abgeschlossene Bauprojekte und Immobilien-Referenzen der Archivend GmbH aus Bayern. Neubau, Sanierung und Projektentwicklung — von der Planung bis zur Fertigstellung.",
  keywords: [
    "Bauprojekte Bayern",
    "Referenzen Neubau",
    "Sanierung Günzburg",
    "Projektentwicklung Bayern",
    "Immobilien Referenzen",
    "Bauprojektmanagement Günzburg",
  ],
  alternates: { canonical: "/referenzen" },
  openGraph: {
    title: "Referenzen | Archivend GmbH",
    description:
      "Abgeschlossene Bauprojekte und Immobilien-Referenzen der Archivend GmbH. Neubau, Sanierung und Projektentwicklung in Bayern.",
    url: "/referenzen",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Referenzen — Archivend GmbH" }],
  },
};

const DARK = "oklch(0.16 0.03 258)";
const DARK_MID = "oklch(0.16 0.03 258 / 0.65)";

const PROCESS_STEPS = [
  { step: "01", title: "Planung", text: "Bedarfsanalyse, Konzept und vollständige Bauplanung gemeinsam mit Architekten und Ingenieuren." },
  { step: "02", title: "Genehmigung", text: "Koordination aller behördlichen Verfahren und Sicherstellung der rechtlichen Grundlagen." },
  { step: "03", title: "Bau", text: "Vergabe an qualifizierte Handwerksbetriebe, Qualitätskontrolle und Terminmanagement." },
  { step: "04", title: "Fertigstellung", text: "Abnahme, Dokumentation und optional: Übergabe an Hausverwaltung oder Käufer." },
];

export default function ReferenzenPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Referenzen", url: "/referenzen" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {/* ① Hero — Navy + Grid */}
      <section className="bg-brand-primary py-16 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, white 39px, white 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, white 39px, white 40px)",
          }}
        />
        {/* Gold diagonal accent */}
        <div
          className="absolute top-0 right-0 w-96 h-full opacity-10"
          style={{
            background: "linear-gradient(135deg, transparent 40%, oklch(0.73 0.115 78) 100%)",
          }}
        />
        <div className="container mx-auto px-6 md:px-10 relative">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="h-5 w-5 text-brand-accent" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent">
              Portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Unsere{" "}
            <span className="text-brand-accent">Referenzen</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Von der Planung bis zur Fertigstellung — eine Auswahl abgeschlossener
            Bauprojekte und Immobilienvorhaben aus unserer Region.
          </p>
          <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent-light text-brand-accent-foreground font-semibold">
            <Link href="/kontakt">
              Ihr Projekt besprechen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ② Projekt-Cards — Gold + Diagonal */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ background: "var(--brand-accent)" }}
      >
        {/* Diagonal texture */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="ref-proj-diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="40" y2="0" stroke={DARK} strokeWidth="0.5" strokeOpacity="0.07" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ref-proj-diag)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-10 relative">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="block h-px w-8" style={{ background: DARK }} />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: DARK }}>
                  Abgeschlossene Projekte
                </span>
                <span className="block h-px w-8" style={{ background: DARK }} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: DARK }}>
                Projekte, die für sich sprechen
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REFERENCE_PROJECTS.map((project) => (
              <StaggerItem key={project.id}>
                <div className="bg-card rounded-2xl overflow-hidden border border-white/10 hover:border-brand-accent/40 hover:shadow-xl transition-all duration-300 group h-full">
                  {/* Placeholder image area — fotobereit via next/image */}
                  {/* TODO: Ersetze gradient durch next/image src="..." fill */}
                  <div
                    className="relative h-48 overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.22 0.08 258) 0%, oklch(0.32 0.12 258) 100%)",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2
                        className="h-16 w-16 opacity-20"
                        style={{ color: "var(--brand-accent)" }}
                      />
                    </div>
                    {/* Type badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: "var(--brand-accent)",
                          color: DARK,
                        }}
                      >
                        {project.type}
                      </span>
                    </div>
                    {/* Year badge */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-medium text-white/60 bg-white/10 px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-white/50 text-xs mb-3">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{project.location}</span>
                      <span className="mx-1">·</span>
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md"
                          style={{
                            background: "oklch(0.73 0.115 78 / 0.12)",
                            border: "1px solid oklch(0.73 0.115 78 / 0.25)",
                            color: "var(--brand-accent)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ③ Detail — Navy + Dots */}
      <section className="py-16 md:py-24 bg-brand-primary text-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container mx-auto px-6 md:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn direction="right">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block h-px w-8 bg-brand-accent" />
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent">
                    Unser Prozess
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
                  Das Komplettpaket —<br />von A bis Z
                </h2>
                <div className="space-y-6">
                  {PROCESS_STEPS.map((item) => (
                    <div key={item.step} className="flex items-start gap-5">
                      <span
                        className="text-2xl font-black leading-none shrink-0 w-10"
                        style={{ color: "var(--brand-accent)" }}
                      >
                        {item.step}
                      </span>
                      <div>
                        <p className="font-semibold text-white mb-1">{item.title}</p>
                        <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <p className="text-brand-accent text-xs font-semibold tracking-wider uppercase mb-4">
                    Partner-Netzwerk
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Hausverwaltung & Komplettservice
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    Nach der Fertigstellung Ihres Projekts kümmern wir uns optional
                    um die laufende Verwaltung — über unser starkes Partner-Netzwerk
                    für Hausverwaltung und Hausmeisterservice.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Mietverwaltung & Nebenkostenabrechnung",
                      "Hausmeisterservice & Instandhaltung",
                      "Mieterbetreuung & Kommunikation",
                      "Jahresabrechnungen & Reporting",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-brand-accent/80 text-sm italic">
                      &ldquo;{COMPANY.taglineEnglish}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ④ CTA — Gold + Diagonal */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        style={{ background: "var(--brand-accent)" }}
      >
        {/* Diagonal texture */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="ref-cta-diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="40" y2="0" stroke={DARK} strokeWidth="0.5" strokeOpacity="0.07" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ref-cta-diag)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 md:px-10 text-center relative">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: DARK }}>
              Ihr Projekt planen?
            </h2>
            <p className="mb-8 text-lg max-w-lg mx-auto" style={{ color: DARK_MID }}>
              Lassen Sie uns gemeinsam Ihr nächstes Bau- oder Immobilienprojekt
              besprechen — kostenlos und unverbindlich.
            </p>
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-light text-white font-semibold">
              <Link href="/kontakt">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
