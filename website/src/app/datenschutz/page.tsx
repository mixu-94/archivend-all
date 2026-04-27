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
            <h2 className="text-lg font-bold text-brand-text mb-3">
              2. Zugriff auf die Website und Server-Logfiles
            </h2>
            <p>
              Beim Aufrufen unserer Website verarbeitet unser Webserver bzw. Hosting-Dienstleister
              automatisch technische Verbindungsdaten, die für den sicheren Betrieb der Website erforderlich sind.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
            </ul>
            <p className="mt-3">
              Die Verarbeitung erfolgt zur Auslieferung der Website, zur Systemsicherheit sowie zur
              Missbrauchs- und Fehleranalyse. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">3. Kontaktformular und E-Mail-Kommunikation</h2>
            <p>
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail-Adresse,
              Telefonnummer, Interessensgebiet, Nachricht) verarbeitet, um Ihre Anfrage zu beantworten und die
              weitere Kommunikation mit Ihnen durchzuführen.
            </p>
            <p className="mt-2">
              Im Rahmen der Verarbeitung werden die Daten an unseren Website-Hoster bzw. Serverbetreiber und
              an den für den Mailversand eingesetzten E-Mail-/SMTP-Dienst übermittelt, soweit dies technisch
              erforderlich ist. Zusätzlich erhalten Sie nach Absenden des Formulars eine automatische
              Eingangsbestätigung an die von Ihnen angegebene E-Mail-Adresse.
            </p>
            <p className="mt-1">
              <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogenen oder
              vorvertraglichen Anfragen, im Übrigen Art. 6 Abs. 1 lit. f DSGVO für die Bearbeitung allgemeiner
              Kontaktanfragen. Die Bestätigung Ihrer Kenntnisnahme dieser Datenschutzhinweise dient der
              transparenten Information vor dem Absenden.
            </p>
            <p className="mt-1">
              <strong>Speicherdauer:</strong> Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage
              gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Geschäfts- und
              steuerrechtlich relevante Kommunikation kann entsprechend der gesetzlichen Fristen länger
              aufbewahrt werden.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">4. Lokale Speicherung im Browser</h2>
            <p>
              Diese Website verwendet nach aktuellem Stand keine Analyse-, Tracking- oder Werbe-Cookies.
              Es werden jedoch Einstellungen zur Darstellung der Website im Browser gespeichert, insbesondere
              die ausgewählte Farbvariante sowie die bevorzugte Darstellung des Hero-Bildes.
            </p>
            <p className="mt-2">
              Diese Speicherung erfolgt ausschließlich zur Bereitstellung der von Ihnen gewünschten
              Darstellungsfunktion auf Ihrem Endgerät. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG sowie
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">5. Externe Kommunikationsdienste</h2>
            <p>
              Auf unserer Website ist eine Schaltfläche zur Kontaktaufnahme über WhatsApp eingebunden.
              Wenn Sie diese Schaltfläche anklicken, verlassen Sie unsere Website und werden zu WhatsApp
              bzw. einem Dienst der Meta-Unternehmensgruppe weitergeleitet. Dabei können personenbezogene
              Daten, insbesondere Ihre IP-Adresse und Nutzungsdaten, durch den jeweiligen Anbieter verarbeitet
              werden.
            </p>
            <p className="mt-2">
              Für die weitere Datenverarbeitung durch WhatsApp ist ausschließlich deren Anbieter verantwortlich.
              Bitte beachten Sie die Datenschutzhinweise von WhatsApp, bevor Sie diesen Kommunikationsweg nutzen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">6. Empfänger und Weitergabe von Daten</h2>
            <p>
              Eine Weitergabe personenbezogener Daten erfolgt nur, soweit dies für den Betrieb der Website,
              die Bearbeitung Ihrer Anfrage oder zur Erfüllung gesetzlicher Pflichten erforderlich ist. Empfänger
              können insbesondere Hosting-Dienstleister, Serverbetreiber, E-Mail-/SMTP-Dienstleister und
              IT-Dienstleister sein, die wir im Rahmen einer Auftragsverarbeitung einsetzen.
            </p>
            <p className="mt-2">
              Eine Übermittlung zu Werbezwecken oder ein Verkauf personenbezogener Daten findet nicht statt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">7. Hosting</h2>
            <p>
              Unsere Website wird auf einem von uns genutzten Server bzw. bei einem beauftragten Hosting-Anbieter
              betrieben. Dabei werden die für den Betrieb der Website erforderlichen Daten verarbeitet. Sofern mit
              externen Dienstleistern personenbezogene Daten in unserem Auftrag verarbeitet werden, erfolgt dies auf
              Grundlage eines Vertrags zur Auftragsverarbeitung gemäß Art. 28 DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">8. Ihre Rechte</h2>
            <p>Sie haben das Recht:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen,</li>
              <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen,</li>
              <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen,</li>
              <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen,</li>
              <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten,</li>
              <li>gemäß Art. 7 Abs. 3 DSGVO eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen, soweit eine Verarbeitung auf Einwilligung beruht,</li>
              <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">9. Widerspruchsrecht</h2>
            <p>
              Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1
              lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die
              Verarbeitung Ihrer personenbezogenen Daten einzulegen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">10. Datensicherheit</h2>
            <p>
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige
              oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter
              zu schützen. Die Übertragung der Website erfolgt verschlüsselt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">11. Kontakt bei Datenschutzfragen</h2>
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

          <div>
            <h2 className="text-lg font-bold text-brand-text mb-3">12. Stand und Aktualisierung</h2>
            <p>
              Diese Datenschutzerklärung gilt für den aktuellen Stand dieser Website. Bei technischen oder
              rechtlichen Änderungen passen wir die Datenschutzhinweise entsprechend an.
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
