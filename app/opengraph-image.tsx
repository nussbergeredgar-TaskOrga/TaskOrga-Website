import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TaskOrga – Software für Selbstständige & kleine Unternehmen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Serverseitig generiertes Vorschaubild fuer geteilte Links (LinkedIn, WhatsApp,
// etc.) -- ohne dieses hatte die Website kein Open-Graph-Bild, weshalb geteilte
// Links bisher ohne Vorschau erschienen. Next.js bindet eine opengraph-image.*-
// Datei im App-Root automatisch in die Metadaten aller Seiten ein, die keine
// eigene definieren.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            height: 120,
            width: 120,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 32,
            background: "linear-gradient(135deg, #2F5FFF 0%, #0FB9AE 100%)",
            color: "#FFFFFF",
            fontSize: 64,
            fontWeight: 700,
          }}
        >
          T
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "#1C2128" }}>TaskOrga</div>
        <div style={{ display: "flex", fontSize: 32, color: "#5B636D", whiteSpace: "pre" }}>
          <span>{"Weniger Büro. "}</span>
          <span style={{ color: "#2F5FFF", fontWeight: 600 }}>Mehr Business.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
