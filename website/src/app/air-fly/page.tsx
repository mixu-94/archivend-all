import type { Metadata } from "next";
import Link from "next/link";
import { PlaneTakeoff, Zap, Camera, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { AIR_FLY_SERVICES, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Air Fly",
  description:
    "Archivend Air Fly Division: Rundflüge, Kurierflüge und professionelle Luftbildaufnahmen in der Region Schwäbisch Hall und Günzburg. Einzigartige Perspektiven für Immobilien und Bauprojekte.",
  keywords: [
    "Rundflüge Schwäbisch Hall",
    "Luftbildaufnahmen Günzburg",
    "Kurierflüge Bayern",
    "Drohnenaufnahmen Immobilien",
    "Luftbildfotografie",
    "Rundflug buchen Schwäbische Alb",
  ],
  alternates: { canonical: "/air-fly" },
  openGraph: {
    title: "Air Fly Division | Archivend GmbH",
    description:
      "Archivend Air Fly Division: Rundflüge, Kurierflüge und professionelle Luftbildaufnahmen in der Region Günzburg und Bayern. Einzigartige Perspektiven für Immobilien und Bauprojekte.",
    url: "/air-fly",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Air Fly Division — Archivend GmbH" }],
  },
};

const ICON_MAP: Record<string, React.ElementType> = {
  PlaneTakeoff,
  Zap,
  Camera,
};

const USPS = [
  "Ohne konventionelle Landebahn — maximale Flexibilität",
  "Professionelle Kamera-Ausrüstung für hochwertige Aufnahmen",
  "Direkter Anschluss an unsere Immobilien-Expertise",
  "Schnelle Verfügbarkeit und flexible Terminplanung",
  "Erfahrener Pilot mit Kenntnissen der Region",
];

export default function AirFlyPage() {
  return (
    <>
      {/* Hero */}
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
            <PlaneTakeoff className="h-5 w-5 text-brand-accent" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent">
              Air Fly Division
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Erleben Sie die Welt{" "}
            <span className="text-brand-accent">von oben</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Unsere Air Fly Division bietet Ihnen einzigartige Perspektiven —
            ob für Ihr Immobilien-Exposé, zeitkritischen Transport oder
            unvergessliche Rundflüge über die schwäbische Landschaft.
          </p>
          <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent-light text-brand-accent-foreground font-semibold">
            <Link href="/kontakt">
              Air Fly anfragen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="block h-px w-8 bg-brand-accent" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent">
                  Unsere Air Fly Services
                </span>
                <span className="block h-px w-8 bg-brand-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight">
                Drei Services, eine Division
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AIR_FLY_SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] ?? PlaneTakeoff;
              return (
                <StaggerItem key={service.id}>
                  <div className="bg-card rounded-2xl p-8 border border-border hover:border-brand-accent/40 hover:shadow-xl transition-all duration-300 h-full group">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-primary mb-6 group-hover:bg-brand-accent/20 transition-colors">
                      <Icon className="h-7 w-7 text-brand-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-4">{service.title}</h3>
                    <p className="text-brand-text-muted text-sm leading-relaxed">{service.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* USPs */}
      <section className="py-16 md:py-24 bg-brand-primary text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="container mx-auto px-6 md:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block h-px w-8 bg-brand-accent" />
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent">
                    Warum Air Fly
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  Maximale Flexibilität<br />aus der Luft
                </h2>
                <ul className="space-y-4">
                  {USPS.map((usp) => (
                    <li key={usp} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm leading-relaxed">{usp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <p className="text-brand-accent text-xs font-semibold tracking-wider uppercase mb-4">Perfekte Synergie</p>
                <h3 className="text-2xl font-bold text-white mb-4">Luftbilder für Ihr Exposé</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Als Immobiliendienstleister mit eigener Luftfahrt-Division bieten wir etwas Einzigartiges:
                  Professionelle Luftaufnahmen direkt aus unserem Haus. Keine Koordination mit externen
                  Dienstleistern, keine Wartezeiten — wir planen, fliegen und liefern in einem Zug.
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Das Ergebnis: Hochwertige Luftbilder, die Ihre Immobilie in der besten Perspektive zeigen
                  und Kaufinteressenten sofort überzeugen.
                </p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-brand-accent/80 text-sm italic">&ldquo;{COMPANY.taglineEnglish}&rdquo;</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4 tracking-tight">
              Interesse an Air Fly?
            </h2>
            <p className="text-brand-text-muted mb-8 text-lg max-w-lg mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Angebot — egal ob Rundflug,
              Luftbild oder Kurierservice.
            </p>
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-light text-white font-semibold">
              <Link href="/kontakt?interesse=Air+Fly">
                Air Fly anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
