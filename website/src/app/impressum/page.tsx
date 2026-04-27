import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Archivend GmbH gemäß § 5 DDG.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <section className="py-16 md:py-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-10 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-2 tracking-tight">Impressum</h1>
        <p className="text-brand-text-muted mb-10 text-sm">Angaben gemäß § 5 DDG</p>

        <div className="space-y-8 text-brand-text-muted text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">Anbieter</h2>
            <p className="font-semibold text-brand-text">{COMPANY.name}</p>
            <p>{COMPANY.address.street}</p>
            <p>{COMPANY.address.zip} {COMPANY.address.city}</p>
            <p>{COMPANY.address.country}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">Vertreten durch</h2>
            <p>Geschäftsführer: {COMPANY.legalRepresentative}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">Kontakt</h2>
            <p>
              Telefon:{" "}
              <a href={`tel:${COMPANY.contact.phoneClean}`} className="text-brand-primary hover:underline">
                {COMPANY.contact.phone}
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a href={`mailto:${COMPANY.contact.email}`} className="text-brand-primary hover:underline">
                {COMPANY.contact.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">Handelsregistereintrag</h2>
            {COMPANY.registrationCourts.map((entry) => (
              <p key={entry.number}>{entry.court} · {entry.number}</p>
            ))}
            <p className="mt-1">EUID: {COMPANY.euid}</p>
          </div>

          {COMPANY.supervisoryAuthority && (
            <div>
              <h2 className="text-lg font-bold text-brand-text mb-3">Zuständige Aufsichtsbehörde</h2>
              <p>{COMPANY.supervisoryAuthority}</p>
            </div>
          )}

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">Unternehmensgegenstand</h2>
            <p>{COMPANY.businessPurpose}</p>
          </div>

          {COMPANY.vatId && (
            <div>
              <h2 className="text-lg font-bold text-brand-text mb-3">Umsatzsteuer-Identifikationsnummer</h2>
              <p>Gemäß § 27a UStG: {COMPANY.vatId}</p>
            </div>
          )}

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">Verbraucherstreitbeilegung</h2>
            <p>{COMPANY.consumerDisputeResolution.statement}</p>
          </div>

          <hr className="border-border" />

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten
              verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
              der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
              haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
              der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
              Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
