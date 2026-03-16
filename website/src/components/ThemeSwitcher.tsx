"use client";

import { useState, useEffect, useCallback } from "react";
import { Palette, ImageIcon, EyeOff, Eye, X } from "lucide-react";
import Image from "next/image";
import {
  HERO_IMAGES,
  DEFAULT_HERO_IMAGE,
  HERO_IMAGE_STORAGE_KEY,
  HERO_IMAGE_EVENT,
  HERO_IMAGE_HIDDEN_ID,
  type HeroImageDef,
} from "@/lib/hero-images";

/* ─── Theme Definitionen ─────────────────────────────────────────────────── */

type ThemeDef = {
  id: string;
  name: string;
  primary: string;  // OKLCH — Hintergrundfarbe
  accent: string;   // OKLCH — Akzentfarbe
  accentFg: string; // OKLCH — Dunkler Text AUF der Akzentfarbe
};

const THEMES: ThemeDef[] = [
  { id: "schiefer-champagner",   name: "Schieferblau · Champagner",  primary: "oklch(0.20 0.04 240)",  accent: "oklch(0.83 0.07 78)",   accentFg: "oklch(0.14 0.03 240)" },
  { id: "navy-gold",             name: "Navy · Gold",                 primary: "oklch(0.22 0.085 258)", accent: "oklch(0.74 0.115 78)",  accentFg: "oklch(0.14 0.04 258)" },
  { id: "anthrazit-gold",        name: "Anthrazit · Gold",            primary: "oklch(0.18 0.01 270)",  accent: "oklch(0.74 0.115 78)",  accentFg: "oklch(0.12 0.01 270)" },
  { id: "anthrazit-terrakotta",  name: "Anthrazit · Terrakotta",      primary: "oklch(0.18 0.015 55)",  accent: "oklch(0.63 0.13 35)",   accentFg: "oklch(0.10 0.01 55)"  },
  { id: "walnuss-moos",          name: "Walnuss · Moosgrün",          primary: "oklch(0.19 0.04 50)",   accent: "oklch(0.64 0.09 140)",  accentFg: "oklch(0.10 0.02 50)"  },
  { id: "wald-champagner",       name: "Waldgrün · Champagner",       primary: "oklch(0.18 0.055 155)", accent: "oklch(0.83 0.07 78)",   accentFg: "oklch(0.12 0.03 155)" },
  { id: "mitternacht-silber",    name: "Mitternacht · Silber",        primary: "oklch(0.15 0.02 270)",  accent: "oklch(0.78 0.01 270)",  accentFg: "oklch(0.12 0.01 270)" },
  { id: "burgund-gold",          name: "Burgund · Gold",              primary: "oklch(0.22 0.065 15)",  accent: "oklch(0.74 0.115 78)",  accentFg: "oklch(0.12 0.03 15)"  },
  { id: "schiefer-kupfer",       name: "Schiefer · Kupfer",           primary: "oklch(0.20 0.02 250)",  accent: "oklch(0.65 0.12 45)",   accentFg: "oklch(0.12 0.02 250)" },
  { id: "tiefsee-tuerkis",       name: "Tiefsee · Türkis",            primary: "oklch(0.18 0.05 225)",  accent: "oklch(0.72 0.12 185)",  accentFg: "oklch(0.12 0.03 225)" },
  { id: "oliv-sand",             name: "Olivgrün · Sand",             primary: "oklch(0.20 0.04 100)",  accent: "oklch(0.78 0.07 75)",   accentFg: "oklch(0.12 0.03 100)" },
  { id: "braun-bernstein",       name: "Dunkelbraun · Bernstein",     primary: "oklch(0.20 0.04 45)",   accent: "oklch(0.75 0.14 65)",   accentFg: "oklch(0.12 0.03 45)"  },
  { id: "petrol-rose",           name: "Petrol · Rosé",               primary: "oklch(0.20 0.05 210)",  accent: "oklch(0.78 0.08 10)",   accentFg: "oklch(0.12 0.03 210)" },
  { id: "aubergine-champagner",  name: "Aubergine · Champagner",      primary: "oklch(0.20 0.06 320)",  accent: "oklch(0.83 0.07 78)",   accentFg: "oklch(0.12 0.04 320)" },
  { id: "nacht-mint",            name: "Nacht · Mint",                primary: "oklch(0.15 0.01 160)",  accent: "oklch(0.72 0.12 160)",  accentFg: "oklch(0.10 0.01 160)" },
];

/* ─── OKLCH Hilfsfunktionen ─────────────────────────────────────────────── */

function parseOklch(str: string): [number, number, number] {
  const m = str.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)/);
  if (!m) return [0.2, 0.04, 240];
  return [parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])];
}

/** Lightness anpassen, Chroma optional skalieren */
function adj(oklch: string, dL: number, chromaScale = 1): string {
  const [l, c, h] = parseOklch(oklch);
  const newL = Math.max(0.05, Math.min(0.97, l + dL));
  const newC = +(c * chromaScale).toFixed(4);
  return `oklch(${newL.toFixed(3)} ${newC} ${h})`;
}

/** Opacity-Variante */
function opa(oklch: string, opacity: number): string {
  return oklch.replace(")", ` / ${opacity})`);
}

/** Vollständige CSS-Variablen aus einer ThemeDef erzeugen */
function buildVars(t: ThemeDef): Record<string, string> {
  const card         = adj(t.primary, 0.06);
  const primaryLight = adj(t.primary, 0.09);
  const accentLight  = adj(t.accent, 0.07);
  const textMuted    = adj(t.primary, 0.52, 0.25); // entsättigtes Hellgrau

  return {
    "--brand-primary":             t.primary,
    "--brand-primary-light":       primaryLight,
    "--brand-primary-foreground":  "oklch(1 0 0)",
    "--brand-accent":              t.accent,
    "--brand-accent-light":        accentLight,
    "--brand-accent-foreground":   t.accentFg,
    "--brand-surface":             t.primary,
    "--brand-text":                "oklch(1 0 0)",
    "--brand-text-muted":          textMuted,

    "--on-accent":                 t.accentFg,
    "--on-accent-muted":           opa(t.accentFg, 0.65),
    "--on-accent-faint":           opa(t.accentFg, 0.15),

    "--accent-fill-xs":            opa(t.accent, 0.08),
    "--accent-fill-sm":            opa(t.accent, 0.10),
    "--accent-fill":               opa(t.accent, 0.12),
    "--accent-fill-md":            opa(t.accent, 0.15),
    "--accent-border-sm":          opa(t.accent, 0.2),
    "--accent-border":             opa(t.accent, 0.25),
    "--accent-border-md":          opa(t.accent, 0.3),
    "--accent-border-lg":          opa(t.accent, 0.4),

    "--primary-glass":             opa(t.primary, 0.75),
    "--primary-elevated":          adj(t.primary, 0.04),
    "--primary-dark":              adj(t.primary, -0.04),
    "--primary-light-dim":         opa(primaryLight, 0.5),
    "--shadow-sm":                 opa(adj(t.primary, -0.05), 0.3),
    "--shadow-md":                 opa(adj(t.primary, -0.05), 0.5),

    "--background":                t.primary,
    "--foreground":                "oklch(1 0 0)",
    "--card":                      card,
    "--card-foreground":           "oklch(1 0 0)",
    "--popover":                   card,
    "--popover-foreground":        "oklch(1 0 0)",
    "--primary":                   t.primary,
    "--primary-foreground":        "oklch(1 0 0)",
    "--secondary":                 t.accent,
    "--secondary-foreground":      t.accentFg,
    "--muted":                     adj(t.primary, 0.08),
    "--muted-foreground":          textMuted,
    "--accent":                    t.accent,
    "--accent-foreground":         t.accentFg,
    "--border":                    "oklch(1 0 0 / 0.12)",
    "--input":                     adj(t.primary, 0.08),
    "--ring":                      t.accent,
  };
}

/* ─── Komponente ─────────────────────────────────────────────────────────── */

const STORAGE_KEY = "archivend-preview-theme";

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"farben" | "bilder">("farben");
  const [activeId, setActiveId] = useState("schiefer-champagner");
  const [activeImageId, setActiveImageId] = useState(DEFAULT_HERO_IMAGE.id);

  const applyTheme = useCallback((theme: ThemeDef) => {
    const vars = buildVars(theme);
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    setActiveId(theme.id);
    try { localStorage.setItem(STORAGE_KEY, theme.id); } catch { /* SSR */ }
  }, []);

  const applyImage = useCallback((img: HeroImageDef) => {
    setActiveImageId(img.id);
    try { localStorage.setItem(HERO_IMAGE_STORAGE_KEY, img.id); } catch {}
    window.dispatchEvent(new CustomEvent(HERO_IMAGE_EVENT, { detail: img.id }));
  }, []);

  // Gespeicherte Einstellungen beim ersten Laden wiederherstellen
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY);
      if (savedTheme) {
        const t = THEMES.find((x) => x.id === savedTheme);
        if (t) applyTheme(t);
      }
      const savedImage = localStorage.getItem(HERO_IMAGE_STORAGE_KEY);
      if (savedImage && HERO_IMAGES.find((x) => x.id === savedImage)) {
        setActiveImageId(savedImage);
      }
    } catch { /* SSR */ }
  }, [applyTheme]);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 select-none">

      {/* ── Panel ── */}
      {open && (
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "oklch(0.14 0.025 240)",
            border: "1px solid oklch(1 0 0 / 0.12)",
            boxShadow: "0 24px 64px oklch(0 0 0 / 0.6)",
            width: 272,
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}
          >
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4" style={{ color: "oklch(0.83 0.07 78)" }} />
              <span className="text-sm font-semibold text-white">Design</span>
              <span
                className="text-[10px] px-1.5 py-0.5 rounded font-semibold tracking-wide uppercase"
                style={{
                  background: "oklch(0.83 0.07 78 / 0.15)",
                  color: "oklch(0.83 0.07 78)",
                }}
              >
                Vorschau
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="transition-colors"
              style={{ color: "oklch(1 0 0 / 0.35)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "oklch(1 0 0 / 0.8)")}
              onMouseLeave={e => (e.currentTarget.style.color = "oklch(1 0 0 / 0.35)")}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex" style={{ borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
            {(["farben", "bilder"] as const).map((t) => {
              const isActive = tab === t;
              return (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold transition-colors"
                  style={{
                    color: isActive ? "white" : "oklch(1 0 0 / 0.4)",
                    borderBottom: isActive
                      ? "2px solid oklch(0.83 0.07 78)"
                      : "2px solid transparent",
                    marginBottom: -1,
                  }}
                >
                  {t === "farben" ? (
                    <Palette className="h-3.5 w-3.5" />
                  ) : (
                    <ImageIcon className="h-3.5 w-3.5" />
                  )}
                  {t === "farben" ? "Farben" : "Bilder"}
                </button>
              );
            })}
          </div>

          {/* Farben Tab */}
          {tab === "farben" && (
            <div className="p-3 grid grid-cols-3 gap-2 max-h-[380px] overflow-y-auto">
              {THEMES.map((theme) => {
                const isActive = activeId === theme.id;
                const [line1, line2] = theme.name.split(" · ");
                return (
                  <button
                    key={theme.id}
                    onClick={() => applyTheme(theme)}
                    title={theme.name}
                    className="flex flex-col gap-1.5 rounded-xl p-1.5 transition-all duration-150 cursor-pointer"
                    style={{
                      background: isActive ? "oklch(1 0 0 / 0.1)" : "transparent",
                      border: isActive
                        ? "1px solid oklch(1 0 0 / 0.3)"
                        : "1px solid oklch(1 0 0 / 0.06)",
                      outline: "none",
                    }}
                    onMouseEnter={e => {
                      if (!isActive) e.currentTarget.style.background = "oklch(1 0 0 / 0.06)";
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <div className="w-full rounded-md overflow-hidden flex" style={{ height: 30 }}>
                      <div className="flex-1" style={{ background: theme.primary }} />
                      <div className="w-[38%]" style={{ background: theme.accent }} />
                    </div>
                    <div className="text-center">
                      <p
                        className="text-[9px] leading-none font-medium"
                        style={{ color: isActive ? "white" : "oklch(1 0 0 / 0.55)" }}
                      >
                        {line1}
                      </p>
                      <p
                        className="text-[8px] leading-none mt-0.5"
                        style={{ color: isActive ? "oklch(1 0 0 / 0.7)" : "oklch(1 0 0 / 0.35)" }}
                      >
                        {line2}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Bilder Tab */}
          {tab === "bilder" && (
            <div className="p-3">
              <div className="grid grid-cols-2 gap-2">
                {HERO_IMAGES.map((img) => {
                  const isActive = activeImageId === img.id;
                  return (
                    <button
                      key={img.id}
                      onClick={() => applyImage(img)}
                      className="flex flex-col gap-1.5 rounded-xl p-1.5 transition-all duration-150 cursor-pointer"
                      style={{
                        background: isActive ? "oklch(1 0 0 / 0.1)" : "transparent",
                        border: isActive
                          ? "1px solid oklch(1 0 0 / 0.3)"
                          : "1px solid oklch(1 0 0 / 0.06)",
                        outline: "none",
                      }}
                      onMouseEnter={e => {
                        if (!isActive) e.currentTarget.style.background = "oklch(1 0 0 / 0.06)";
                      }}
                      onMouseLeave={e => {
                        if (!isActive) e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <div className="relative w-full rounded-md overflow-hidden" style={{ paddingBottom: "60%" }}>
                        <Image
                          src={img.src}
                          alt={img.label}
                          fill
                          className="object-cover object-center"
                          sizes="120px"
                        />
                      </div>
                      <p
                        className="text-[9px] text-center leading-none font-medium"
                        style={{ color: isActive ? "white" : "oklch(1 0 0 / 0.5)" }}
                      >
                        {img.label}
                      </p>
                    </button>
                  );
                })}
              </div>
              {/* Ausblenden Toggle */}
              <button
                onClick={() => {
                  const isHidden = activeImageId === HERO_IMAGE_HIDDEN_ID;
                  const newId = isHidden ? DEFAULT_HERO_IMAGE.id : HERO_IMAGE_HIDDEN_ID;
                  setActiveImageId(newId);
                  try { localStorage.setItem(HERO_IMAGE_STORAGE_KEY, newId); } catch {}
                  window.dispatchEvent(new CustomEvent(HERO_IMAGE_EVENT, { detail: newId }));
                }}
                className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg py-2 text-xs font-medium transition-all duration-150"
                style={{
                  background: activeImageId === HERO_IMAGE_HIDDEN_ID
                    ? "oklch(1 0 0 / 0.12)"
                    : "oklch(1 0 0 / 0.05)",
                  border: activeImageId === HERO_IMAGE_HIDDEN_ID
                    ? "1px solid oklch(1 0 0 / 0.25)"
                    : "1px solid oklch(1 0 0 / 0.1)",
                  color: activeImageId === HERO_IMAGE_HIDDEN_ID
                    ? "white"
                    : "oklch(1 0 0 / 0.45)",
                }}
              >
                {activeImageId === HERO_IMAGE_HIDDEN_ID
                  ? <><Eye className="h-3.5 w-3.5" /> Bild einblenden</>
                  : <><EyeOff className="h-3.5 w-3.5" /> Bild ausblenden</>
                }
              </button>
              <p className="text-[10px] text-center mt-2" style={{ color: "oklch(1 0 0 / 0.25)" }}>
                Weitere Bilder in hero-images.ts eintragen
              </p>
            </div>
          )}

          {/* Footer */}
          <div
            className="px-4 py-2.5 text-center"
            style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }}
          >
            <p className="text-[10px]" style={{ color: "oklch(1 0 0 / 0.3)" }}>
              Auswahl wird gespeichert · nur Vorschau
            </p>
          </div>
        </div>
      )}

      {/* ── Toggle Button ── */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full transition-all duration-200"
        style={{
          background: open ? "var(--brand-accent)" : "oklch(0.14 0.025 240)",
          border: "1px solid oklch(1 0 0 / 0.18)",
          color: open ? "var(--brand-accent-foreground)" : "white",
          padding: "10px 18px",
          boxShadow: "0 8px 24px oklch(0 0 0 / 0.4)",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
      >
        <Palette className="h-4 w-4" />
        <span className="text-sm font-semibold">Farben</span>
      </button>

    </div>
  );
}
