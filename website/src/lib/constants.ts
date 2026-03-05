// ============================================
// ARCHIVEND GMBH — ZENTRALE KONSTANTEN
// Alle Firmendaten und Inhalte hier pflegen
// ============================================

export const COMPANY = {
  name: "Archivend GmbH",
  tagline: "Ihr Partner für überlegene Bauwerte",
  taglineEnglish: "Your assignment is our passion",
  description:
    "Archivend GmbH ist Ihr kompetenter Partner für Immobiliendienstleistungen, Bauprojekte und Luftfahrtservices in der Region Crailsheim und darüber hinaus.",
  address: {
    street: "Fronbergstraße 12",
    zip: "74564",
    city: "Crailsheim",
    country: "Deutschland",
    countryCode: "DE",
    full: "Fronbergstraße 12, 74564 Crailsheim, Deutschland",
  },
  contact: {
    phone: "+49 (0) 7951 / 472 14 29",
    phoneClean: "+4979514721429",
    email: "info@archivend.de",
  },
  website: "https://archivend.de",
  legalRepresentative: "Johannes Wopfner",
  foundedYear: 2020,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/immobilien", label: "Immobilien" },
  { href: "/air-fly", label: "Air Fly" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const SERVICES = [
  {
    id: "bauprojekte",
    title: "Bauprojektservices",
    shortTitle: "Bauprojekte",
    description:
      "Professionelle Vorbereitung und Abwicklung von Bauprojekten — von der Planung bis zur Fertigstellung.",
    icon: "Building2",
    href: "/leistungen#bauprojekte",
  },
  {
    id: "vermittlung",
    title: "Vertragsvermittlung",
    shortTitle: "Vermittlung",
    description:
      "Vermittlung von Vertragsabschlüssen für Bauleistungen — wir bringen die richtigen Partner zusammen.",
    icon: "Handshake",
    href: "/leistungen#vermittlung",
  },
  {
    id: "immobilien",
    title: "Immobilienhandel",
    shortTitle: "Immobilien",
    description:
      "An- und Verkauf von Mietobjekten im privaten und öffentlichen Bereich mit umfassender Marktkenntnis.",
    icon: "Home",
    href: "/leistungen#immobilien",
  },
  {
    id: "gutachten",
    title: "Gutachten & Exposés",
    shortTitle: "Gutachten",
    description:
      "Erstellung von Bauwertgutachten und professionellen Immobilienexposés für maximale Transparenz.",
    icon: "FileText",
    href: "/leistungen#gutachten",
  },
  {
    id: "organisation",
    title: "Verkaufsorganisation",
    shortTitle: "Organisation",
    description:
      "Organisation von Verkaufsunterlagen und vollständige administrative Unterstützung für Ihr Objekt.",
    icon: "ClipboardList",
    href: "/leistungen#organisation",
  },
  {
    id: "bewertung",
    title: "Immobilienbewertung",
    shortTitle: "Bewertung",
    description:
      "Zuverlässige Ermittlung des bestmöglichen Verkaufs- oder Kaufpreises durch erfahrene Experten.",
    icon: "TrendingUp",
    href: "/leistungen#bewertung",
  },
] as const;

export const AIR_FLY_SERVICES = [
  {
    id: "rundflug",
    title: "Rundflüge",
    description:
      "Erleben Sie die faszinierende Landschaft rund um Schwäbisch Hall und die Region aus der Vogelperspektive. Unsere Rundflüge bieten unvergessliche Ausblicke auf historische Städte, malerische Täler und die schwäbische Alb.",
    icon: "PlaneTakeoff",
  },
  {
    id: "kurierflug",
    title: "Kurierflüge",
    description:
      "Schneller Lufttransport ohne konventionelle Landebahn. Ideal für zeitkritische Güter und Dokumente über weite Distanzen. Flexibel, zuverlässig und deutlich schneller als bodengebundene Alternativen.",
    icon: "Zap",
  },
  {
    id: "luftbild",
    title: "Luftbild & Film",
    description:
      "Professionelle Luftaufnahmen für Immobilienexposés, Bauprojektdokumentation und Film-/Fotoproduktionen. Einzigartige Perspektiven, die Ihr Objekt optimal in Szene setzen.",
    icon: "Camera",
  },
] as const;

export const FOOTER_LINKS = {
  company: [
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/immobilien", label: "Immobilien" },
    { href: "/air-fly", label: "Air Fly" },
  ],
  legal: [
    { href: "/kontakt", label: "Kontakt" },
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
  ],
} as const;
