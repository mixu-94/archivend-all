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
      postalCode: COMPANY.address.zip,
      addressCountry: COMPANY.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.1414,
      longitude: 10.0714,
    },
    priceRange: "€€",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 49.1414,
        longitude: 10.0714,
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
            name: "Bauprojektservices",
            description:
              "Vorbereitung und Abwicklung von Bauprojekten",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Luftfahrtservices",
            description:
              "Rundflüge, Kurierflüge und Luftbildaufnahmen",
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
