import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Target, Handshake, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { COMPANY } from "@/lib/constants";
import { getLocalBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie Archivend GmbH kennen — Ihr kompetenter Partner für Immobilien, Bauprojekte und Luftfahrtservices in Günzburg. Seit 2020 stehen wir für Kompetenz, Transparenz und ganzheitlichen Service.",
  alternates: { canonical: "/ueber-uns" },
};

const VALUES = [
  {
    icon: Target,
    title: "Kompetenz & Erfahrung",
    text: "Seit der Gründung 2020 haben wir uns als verlässlicher Partner in der Region etabliert. Unser Team bringt tiefes Fachwissen in Immobilien, Baurecht und Luftfahrt mit.",
  },
  {
    icon: ShieldCheck,
    title: "Transparenz & Vertrauen",
    text: "Wir kommunizieren klar und ehrlich — ohne versteckte Kosten und ohne leere Versprechen. Unser Erfolg misst sich am Erfolg unserer Kunden.",
  },
  {
    icon: Handshake,
    title: "Ganzheitlicher Service",
    text: "Von der ersten Beratung bis zum erfolgreichen Abschluss: Wir begleiten Sie durch den gesamten Prozess und koordinieren alle Beteiligten.",
  },
];

export default function UeberUnsPage() {
  const schema = getLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

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
              Über uns
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Ihr verlässlicher Partner <br className="hidden md:block" />
            <span className="text-brand-accent">seit {COMPANY.foundedYear}</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Archivend GmbH verbindet Immobilien-Expertise mit Bauprojekt-Know-how
            und einzigartigen Luftfahrtservices — alles aus einer Hand.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block h-px w-8 bg-brand-accent" />
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent">
                    Unsere Geschichte
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6 tracking-tight">
                  Überlegene Bauwerte<br />kompetent betreut
                </h2>
                <p className="text-brand-text-muted mb-4 leading-relaxed">
                  Archivend GmbH wurde {COMPANY.foundedYear} mit einem klaren Ziel gegründet: Menschen in der Region
                  Günzburg und darüber hinaus mit fundierter Expertise bei Immobilien- und
                  Bauprojekten zu begleiten. Unser Geschäftsführer {COMPANY.legalRepresentative} bringt
                  langjährige Erfahrung in der Immobilienbranche mit und hat Archivend als Rundum-Dienstleister
                  aufgebaut.
                </p>
                <p className="text-brand-text-muted mb-6 leading-relaxed">
                  Was uns auszeichnet: Wir denken über den Tellerrand hinaus. Mit unserer Air Fly Division
                  bieten wir Luftbildaufnahmen für Exposés, Rundflüge und Kurierservices — eine Kombination,
                  die im Markt ihresgleichen sucht.
                </p>
                <ul className="space-y-3">
                  {[
                    "Persönliche Betreuung durch erfahrene Experten",
                    "Tiefe Marktkenntnis in der Region Günzburg",
                    "Netzwerk aus Handwerkern, Planern & Behörden",
                    "Luftbildaufnahmen direkt aus eigener Air Fly Division",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-brand-text-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="bg-brand-primary rounded-2xl p-8 md:p-10 text-white overflow-hidden relative">
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <p className="text-8xl font-black text-white/5 absolute top-4 right-6 select-none leading-none">
                    seit
                  </p>
                  <div className="relative">
                    <p className="text-brand-accent text-sm font-medium tracking-wider uppercase mb-2">Gegründet</p>
                    <p className="text-7xl font-black text-white mb-6 leading-none">{COMPANY.foundedYear}</p>
                    <p className="text-white/60 text-sm mb-8">Ihr verlässlicher Partner in der Region</p>
                    <div className="space-y-4">
                      {[
                        { value: "10+", label: "Jahre Erfahrung", sub: "kombiniert im Team" },
                        { value: "50+", label: "Objekte vermittelt", sub: "privat & gewerblich" },
                        { value: "3", label: "Geschäftsbereiche", sub: "Immobilien · Bau · Air Fly" },
                      ].map((stat, i) => (
                        <div key={i} className={`pb-4 ${i < 2 ? "border-b border-white/10" : ""}`}>
                          <span className="text-3xl font-black text-brand-accent">{stat.value}</span>
                          <span className="text-white font-semibold ml-3">{stat.label}</span>
                          <p className="text-white/50 text-xs mt-1">{stat.sub}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-brand-accent/80 text-sm italic">
                      &ldquo;{COMPANY.taglineEnglish}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="block h-px w-8 bg-brand-accent" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent">
                  Unsere Werte
                </span>
                <span className="block h-px w-8 bg-brand-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight">
                Was uns antreibt
              </h2>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((val) => (
              <StaggerItem key={val.title}>
                <div className="bg-white rounded-2xl p-8 border border-border hover:border-brand-accent/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-primary/10 mb-6">
                    <val.icon className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-3">{val.title}</h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed">{val.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Lassen Sie uns gemeinsam herausfinden, wie wir Ihnen am besten helfen können.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent-light text-brand-accent-foreground font-semibold">
                <Link href="/kontakt">
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/leistungen">Unsere Leistungen</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
