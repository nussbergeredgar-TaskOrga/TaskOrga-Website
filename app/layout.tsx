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
    default: "TaskOrga – Software für Handwerksbetriebe",
    template: "%s – TaskOrga",
  },
  description:
    "Kunden, Anfragen, Angebote, Aufträge, Rechnungen, Termine und Aufgaben an einem Ort. Weniger Büro. Mehr Business. 14 Tage kostenlos testen.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "TaskOrga",
    title: "TaskOrga – Software für Handwerksbetriebe",
    description:
      "Kunden, Anfragen, Angebote, Aufträge, Rechnungen, Termine und Aufgaben an einem Ort. Weniger Büro. Mehr Business.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-surface text-ink-900 flex min-h-screen flex-col">
        <SplashScreen />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
