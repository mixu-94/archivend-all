import { COMPANY } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY.website}/#business`,
    name: COMPANY.name,
    description: COMPANY.description,
    url: COMPANY.website,
    telephone: COMPANY.contact.phone,
    email: COMPANY.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: COMPANY.address.countryCode,
    },
    foundingDate: String(COMPANY.foundedYear),
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.4517,
      longitude: 10.2784,
    },
    priceRange: "€€",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 48.4517,
        longitude: 10.2784,
      },
      geoRadius: "100000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Leistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Immobilienhandel",
            description:
              "An- und Verkauf von Mietobjekten im privaten und öffentlichen Bereich",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bauprojektmanagement",
            description:
              "Vorbereitung und Abwicklung von Bauprojekten — von der Planung bis zur Fertigstellung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Komplettservice",
            description:
              "Hausverwaltung und Komplettservice über starkes Partner-Netzwerk",
          },
        },
      ],
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${COMPANY.website}${item.url}`,
    })),
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${COMPANY.website}/#organization`,
    name: COMPANY.name,
    url: COMPANY.website,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.contact.phone,
      contactType: "customer service",
      availableLanguage: "German",
    },
  };
}
