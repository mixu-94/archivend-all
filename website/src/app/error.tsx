"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-brand-surface py-24">
      <div className="container mx-auto px-6 md:px-10 text-center max-w-xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-destructive/10 mb-8">
          <AlertTriangle className="h-10 w-10 text-destructive" />
        </div>

        <p className="text-destructive text-sm font-semibold tracking-[0.3em] uppercase mb-3">
          Fehler aufgetreten
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight">
          Etwas ist schiefgelaufen
        </h1>

        <p className="text-brand-text-muted text-lg mb-8 leading-relaxed">
          Leider ist beim Laden dieser Seite ein Fehler aufgetreten.
          Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={reset}
            className="bg-brand-primary hover:bg-brand-primary-light text-white font-semibold"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Seite neu laden
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zur Startseite
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
