export type HeroImageDef = {
  id: string;
  src: string;
  label: string;
};

/**
 * Weitere Bilder hier einfach hinzufügen.
 * Bilder in /public/images/ ablegen und src entsprechend setzen.
 * Hintergründe entfernen mit https://remove.bg (empfohlen für Hausfotos).
 */
export const HERO_IMAGES: HeroImageDef[] = [
  {
    id: "house-1",
    src: "/images/hero-house.png",
    label: "Haus 1",
  },
  // { id: "house-2", src: "/images/hero-house-2.png", label: "Haus 2" },
  // { id: "house-3", src: "/images/hero-house-3.png", label: "Haus 3" },
];

export const DEFAULT_HERO_IMAGE = HERO_IMAGES[0];
export const HERO_IMAGE_STORAGE_KEY = "archivend-hero-image";
export const HERO_IMAGE_EVENT = "archivend-hero-image-change";
