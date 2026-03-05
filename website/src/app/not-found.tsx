import Link from "next/link";
import { SearchX, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-brand-surface py-24">
      <div className="container mx-auto px-6 md:px-10 text-center max-w-xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-primary/10 mb-8">
          <SearchX className="h-10 w-10 text-brand-accent" />
        </div>

        <p className="text-brand-accent text-sm font-semibold tracking-[0.3em] uppercase mb-3">
          Fehler 404
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight">
          Seite nicht gefunden
        </h1>

        <p className="text-brand-text-muted text-lg mb-8 leading-relaxed">
          Die gesuchte Seite existiert leider nicht mehr oder wurde verschoben.
          Vielleicht hilft Ihnen eine der folgenden Optionen weiter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-light text-white font-semibold">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zur Startseite
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-brand-text-muted">
          <Phone className="h-4 w-4 text-brand-accent" />
          <span>Oder rufen Sie uns direkt an:</span>
          <a href={`tel:${COMPANY.contact.phoneClean}`} className="font-semibold text-brand-primary hover:underline">
            {COMPANY.contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
