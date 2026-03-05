# Archivend GmbH — Launch-Checkliste

Stand: 2026-03-05

---

## 🔴 MUSS vor Go-Live (Kritisch)

### Konfiguration
- [ ] `.env.local` befüllen: SMTP-Zugangsdaten (Strato/IONOS)
- [ ] Kontaktformular live testen (E-Mail ankommen lassen)
- [ ] `npm run build` ohne Fehler durchlaufen lassen

### Rechtliches
- [ ] USt-IdNr. in `constants.ts` eintragen (sobald bekannt)
- [ ] Impressum final prüfen (beide HRBs ✅, EUID ✅)
- [ ] Datenschutzerklärung durch Anwalt/Datenschutzberater prüfen lassen

### Technisches Minimum
- [ ] Eigenes Favicon erstellen (`/public/favicon.ico` + `/public/favicon.svg`)
  - Empfehlung: "A" in Navy auf Gold-Hintergrund
- [ ] OG-Image erstellen (`/public/og-image.jpg`, 1200×630 px)
  - Empfehlung: Logo + Tagline + Brand-Farben
- [x] `sitemap.ts` angelegt (`src/app/sitemap.ts`)
- [x] `robots.ts` angelegt (`src/app/robots.ts`)

### Deployment
- [ ] Hosting einrichten — Vercel (empfohlen, kostenlos für Starter-Plan)
  1. `vercel.com` Account mit GitHub verbinden
  2. Repo `archivend-all` importieren, Root = `website/`
  3. Env-Variablen (SMTP_*) in Vercel Dashboard eintragen
- [ ] Domain `archivend.de` auf Vercel-DNS umstellen
- [ ] SSL-Zertifikat (automatisch durch Vercel)

---

## 🟡 SOLLTE baldmöglich (Qualität)

### Content
- [ ] Echte Immobilien-/Objektfotos hinzufügen (ersetzen Unsplash-Bild im Hero)
- [ ] Teamfoto / Foto des Geschäftsführers (für /ueber-uns)
- [ ] Eigenes Logo als SVG-Datei (ersetzt Text-Logo im Header)
- [ ] Referenzprojekte: 2–3 abgeschlossene Projekte auf /leistungen ergänzen

### SEO & Marketing
- [ ] Google Search Console Konto anlegen
- [ ] Sitemap bei Google einreichen (nach Go-Live)
- [ ] Google My Business Profil anlegen/aktualisieren (Adresse Günzburg)
- [ ] Structured Data testen: search.google.com/test/rich-results

### Performance
- [ ] Lighthouse-Audit: Ziel ≥ 90 in allen Kategorien
- [ ] Echte Bilder als WebP/AVIF optimieren (Next.js macht das automatisch)
- [ ] Core Web Vitals prüfen (LCP, CLS, FID)

---

## 🟢 KANN später (Erweiterungen)

### Neue Features
- [ ] **Testimonials-Sektion** auf Homepage — Kundenstimmen/Referenzen (5⭐)
- [ ] **Google Maps** auf /kontakt einbetten (iframe mit Adresse)
- [ ] **Referenzen/Portfolio** Unterseite mit abgeschlossenen Projekten
- [ ] **Sitemap-Seite** im Footer ergänzen (optional)

### Analytics
- [ ] Datenschutzfreundliche Analytics einrichten
  - Empfehlung: **Plausible** (€9/Monat, DSGVO-konform, kein Cookie-Banner nötig)
  - Alternative: **Umami** (Self-hosted, kostenlos)
  - NICHT: Google Analytics ohne Cookie-Banner

### Immobilien-Listing
- [x] Weiterleitung `/immobilien` → `immowo-ventures.de` (bereits implementiert)
- [ ] Ggf. Teaser-Sektion auf Homepage mit Link zu immowo-ventures.de

### Technisches
- [ ] Rate-Limiting für Kontaktformular verbessern (Upstash Redis statt In-Memory)
- [ ] E-Mail-Bestätigung an Absender nach Kontaktformular-Absenden
- [ ] Barrierefreiheit-Audit (WCAG 2.1 AA)

---

## Verbesserungsvorschläge

### Sofort (geringer Aufwand, hohe Wirkung)
1. **Testimonials-Sektion** — 3–5 Kundenstimmen auf der Startseite steigern Vertrauen enorm
2. **Google Maps auf Kontaktseite** — Einfaches iframe-Embed, erhöht lokales SEO und Vertrauen
3. **Auto-Reply E-Mail** — Beim Kontaktformular bekommt der Absender eine automatische Bestätigung

### Mittelfristig (guter ROI)
4. **Echtes Logo** — Statt "ARCHIVEND GmbH" in Text ein professionelles SVG-Logo designen lassen
5. **Plausible Analytics** — DSGVO-konform, kein Cookie-Banner nötig, zeigt Besucherströme
6. **Portfolio-Seite** — Konkrete Referenzen (Fotos + Kurzbeschreibung) zeigen Kompetenz und helfen SEO
7. **Blog "Immobilien-Ratgeber"** — Artikel wie "Immobilie verkaufen in Günzburg" ranken lokal sehr gut

### Langfristig (strategisch)
8. **Immobilien-Listing integrieren** — Wenn immowo-ventures.de auf Archivend gemergt werden soll
9. **WhatsApp Business verifizieren** — Grünes Häkchen + Geschäftsprofil = mehr Vertrauen
10. **Video-Hero** — Kurzes Luftvideo aus der Air Fly Division als Hero-Hintergrund (einzigartig!)
