import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Handshake,
  Home,
  FileText,
  ClipboardList,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Professionelle Immobiliendienstleistungen in Günzburg und der Region: Bauprojektservices, Vertragsvermittlung, Immobilienhandel, Gutachten, Verkaufsorganisation und Immobilienbewertung.",
  keywords: [
    "Bauprojekte Günzburg",
    "Immobilienbewertung",
    "Immobilienmakler Günzburg",
    "Bauwertgutachten",
    "Immobilienexposé",
    "Vertragsvermittlung Bau",
  ],
  alternates: { canonical: "/leistungen" },
};

const ICON_MAP: Record<string, React.ElementType> = {
  Building2,
  Handshake,
  Home,
  FileText,
  ClipboardList,
  TrendingUp,
};

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-primary py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, white 39px, white 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, white 39px, white 40px)",
          }}
        />
        <div className="container mx-auto px-6 md:px-10 relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="block h-px w-8 bg-brand-accent" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent">
              Leistungen
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Was wir für Sie tun
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Von der Immobilienbewertung bis zur schlüsselfertigen Projektabwicklung —
            wir begleiten Sie mit Kompetenz und persönlichem Einsatz.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-10">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.icon] ?? Building2;
              return (
                <StaggerItem key={service.id}>
                  <div
                    id={service.id}
                    className="bg-white rounded-2xl p-8 border border-border hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 h-full scroll-mt-24"
                  >
                    <div className="flex items-start gap-5 mb-6">
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-primary shrink-0">
                        <Icon className="h-7 w-7 text-brand-accent" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-brand-text-muted tracking-wider uppercase">
                          {String(index + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                        </span>
                        <h2 className="text-xl font-bold text-brand-text mt-1">{service.title}</h2>
                      </div>
                    </div>
                    <p className="text-brand-text-muted leading-relaxed mb-4 text-sm">
                      {service.longDescription}
                    </p>
                    <div className="flex items-center gap-2 text-brand-accent text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Persönliche Beratung inklusive</span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="block h-px w-8 bg-brand-accent" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent">
                  Ablauf
                </span>
                <span className="block h-px w-8 bg-brand-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight">
                So arbeiten wir
              </h2>
            </div>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Erstgespräch", text: "Kostenlose Erstberatung, in der wir Ihre Situation und Ziele verstehen." },
              { step: "02", title: "Analyse", text: "Wir analysieren den Markt, das Objekt und alle relevanten Faktoren." },
              { step: "03", title: "Strategie", text: "Gemeinsam entwickeln wir den optimalen Plan für Ihr Vorhaben." },
              { step: "04", title: "Umsetzung", text: "Wir begleiten Sie bis zum erfolgreichen Abschluss — persönlich und zuverlässig." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-brand-accent text-brand-accent font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-accent">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4 tracking-tight">
              Welche Leistung interessiert Sie?
            </h2>
            <p className="text-brand-primary/70 mb-8 text-lg">
              Nehmen Sie jetzt Kontakt auf — wir beraten Sie kostenlos und unverbindlich.
            </p>
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-light text-white font-semibold">
              <Link href="/kontakt">
                Jetzt beraten lassen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
