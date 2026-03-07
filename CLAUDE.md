# CLAUDE.md — Archivend GmbH Website

## Firma

**Archivend GmbH**

- Adresse: Dossenbergerstr. 5, 89312 Günzburg, Deutschland
- Tel: +49 (0) 7951 / 472 14 29
- E-Mail: info@archivend.de
- Website: https://archivend.de
- Geschäftsführer: Johannes Wopfner
- Gegründet: 2015 (seit 2024 Hauptsitz in Günzburg, Bayern)
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
│   │   ├── app/
│   │   │   ├── layout.tsx / page.tsx / globals.css
│   │   │   ├── ueber-uns/page.tsx
│   │   │   ├── leistungen/page.tsx
│   │   │   ├── air-fly/page.tsx
│   │   │   ├── kontakt/page.tsx
│   │   │   ├── impressum/page.tsx
│   │   │   ├── datenschutz/page.tsx
│   │   │   ├── api/contact/route.ts   ← Kontaktformular API
│   │   │   ├── robots.txt / sitemap.xml / opengraph-image.tsx
│   │   ├── components/
│   │   │   ├── layout/    ← Header.tsx, Footer.tsx
│   │   │   ├── sections/  ← HeroSection, ServicesSection, AboutSection, StatsSection,
│   │   │   │               AirFlySection, ContactCTASection, ContactFormSection
│   │   │   ├── motion.tsx ← FadeIn, StaggerChildren, StaggerItem Animationen
│   │   │   └── ui/        ← shadcn/ui Komponenten
│   │   └── lib/
│   │       ├── constants.ts      ← ALLE Firmendaten, Nav-Links, Services, Air-Fly, Footer-Links
│   │       ├── structured-data.ts ← JSON-LD Schema.org (Organization, LocalBusiness, Breadcrumb)
│   │       └── utils.ts          ← cn() Helper (clsx + tailwind-merge)
│   ├── public/            ← statische Assets (SVGs, favicon)
│   ├── vercel.json        ← Monorepo-Deployment-Konfiguration
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
- **Deployment:** Vercel (Monorepo-Config via vercel.json)

---

## Design-System

### Farb-Theme: Dunkel (Navy + Gold)
Das gesamte Design ist ein **dunkles Navy-Theme** — kein weißer/cremefarbener Hintergrund irgendwo.
Weiß erscheint nur in Schrift oder als subtiler Akzent.

**Brand-Tokens (globals.css):**
| Token | Wert | Verwendung |
|---|---|---|
| `--brand-primary` | `oklch(0.27 0.096 258.5)` | Navy-Blau — Haupt-Hintergrund |
| `--brand-accent` | `oklch(0.73 0.115 78)` | Gold — Abwechslung + Akzente |
| `--brand-accent-foreground` | `oklch(0.16 0.03 258)` | Dunkel (Text auf Gold) |
| `--background` | Navy (= brand-primary) | Body-Hintergrund |
| `--card` | `oklch(0.32 0.10 258.5)` | Etwas helleres Navy für Cards |
| `--foreground` | Weiß | Standard-Text |
| `--brand-text` | Weiß | Texte auf dunklen Flächen |
| `--brand-text-muted` | `oklch(0.72 0.03 258)` | Gedämpfter Text (Hellgrau) |
| `--border` | `white/12` | Borders auf dunklem Grund |
| `--input` | `oklch(0.35 0.09 258.5)` | Formularfelder |

**Achtung Gold-Sektionen:** Text auf `bg-brand-accent` (Gold) muss IMMER explizit dunkel sein:
```tsx
const DARK = "oklch(0.16 0.03 258)";
const DARK_MID = "oklch(0.16 0.03 258 / 0.65)";
// style={{ color: DARK }} verwenden, NICHT text-brand-text (= weiß)
```

### Seitenrhythmus — Gold / Navy Wechsel
Jede Seite wechselt konsequent zwischen Gold- und Navy-Sektionen:

**Homepage (`/`):**
1. Hero → Navy + Gitter-Muster
2. Stats → Gold + Diagonal
3. Services → Gold (Header) → Navy (Cards) mit SVG-Divider
4. About → Navy + Blueprint-Gitter
5. AirFly → Navy + Punkte
6. ContactCTA → Gold + Diagonal

**Unterseiten (`/ueber-uns`, `/leistungen`, `/air-fly`):**
1. Hero → Navy + Gitter
2. Content → **Gold** + Diagonal
3. Content → **Navy** + Punkte
4. CTA → **Gold** + Diagonal

**Kontakt (`/kontakt`):**
1. Hero → Navy + Gitter
2. Form + Info → Navy + Punkte (Formular in erhöhter Card mit Gold-Balken oben)

### Muster-Bibliothek

**Gold-Sektionen** — diagonales SVG-Linienmuster (dunkel, 7% Opacity):
```tsx
<div className="absolute inset-0 pointer-events-none" aria-hidden="true">
  <svg width="100%" height="100%">
    <defs>
      <pattern id="UNIQUE_ID" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <line x1="0" y1="40" x2="40" y2="0" stroke="oklch(0.16 0.03 258)"
              strokeWidth="0.5" strokeOpacity="0.07" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#UNIQUE_ID)" />
  </svg>
</div>
```

**Navy-Hero-Sektionen** — weißes Gittermuster (CSS gradient, 4% Opacity):
```tsx
<div className="absolute inset-0 opacity-[0.04]" style={{
  backgroundImage:
    "repeating-linear-gradient(0deg, transparent, transparent 39px, white 39px, white 40px), " +
    "repeating-linear-gradient(90deg, transparent, transparent 39px, white 39px, white 40px)",
}} />
```

**Navy-Content-Sektionen** — weißes Punktraster (7% Opacity):
```tsx
<div className="absolute inset-0 pointer-events-none" aria-hidden="true"
  style={{
    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
  }}
/>
```

**SVG-Divider (Gold → Navy diagonal):**
```tsx
<div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
  style={{ height: 48 }} aria-hidden="true">
  <svg viewBox="0 0 1200 48" preserveAspectRatio="none" className="w-full h-full">
    <polygon points="0,48 1200,0 1200,48" style={{ fill: "var(--brand-primary)" }} />
  </svg>
</div>
```

**SVG pattern IDs müssen pro Seite eindeutig sein** (z.B. `ue-story-diag`, `lst-svc-diag`, `af-cta-diag`).

---

## Wichtige Konventionen

- **Alle Firmendaten zentral** in `website/src/lib/constants.ts` — niemals hardcoded
- **Structured Data** in `website/src/lib/structured-data.ts`
- **Sprache:** Deutsch (de-DE), HTML lang="de"
- **Animationen:** `FadeIn`, `StaggerChildren`, `StaggerItem` aus `@/components/motion`
- **Kein weißer/cremefarbener Hintergrund** — nur Navy oder Gold als Section-Background
- **Text auf Gold:** immer explizit `style={{ color: DARK }}`, nie CSS-Klassen die auf `--brand-text` verweisen
- **Cards auf Gold-Sektionen:** `bg-card` (= leicht helleres Navy) ergibt dunkelnavy Card auf gold — gewünschter Kontrast

---

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

---

## Status (Stand: 2026-03-05)

- [x] Projekt-Setup (Next.js 16, Tailwind v4, shadcn/ui)
- [x] Layout-Komponenten (Header mit Mobile-Nav, Footer)
- [x] Sections-Komponenten (Hero, Services, About, Stats, AirFly, ContactCTA, ContactForm)
- [x] Zentrale Konstanten & Structured Data
- [x] Homepage mit allen Sections befüllt
- [x] Unterseiten angelegt (/ueber-uns, /leistungen, /air-fly, /kontakt, /impressum, /datenschutz)
- [x] Kontaktformular mit API-Route (/api/contact)
- [x] Dunkles Navy-Theme (globals.css) — kein Weiß/Creme als Hintergrund
- [x] Gold/Navy Wechsel-Rhythmus auf allen Seiten mit Muster-Dekoration
- [x] Deployment-Konfiguration (vercel.json für Monorepo)
- [ ] OG-Image (/public/og-image.jpg) fehlt noch
- [ ] /immobilien Unterseite noch nicht angelegt
