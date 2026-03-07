import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REFERENCE_PROJECTS } from "@/lib/constants";

export function ReferencesSection() {
  const featured = REFERENCE_PROJECTS.slice(0, 3);

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--brand-primary)" }}
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Diagonal accent band */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, transparent 50%, oklch(0.38 0.12 258 / 0.5) 50%, oklch(0.38 0.12 258 / 0.5) 100%)",
        }}
      />

      {/* Gold top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "var(--brand-accent)" }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Building2
                className="h-5 w-5"
                style={{ color: "var(--brand-accent)" }}
              />
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ color: "var(--brand-accent)" }}
              >
                Portfolio
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Referenzen —{" "}
              <span style={{ color: "var(--brand-accent)" }}>
                Projekte die für sich sprechen
              </span>
            </h2>
          </div>
          <div>
            <p className="text-white/60 text-lg leading-relaxed">
              Eine Auswahl abgeschlossener Bauprojekte und Immobilienvorhaben
              aus unserer Region — von der Planung bis zur Fertigstellung.
            </p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-all duration-300 hover:bg-white/5"
            >
              {/* Placeholder image area — fotobereit via next/image */}
              {/* TODO: Ersetze gradient durch next/image src="..." fill */}
              <div
                className="h-36 relative"
                style={{
                  background: "linear-gradient(135deg, oklch(0.22 0.08 258) 0%, oklch(0.32 0.12 258) 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2
                    className="h-10 w-10 opacity-20"
                    style={{ color: "var(--brand-accent)" }}
                  />
                </div>
                {/* Type badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    style={{
                      background: "var(--brand-accent)",
                      color: "oklch(0.16 0.03 258)",
                    }}
                  >
                    {project.type}
                  </span>
                </div>
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(225deg, var(--brand-accent) 0%, transparent 60%)",
                    borderTopRightRadius: "0.75rem",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-white/40 text-xs mb-2">{project.location} · {project.year}</p>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        background: "oklch(0.73 0.115 78 / 0.1)",
                        border: "1px solid oklch(0.73 0.115 78 / 0.2)",
                        color: "var(--brand-accent)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "var(--brand-accent)" }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Button
            asChild
            size="lg"
            className="font-semibold px-8 py-6 text-base hover:scale-[1.02] transition-transform duration-200 shadow-lg"
            style={{
              background: "var(--brand-accent)",
              color: "var(--brand-accent-foreground)",
            }}
          >
            <Link href="/referenzen">
              Alle Referenzen ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <span className="text-white/40 text-sm">
            Neubau · Sanierung · Projektentwicklung
          </span>
        </div>
      </div>
    </section>
  );
}
