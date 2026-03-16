import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export function ContactCTASection() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--brand-accent)" }}
    >
      {/* Geometric overlay */}
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="cta-lines"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 80"
                fill="none"
                stroke="black"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-lines)" />
        </svg>
      </div>

      {/* Large decorative text */}
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[16rem] font-bold leading-none select-none pointer-events-none hidden xl:block"
        style={{ color: "oklch(0 0 0 / 0.04)" }}
        aria-hidden="true"
      >
        Kontakt
      </span>

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left */}
          <div className="text-center lg:text-left">
            <p
              className="text-sm font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "var(--on-accent-muted)" }}
            >
              Bereit für Ihren nächsten Schritt?
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{
                color: "var(--brand-accent-foreground)",
                letterSpacing: "-0.02em",
              }}
            >
              Nehmen Sie jetzt{" "}
              <br className="hidden md:block" />
              Kontakt auf
            </h2>
            <p
              className="text-base max-w-md"
              style={{ color: "var(--on-accent-muted)" }}
            >
              Ob Immobilienkauf, Bauprojekt oder Bewertung — wir beraten Sie
              persönlich und unverbindlich. Kostenlose Erstberatung auf Wunsch.
            </p>
          </div>

          {/* Right — Contact options */}
          <div className="flex flex-col gap-4 w-full max-w-sm">
            {/* Phone */}
            <a
              href={`tel:${COMPANY.contact.phoneClean}`}
              className="flex items-center gap-4 rounded-xl px-6 py-4 bg-white/20 hover:bg-white/30 transition-colors duration-200 group"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/30"
              >
                <Phone
                  className="h-5 w-5"
                  style={{ color: "var(--brand-accent-foreground)" }}
                />
              </div>
              <div>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--on-accent-muted)" }}
                >
                  Telefon
                </p>
                <p
                  className="font-semibold"
                  style={{ color: "var(--brand-accent-foreground)" }}
                >
                  {COMPANY.contact.phone}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${COMPANY.contact.email}`}
              className="flex items-center gap-4 rounded-xl px-6 py-4 bg-white/20 hover:bg-white/30 transition-colors duration-200 group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/30">
                <Mail
                  className="h-5 w-5"
                  style={{ color: "var(--brand-accent-foreground)" }}
                />
              </div>
              <div>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--on-accent-muted)" }}
                >
                  E-Mail
                </p>
                <p
                  className="font-semibold"
                  style={{ color: "var(--brand-accent-foreground)" }}
                >
                  {COMPANY.contact.email}
                </p>
              </div>
            </a>

            {/* Contact page button */}
            <Button
              asChild
              size="lg"
              className="font-semibold mt-2"
              style={{
                background: "var(--brand-primary)",
                color: "white",
              }}
            >
              <Link href="/kontakt">
                Kontaktformular öffnen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
