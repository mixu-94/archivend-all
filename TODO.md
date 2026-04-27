# Archivend GmbH — Launch-Checkliste

Stand: 2026-04-27

---

## 🔴 Muss vor Go-Live

### Kundendaten / Rechtliches
- [ ] USt-IdNr. vom Kunden einholen und in `website/src/lib/constants.ts` eintragen
- [ ] Zuständige Aufsichtsbehörde vom Kunden bestätigen lassen und in `website/src/lib/constants.ts` eintragen
- [ ] Aussage zur Verbraucherstreitbeilegung mit dem Kunden final abstimmen
- [ ] Datenschutzerklärung rechtlich prüfen lassen
- [ ] Impressum final gegen die echten Firmendaten des Kunden prüfen

Hinweis zur USt-IdNr.:
Eine USt-IdNr. lässt sich normalerweise nicht seriös per Firmennamen "heraussuchen". Das EU-System VIES validiert bestehende Nummern, ist aber keine öffentliche Firmensuche. Wenn der Kunde die Nummer nicht liefert, sollte sie bis zur Bestätigung nicht auf der Website veröffentlicht werden.

### Hosting / Betrieb
- [ ] VPS-Zielsetup festlegen und dokumentieren
  - Domain / DNS
  - Webserver/Reverse Proxy (`nginx` oder vergleichbar)
  - Node.js-Version
  - Prozessmanager (`pm2`, `systemd` o.ä.)
  - SSL-Zertifikat
- [ ] Produktions-`.env` auf dem VPS setzen
  - `SMTP_HOST`
  - `SMTP_PORT`
  - `SMTP_USER`
  - `SMTP_PASS`
  - `SMTP_FROM`
  - `CONTACT_EMAIL`
- [ ] Kontaktformular auf dem VPS live testen
  - Eingangsmail an Archivend
  - Bestätigungsmail an Absender
  - Fehlerfall ohne SMTP prüfen
- [ ] Deployment auf dem VPS einmal komplett durchtesten
  - `npm install`
  - `npm run build`
  - `npm run start`

### Inhalte / Nachweise
- [ ] Bildrechte für `website/public/images/hero-house.png` und `website/public/images/hero-house1.png` dokumentieren
- [ ] Prüfen, ob alle verwendeten Fotos / Grafiken entweder Eigentum des Kunden sind oder mit ausreichender Lizenz vorliegen
- [ ] Falls Referenzprojekte echte Kundenprojekte sind: Freigabe der Texte und Projektnennungen einholen

---

## 🟡 Bereits erledigt

### Technisch
- [x] `npm run lint` läuft ohne Fehler
- [x] `npm run build` läuft ohne Fehler
- [x] OG-Metadaten repariert
- [x] Kontaktformular gibt bei fehlender SMTP-Konfiguration sauber einen Fehler zurück
- [x] `sitemap.ts` vorhanden
- [x] `robots.ts` vorhanden
- [x] Favicon-Dateien vorhanden
- [x] Open-Graph-Bild wird dynamisch über `src/app/opengraph-image.tsx` erzeugt
- [x] Auto-Reply-Mail für Kontaktformular ist implementiert

### Rechtliches / Inhalt
- [x] Impressum auf `DDG` statt altes `TMG` umgestellt
- [x] VAT-Platzhalter entfernt, solange keine bestätigte Nummer vorliegt
- [x] Abschnitt zur Verbraucherstreitbeilegung eingebaut
- [x] Datenschutzerklärung an den tatsächlichen Code angepasst
  - Kontaktformular / SMTP
  - lokale Browser-Speicherung
  - WhatsApp-Weiterleitung

---

## 🟡 Sollte bald gemacht werden

### Qualität
- [ ] SMTP-Zugangsdaten nicht nur eintragen, sondern real mit finalem Mailserver testen
- [ ] Spam-/Missbrauchsschutz des Kontaktformulars verbessern
  - aktuelles Rate-Limiting ist nur In-Memory
- [ ] 404-/Fehlerseiten im Browser kurz gegenklicken
- [ ] Mobile QA auf echter Hardware machen

### SEO / Außendarstellung
- [ ] Search Console einrichten
- [ ] Sitemap nach Go-Live einreichen
- [ ] Google-Unternehmensprofil prüfen / aktualisieren
- [ ] Lighthouse-Audit nach Deployment fahren

### Inhalt
- [ ] Echtes Logo als SVG liefern lassen
- [ ] Echte Referenzbilder / Projektbilder ergänzen
- [ ] Teamfoto / Geschäftsführerfoto ergänzen, falls gewünscht

---

## 🟢 Kann später

### Erweiterungen
- [ ] Robusteres Rate-Limiting mit Redis / externer Store
- [ ] Analytics nur datenschutzkonform ergänzen
- [ ] Zusätzliche Referenzen-/Portfolio-Unterseite mit echten Projekten ausbauen
- [ ] Barrierefreiheits-Audit durchführen
- [ ] Testimonials ergänzen

---

## Vor Push auf `main`

- [x] Review-Fixes in separatem Branch umgesetzt
- [x] Letzte Sichtprüfung von `TODO.md` und Legal-Texten
- [ ] Merge / Push nach `main`
