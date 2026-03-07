import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Archivend GmbH in Günzburg. Wir beraten Sie persönlich zu Immobilien und Bauprojekten — kostenlos und unverbindlich.",
  keywords: [
    "Kontakt Archivend GmbH",
    "Immobilienmakler Günzburg Kontakt",
    "Beratung Immobilien Bayern",
  ],
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt | Archivend GmbH",
    description:
      "Kontaktieren Sie Archivend GmbH in Günzburg. Wir beraten Sie persönlich zu Immobilien und Bauprojekten — kostenlos und unverbindlich.",
    url: "/kontakt",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Kontakt — Archivend GmbH" }],
  },
};

export default function KontaktPage() {
  return (
    <>
      {/* ① Hero — Navy + Grid */}
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
              Kontakt
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Sprechen wir miteinander
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Ob Frage, Anfrage oder Beratungsgespräch — wir freuen uns auf Ihre Kontaktaufnahme.
            Persönlich, schnell und unverbindlich.
          </p>
        </div>
      </section>

      {/* ② Content — Navy + Dots */}
      <section className="py-16 md:py-24 bg-brand-primary relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container mx-auto px-6 md:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Formular — Card */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "var(--card)",
                  border: "1px solid oklch(1 0 0 / 0.12)",
                  boxShadow: "0 8px 48px oklch(0.16 0.03 258 / 0.5)",
                }}
              >
                {/* Gold top bar */}
                <div className="h-1 w-full" style={{ background: "var(--brand-accent)" }} />
                <div className="p-8 md:p-10">
                  <ContactFormSection />
                </div>
              </div>
            </div>

            {/* Kontaktdaten */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-6">
                  Direkter Kontakt
                </h2>

                <div className="space-y-4">
                  <a
                    href={`tel:${COMPANY.contact.phoneClean}`}
                    className="flex items-start gap-4 p-4 rounded-xl border border-white/12 hover:border-brand-accent/50 hover:bg-white/5 transition-all group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 transition-colors" style={{ background: "oklch(0.73 0.115 78 / 0.12)", border: "1px solid oklch(0.73 0.115 78 / 0.2)" }}>
                      <Phone className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white/50 uppercase tracking-wider mb-1">Telefon</p>
                      <p className="font-semibold text-white">{COMPANY.contact.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY.contact.email}`}
                    className="flex items-start gap-4 p-4 rounded-xl border border-white/12 hover:border-brand-accent/50 hover:bg-white/5 transition-all group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 transition-colors" style={{ background: "oklch(0.73 0.115 78 / 0.12)", border: "1px solid oklch(0.73 0.115 78 / 0.2)" }}>
                      <Mail className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white/50 uppercase tracking-wider mb-1">E-Mail</p>
                      <p className="font-semibold text-white">{COMPANY.contact.email}</p>
                    </div>
                  </a>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl border border-white/12 hover:border-brand-accent/50 hover:bg-white/5 transition-all group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 transition-colors" style={{ background: "oklch(0.73 0.115 78 / 0.12)", border: "1px solid oklch(0.73 0.115 78 / 0.2)" }}>
                      <MapPin className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white/50 uppercase tracking-wider mb-1">Adresse</p>
                      <p className="font-semibold text-white">{COMPANY.address.street}</p>
                      <p className="text-white/60 text-sm">{COMPANY.address.zip} {COMPANY.address.city}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl border border-white/12">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0" style={{ background: "oklch(0.73 0.115 78 / 0.12)", border: "1px solid oklch(0.73 0.115 78 / 0.2)" }}>
                      <Clock className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white/50 uppercase tracking-wider mb-1">Antwortzeit</p>
                      <p className="font-semibold text-white">Innerhalb von 24 h</p>
                      <p className="text-white/60 text-sm">Mo – Fr, 8:00 – 18:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-brand-accent/30" style={{ background: "oklch(0.73 0.115 78 / 0.08)" }}>
                <p className="text-brand-accent text-xs font-semibold tracking-wider uppercase mb-2">Unser Versprechen</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Jede Anfrage wird von uns persönlich und sorgfältig bearbeitet.
                  Kein Call-Center, keine automatischen Antworten — nur echte Beratung von echten Experten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
