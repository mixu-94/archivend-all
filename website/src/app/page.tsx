import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AirFlySection } from "@/components/sections/AirFlySection";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { getLocalBusinessSchema } from "@/lib/structured-data";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${COMPANY.name} — ${COMPANY.tagline}`,
  description: COMPANY.description,
  keywords: [
    "Immobilien Günzburg",
    "Immobilienmakler Günzburg",
    "Bauprojekte Bayern",
    "Immobilienbewertung",
    "Rundflüge Bayern",
    "Archivend GmbH",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    url: "/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: COMPANY.name }],
  },
};

export default function HomePage() {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <AirFlySection />
      <ContactCTASection />
    </>
  );
}
