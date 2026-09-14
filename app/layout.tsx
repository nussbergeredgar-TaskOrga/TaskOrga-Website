import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SplashScreen } from "@/components/splash-screen";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
});

const siteUrl = "https://taskorga.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TaskOrga – Software für Selbstständige & kleine Unternehmen",
    template: "%s – TaskOrga",
  },
  description:
    "Kunden, Anfragen, Angebote, Aufträge, Rechnungen, Termine und Aufgaben an einem Ort. Weniger Büro. Mehr Business. 14 Tage kostenlos testen.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "TaskOrga",
    title: "TaskOrga – Software für Selbstständige & kleine Unternehmen",
    description:
      "Kunden, Anfragen, Angebote, Aufträge, Rechnungen, Termine und Aufgaben an einem Ort. Weniger Büro. Mehr Business.",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

// Hilft Google, die Seite als konkretes Software-Produkt statt als generische
// Seite einzuordnen (Grundlage fuer Rich-Snippets, z.B. Preis-Anzeige direkt
// im Suchergebnis). Startpreis entspricht der guenstigsten Staffel-Stufe auf
// /preise (19 € je Mitarbeiter/Monat fuer die ersten 4 Mitarbeiter).
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TaskOrga",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: siteUrl,
  description:
    "Kunden, Anfragen, Angebote, Aufträge, Rechnungen, Termine und Aufgaben an einem Ort für Selbstständige und kleine Unternehmen.",
  offers: {
    "@type": "Offer",
    price: "19",
    priceCurrency: "EUR",
    priceValidUntil: "2027-12-31",
    url: `${siteUrl}/preise`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-surface text-ink-900 flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SplashScreen />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
