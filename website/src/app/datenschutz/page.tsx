import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Archivend GmbH gemäß DSGVO.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <section className="py-16 md:py-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-10 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-2 tracking-tight">
          Datenschutzerklärung
        </h1>
        <p className="text-brand-text-muted mb-10 text-sm">
          Gemäß Art. 13 DSGVO (Datenschutz-Grundverordnung)
        </p>

        <div className="space-y-8 text-brand-text-muted text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">1. Verantwortlicher</h2>
            <p className="font-semibold text-brand-text">{COMPANY.name}</p>
            <p>{COMPANY.address.street}</p>
            <p>{COMPANY.address.zip} {COMPANY.address.city}</p>
            <p>{COMPANY.address.country}</p>
            <p className="mt-2">
              E-Mail:{" "}
              <a href={`mailto:${COMPANY.contact.email}`} className="text-brand-primary hover:underline">
                {COMPANY.contact.email}
              </a>
            </p>
            <p>
              Telefon:{" "}
              <a href={`tel:${COMPANY.contact.phoneClean}`} className="text-brand-primary hover:underline">
                {COMPANY.contact.phone}
              </a>
            </p>
            <p className="mt-2">Geschäftsführer: {COMPANY.legalRepresentative}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <h3 className="font-semibold text-brand-text mb-2">a) Beim Besuch unserer Website</h3>
            <p>
              Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser
              automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden
              temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne
              Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
            </ul>
            <p className="mt-3">
              Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an der Bereitstellung und Sicherheit der Website).
            </p>

            <h3 className="font-semibold text-brand-text mt-5 mb-2">b) Kontaktformular</h3>
            <p>
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail-Adresse,
              Telefonnummer, Interessensgebiet, Nachricht) zum Zweck der Bearbeitung der Anfrage und für den
              Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="mt-2">
              <strong>Zweck:</strong> Bearbeitung Ihrer Kontaktanfrage und Kommunikation mit Ihnen.
            </p>
            <p className="mt-1">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) und
              Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Abschicken des Formulars).
            </p>
            <p className="mt-1">
              <strong>Speicherdauer:</strong> Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage
              gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen (i.d.R. nach 3 Jahren).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">3. Cookies</h2>
            <p>
              Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der
              Website erforderlich sind. Wir setzen keine Tracking-Cookies, keine Analyse-Cookies und keine
              Werbe-Cookies ein. Es findet keine Weitergabe von Daten an Dritte zu Werbezwecken statt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">4. Weitergabe von Daten</h2>
            <p>
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten
              Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Sie Ihre nach Art. 6 Abs. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,</li>
              <li>die Weitergabe nach Art. 6 Abs. 1 lit. f DSGVO zur Wahrung berechtigter Interessen zulässig ist,</li>
              <li>für die Weitergabe nach Art. 6 Abs. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">5. Hosting</h2>
            <p>
              Diese Website wird bei einem deutschen bzw. europäischen Hosting-Anbieter gehostet. Die Verarbeitung
              erfolgt ausschließlich innerhalb der Europäischen Union. Mit dem Hosting-Anbieter besteht ein
              Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">6. Ihre Rechte</h2>
            <p>Sie haben das Recht:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen,</li>
              <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen,</li>
              <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen,</li>
              <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen,</li>
              <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten,</li>
              <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen,</li>
              <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">7. Widerspruchsrecht</h2>
            <p>
              Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1
              lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die
              Verarbeitung Ihrer personenbezogenen Daten einzulegen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">8. Datensicherheit</h2>
            <p>
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer)
              in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt
              wird. Die Übertragung Ihrer Daten über das Kontaktformular erfolgt verschlüsselt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">9. Kontakt bei Datenschutzfragen</h2>
            <p>
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten sowie bei
              Auskunfts-, Berichtigungs-, Sperrung- oder Löschungswünschen wenden Sie sich bitte an:
            </p>
            <p className="mt-2 font-semibold text-brand-text">{COMPANY.legalRepresentative}</p>
            <p>{COMPANY.name}</p>
            <p>{COMPANY.address.full}</p>
            <p>
              E-Mail:{" "}
              <a href={`mailto:${COMPANY.contact.email}`} className="text-brand-primary hover:underline">
                {COMPANY.contact.email}
              </a>
            </p>
          </div>

          <p className="text-xs text-brand-text-muted/60 pt-4 border-t border-border">
            Stand: März 2026
          </p>
        </div>
      </div>
    </section>
  );
}
