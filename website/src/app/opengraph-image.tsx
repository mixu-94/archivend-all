import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Archivend GmbH — Ihr Partner für überlegene Bauwerte";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "oklch(0.20 0.04 240)",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 24,
          padding: 80,
        }}
      >
        <span
          style={{
            color: "oklch(0.83 0.07 78)",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          Archivend GmbH
        </span>
        <span style={{ color: "white", fontSize: 32, opacity: 0.8 }}>
          Ihr Partner für überlegene Bauwerte
        </span>
        <span
          style={{ color: "white", fontSize: 22, opacity: 0.5, marginTop: 8 }}
        >
          Günzburg, Bayern · Immobilien · Bauprojekte · Referenzen
        </span>
      </div>
    ),
    size
  );
}
