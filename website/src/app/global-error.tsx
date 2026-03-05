"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="de">
      <body style={{ margin: 0, fontFamily: "sans-serif", background: "#F8F9FC" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "480px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "80px",
                borderRadius: "16px",
                background: "rgba(239,68,68,0.1)",
                marginBottom: "2rem",
              }}
            >
              <AlertTriangle style={{ width: "40px", height: "40px", color: "#ef4444" }} />
            </div>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#1A1A2E",
                marginBottom: "1rem",
              }}
            >
              Kritischer Fehler
            </h1>
            <p style={{ color: "#6b7280", marginBottom: "2rem", lineHeight: "1.6" }}>
              Die Anwendung konnte nicht geladen werden. Bitte laden Sie die Seite neu.
            </p>
            <button
              onClick={reset}
              style={{
                background: "#1B2F5C",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "12px 24px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <RefreshCw style={{ width: "16px", height: "16px" }} />
              Seite neu laden
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
