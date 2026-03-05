# CLAUDE.md — Archivend GmbH Website

## Firma

**Archivend GmbH**

- Adresse: Dossenbergerstr. 5, 89312 Günzburg, Deutschland
- Tel: +49 (0) 7951 / 472 14 29
- E-Mail: info@archivend.de
- Website: https://archivend.de
- Geschäftsführer: Johannes Wopfner
- Gegründet: 2020
- Tagline: "Ihr Partner für überlegene Bauwerte"

### Geschäftsbereiche

**Immobilien & Bauprojekte:**

- Bauprojektservices (Planung bis Fertigstellung)
- Vertragsvermittlung für Bauleistungen
- Immobilienhandel (An- & Verkauf, privat & öffentlich)
- Gutachten & Exposés (Bauwertgutachten, Immobilienexposés)
- Verkaufsorganisation (Unterlagen, Administration)
- Immobilienbewertung (Verkaufs-/Kaufpreisermittlung)

**Air Fly (Luftfahrt):**

- Rundflüge (Region Schwäbisch Hall / Schwäbische Alb)
- Kurierflüge (zeitkritischer Lufttransport, ohne konventionelle Landebahn)
- Luftbild & Film (Immobilienexposés, Bauprojektdokumentation, Film/Foto)

---

## Projekt-Struktur

```
archivend-all/
├── CLAUDE.md              ← diese Datei
├── website/               ← Next.js Frontend (Monorepo-Subfolder)
│   ├── src/
│   │   ├── app/           ← Next.js App Router (layout.tsx, page.tsx, globals.css)
│   │   ├── components/
│   │   │   ├── layout/    ← Header.tsx, Footer.tsx
│   │   │   ├── sections/  ← HeroSection, ServicesSection, AboutSection, StatsSection, AirFlySection, ContactCTASection
│   │   │   └── ui/        ← shadcn/ui Komponenten (button, card, badge, sheet, navigation-menu, separator)
│   │   └── lib/
│   │       ├── constants.ts      ← ALLE Firmendaten, Nav-Links, Services, Air-Fly, Footer-Links
│   │       ├── structured-data.ts ← JSON-LD Schema.org (Organization, LocalBusiness, Breadcrumb)
│   │       └── utils.ts          ← cn() Helper (clsx + tailwind-merge)
│   ├── public/            ← statische Assets (SVGs)
│   ├── package.json
│   └── .gitignore
```

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **UI-Komponenten:** shadcn/ui (radix-ui, class-variance-authority)
- **Icons:** lucide-react
- **Schrift:** Inter (Google Fonts)
- **SEO:** JSON-LD structured data, OpenGraph, metadata API
- **Package Manager:** npm

## Wichtige Konventionen

- **Alle Firmendaten zentral** in `website/src/lib/constants.ts` pflegen — niemals hardcoded in Komponenten
- **Structured Data** in `website/src/lib/structured-data.ts` (LocalBusiness, Organization, Breadcrumb Schemas)
- **Brand-Farben** als Tailwind Custom Tokens: `brand-primary`, `brand-accent`, `brand-accent-light`, `brand-accent-foreground`
- **Sprache:** Deutsch (de-DE), HTML lang="de"
- **SEO-URLs (geplant):** `/ueber-uns`, `/leistungen`, `/immobilien`, `/air-fly`, `/kontakt`, `/impressum`, `/datenschutz`

## Entwicklung

```bash
cd website
npm install
npm run dev    # http://localhost:3000
npm run build
npm run lint
```

## GitHub

Repo: https://github.com/mixu-94/archivend-all
Branch: main

## Status (Stand: 2026-03-05)

- [x] Projekt-Setup (Next.js 16, Tailwind v4, shadcn/ui)
- [x] Layout-Komponenten (Header mit Mobile-Nav, Footer)
- [x] Sections-Komponenten (Hero, Services, About, Stats, AirFly, ContactCTA)
- [x] Zentrale Konstanten & Structured Data
- [ ] page.tsx noch Default-Next.js-Template (muss mit echten Sections befüllt werden)
- [ ] Unterseiten noch nicht angelegt (/ueber-uns, /leistungen, /immobilien, /air-fly, /kontakt, etc.)
- [ ] OG-Image (/public/og-image.jpg) fehlt noch
- [ ] Deployment (Vercel o.ä.) noch nicht konfiguriert
