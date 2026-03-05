// ============================================
// ARCHIVEND GMBH — ZENTRALE KONSTANTEN
// Alle Firmendaten und Inhalte hier pflegen
// ============================================

export const COMPANY = {
  name: "Archivend GmbH",
  tagline: "Ihr Partner für überlegene Bauwerte",
  taglineEnglish: "Your assignment is our passion",
  description:
    "Archivend GmbH ist Ihr kompetenter Partner für Immobiliendienstleistungen, Bauprojekte und Luftfahrtservices in der Region Günzburg und darüber hinaus.",
  address: {
    street: "Dossenbergerstr. 5",
    zip: "89312",
    city: "Günzburg",
    country: "Deutschland",
    countryCode: "DE",
    full: "Dossenbergerstr. 5, 89312 Günzburg, Deutschland",
  },
  contact: {
    phone: "+49 (0) 7951 / 472 14 29",
    phoneClean: "+4979514721429",
    email: "info@archivend.de",
  },
  website: "https://archivend.de",
  legalRepresentative: "Johannes Wopfner",
  foundedYear: 2020,
  registrationCourt: "Amtsgericht Memmingen",
  registrationNumber: "", // HRB-Nummer eintragen
  vatId: "", // USt-IdNr. eintragen
} as const;

export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
  target?: "_blank";
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen" },
  {
    href: "https://immowo-ventures.de",
    label: "Immobilien",
    external: true,
    target: "_blank",
  },
  { href: "/air-fly", label: "Air Fly" },
  { href: "/kontakt", label: "Kontakt" },
];

export const SERVICES = [
  {
    id: "bauprojekte",
    title: "Bauprojektservices",
    shortTitle: "Bauprojekte",
    description:
      "Professionelle Vorbereitung und Abwicklung von Bauprojekten — von der Planung bis zur Fertigstellung.",
    longDescription:
      "Von der ersten Planungsphase bis zur schlüsselfertigen Übergabe begleiten wir Ihr Bauprojekt mit Erfahrung und Kompetenz. Wir koordinieren alle Beteiligten, überwachen Qualität und Termine und sorgen dafür, dass Ihr Projekt im Zeit- und Kostenrahmen bleibt. Mit unserem Netzwerk an Handwerkern, Planern und Behörden in der Region sind wir Ihr zuverlässiger Ansprechpartner.",
    icon: "Building2",
    href: "/leistungen#bauprojekte",
  },
  {
    id: "vermittlung",
    title: "Vertragsvermittlung",
    shortTitle: "Vermittlung",
    description:
      "Vermittlung von Vertragsabschlüssen für Bauleistungen — wir bringen die richtigen Partner zusammen.",
    longDescription:
      "Wir verfügen über ein weitreichendes Netzwerk aus Bauunternehmen, Handwerksbetrieben und Dienstleistern der Region. Als neutrale Vermittler bringen wir Auftraggeber und Auftragnehmer zusammen, prüfen Angebote auf Vollständigkeit und Plausibilität und begleiten den Vertragsabschluss bis zur finalen Unterschrift.",
    icon: "Handshake",
    href: "/leistungen#vermittlung",
  },
  {
    id: "immobilien",
    title: "Immobilienhandel",
    shortTitle: "Immobilien",
    description:
      "An- und Verkauf von Mietobjekten im privaten und öffentlichen Bereich mit umfassender Marktkenntnis.",
    longDescription:
      "Ob Wohnimmobilie, Gewerbeeinheit oder Renditeobjekt — wir begleiten Sie beim Kauf und Verkauf mit fundierter Marktkenntnis und persönlicher Betreuung. Unsere Vermarktungsstrategie ist auf Ihre Ziele abgestimmt: maximaler Erlös, zuverlässige Abwicklung, transparente Kommunikation.",
    icon: "Home",
    href: "/leistungen#immobilien",
  },
  {
    id: "gutachten",
    title: "Gutachten & Exposés",
    shortTitle: "Gutachten",
    description:
      "Erstellung von Bauwertgutachten und professionellen Immobilienexposés für maximale Transparenz.",
    longDescription:
      "Präzise Bauwertgutachten schaffen die Grundlage für faire Kaufpreise und sichere Finanzierungsentscheidungen. Unsere professionellen Exposés mit hochwertigen Luftbildaufnahmen (aus unserer Air Fly Division) heben Ihre Immobilie vom Markt ab und sprechen die richtigen Interessenten an.",
    icon: "FileText",
    href: "/leistungen#gutachten",
  },
  {
    id: "organisation",
    title: "Verkaufsorganisation",
    shortTitle: "Organisation",
    description:
      "Organisation von Verkaufsunterlagen und vollständige administrative Unterstützung für Ihr Objekt.",
    longDescription:
      "Ein erfolgreicher Immobilienverkauf erfordert vollständige und korrekte Unterlagen. Wir beschaffen alle notwendigen Dokumente — Grundbuchauszüge, Energieausweis, Baupläne, Teilungserklärungen — und organisieren den gesamten Vermarktungsprozess von der Besichtigung bis zum Notartermin.",
    icon: "ClipboardList",
    href: "/leistungen#organisation",
  },
  {
    id: "bewertung",
    title: "Immobilienbewertung",
    shortTitle: "Bewertung",
    description:
      "Zuverlässige Ermittlung des bestmöglichen Verkaufs- oder Kaufpreises durch erfahrene Experten.",
    longDescription:
      "Eine realistische Wertermittlung ist die Basis jeder erfolgreichen Immobilientransaktion. Wir analysieren Lage, Zustand, Ausstattung und aktuelle Marktdaten und ermitteln einen fundierten Verkehrswert — ob für den Verkauf, die Finanzierung, das Erbschaftsverfahren oder die steuerliche Bewertung.",
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
    {
      href: "https://immowo-ventures.de",
      label: "Immobilien",
      external: true,
      target: "_blank" as const,
    },
    { href: "/air-fly", label: "Air Fly" },
  ],
  legal: [
    { href: "/kontakt", label: "Kontakt" },
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
  ],
};
