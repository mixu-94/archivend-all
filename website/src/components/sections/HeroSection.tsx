"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import {
  HERO_IMAGES,
  DEFAULT_HERO_IMAGE,
  HERO_IMAGE_STORAGE_KEY,
  HERO_IMAGE_EVENT,
} from "@/lib/hero-images";

export function HeroSection() {
  const [heroSrc, setHeroSrc] = useState(DEFAULT_HERO_IMAGE.src);

  useEffect(() => {
    // Gespeichertes Bild laden
    try {
      const saved = localStorage.getItem(HERO_IMAGE_STORAGE_KEY);
      if (saved) {
        const img = HERO_IMAGES.find((x) => x.id === saved);
        if (img) setHeroSrc(img.src);
      }
    } catch {}

    // Auf Bildwechsel hören
    const handler = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      const img = HERO_IMAGES.find((x) => x.id === id);
      if (img) setHeroSrc(img.src);
    };
    window.addEventListener(HERO_IMAGE_EVENT, handler);
    return () => window.removeEventListener(HERO_IMAGE_EVENT, handler);
  }, []);
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-primary">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id="diag"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="120"
                x2="120"
                y2="0"
                stroke="white"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Gold diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, var(--brand-accent) 40%, var(--brand-accent) 42%, transparent 42%)",
        }}
        aria-hidden="true"
      />

      {/* ── House image — absolutely positioned, starts far left, bleeds to right edge ── */}
      <div
        className="absolute inset-y-0 right-0 hidden lg:block pointer-events-none"
        style={{ left: "22%" }}
        aria-hidden="true"
      >
        <Image
          src={heroSrc}
          alt=""
          fill
          className="object-cover object-center"
          sizes="78vw"
          priority
          style={{
            // Fade: left transparent → fully visible after ~25% → fades out at bottom
            maskImage:
              "linear-gradient(to right, transparent 0%, black 85%),linear-gradient(to left, transparent 0%, black 25%),  linear-gradient(to top, transparent 0%, black 30%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 85%),linear-gradient(to left, transparent 0%, black 25%),  linear-gradient(to top, transparent 0%, black 30%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "destination-in",
          }}
        />

        {/* Top fade */}
        <div
          className="absolute top-0 left-0 right-0 h-28"
          style={{
            background:
              "linear-gradient(to bottom, var(--brand-primary), transparent)",
          }}
        />
      </div>

      {/* ── Content — z-10 so it always sits above the image ── */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span
                className="block h-px w-12"
                style={{ background: "var(--brand-accent)" }}
              />
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ color: "var(--brand-accent)" }}
              >
                Günzburg · Bayern
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ihr Partner für{" "}
              <span style={{ color: "var(--brand-accent)" }}>überlegene</span>{" "}
              Bauwerte
            </h1>

            <div
              className="w-20 h-1 mb-8 rounded-full"
              style={{ background: "var(--brand-accent)" }}
            />

            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
              Professionelle Immobiliendienstleistungen und Bauprojektmanagement
              — von der Bewertung bis zur schlüsselfertigen Übergabe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="font-semibold text-base px-8 py-6 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: "var(--brand-accent)",
                  color: "var(--brand-accent-foreground)",
                }}
              >
                <Link href="/leistungen">
                  Unsere Leistungen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold bg-transparent px-8 py-6 border-white/40 hover:bg-brand-accent/20 hover:border-brand-accent/60 transition-all duration-200"
                style={{ color: "white" }}
              >
                <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
              </Button>
            </div>

            {/* Mobile stats */}
            <div className="grid grid-cols-2 gap-3 mt-8 lg:hidden">
              {[
                { value: "10+", label: "Jahre Erfahrung" },
                { value: "50+", label: "Objekte" },
                { value: "100%", label: "Zufriedenheit" },
                { value: "4+", label: "Referenzprojekte" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg p-3 text-end"
                  style={{
                    background: "oklch(1 0 0 / 0.06)",
                    border: "1px solid oklch(1 0 0 / 0.12)",
                  }}
                >
                  <span
                    className="block text-xl font-bold"
                    style={{ color: "var(--brand-accent)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/60">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-3">
              <span
                className="block h-px w-8"
                style={{ background: "oklch(1 0 0 / 0.3)" }}
              />
              <a
                href={`tel:${COMPANY.contact.phoneClean}`}
                className="text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                {COMPANY.contact.phone}
              </a>
            </div>
          </div>

          {/* Right — Stats badge, floats over the image area */}
          <div className="hidden lg:flex self-end pb-4">
            <div
              className="w-full flex items-center justify-between px-5 py-4 rounded-xl backdrop-blur-sm"
              style={{
                background: "var(--primary-glass)",
                border: "1px solid var(--brand-accent)",
                boxShadow:
                  "0 0 0 1px var(--accent-fill-md), 0 4px 24px oklch(0 0 0 / 0.4)",
              }}
            >
              <div className="text-center">
                <p
                  className="text-2xl font-bold"
                  style={{ color: "var(--brand-accent)" }}
                >
                  10+
                </p>
                <p className="text-xs text-white/70">Jahre Erfahrung</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <p
                  className="text-2xl font-bold"
                  style={{ color: "var(--brand-accent)" }}
                >
                  50+
                </p>
                <p className="text-xs text-white/70">Objekte</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <p
                  className="text-2xl font-bold"
                  style={{ color: "var(--brand-accent)" }}
                >
                  100%
                </p>
                <p className="text-xs text-white/70">Zufriedenheit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 z-10">
        <span className="text-white text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 text-white animate-bounce" />
      </div>
    </section>
  );
}
