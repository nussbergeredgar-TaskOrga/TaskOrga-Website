import Link from "next/link";
import { Sparkles, Palette, ShieldCheck } from "lucide-react";
import { ProductPreview } from "@/components/product-preview";
import { Reveal } from "@/components/reveal";
import { FeatureGrid } from "@/components/feature-grid";

const HIGHLIGHTS = [
  {
    icon: Sparkles,
    title: "Freier Diagramm-Baukasten",
    description:
      "Keine starren Standard-Reports: gruppiere jedes Feld jedes Datentyps frei — nach Status, Zeitraum, Wertebereich oder Zuständigkeit — und behalte genau die Zahlen im Blick, die für dich zählen.",
  },
  {
    icon: Palette,
    title: "Eigene Angebots- & Rechnungsvorlagen",
    description:
      "Logo, Farben, Textbausteine und Absenderzeile selbst gestalten — professionelle Dokumente, die aussehen wie aus deiner eigenen Handschrift.",
  },
  {
    icon: ShieldCheck,
    title: "Zwei-Faktor-Absicherung",
    description:
      "Deine Kunden- und Firmendaten zusätzlich mit einer Authenticator-App absichern — ohne zusätzliche Hardware.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-10%,rgba(47,95,255,0.10),transparent_45%),radial-gradient(circle_at_90%_10%,rgba(15,185,174,0.10),transparent_40%)]" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-surface px-3 py-1 font-mono text-[11px] text-ink-500">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                Software für Handwerks- &amp; Dienstleistungsbetriebe
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
                Weniger Büro.{" "}
                <span className="bg-gradient-to-r from-brand-500 to-turquoise-500 bg-clip-text text-transparent">
                  Mehr Business.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 max-w-lg text-lg text-ink-500">
                Kunden, Anfragen, Angebote, Aufträge, Rechnungen, Termine und Aufgaben — alles in
                einem System statt verstreut über Excel, E-Mail und Papier.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/registrieren"
                  className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white shadow-card transition-colors hover:bg-brand-600"
                >
                  14 Tage kostenlos testen
                </Link>
                <Link
                  href="/demo"
                  className="rounded-lg border border-ink-100 px-6 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50"
                >
                  Demo buchen
                </Link>
              </div>
              <p className="mt-3 font-mono text-xs text-ink-300">keine Kreditkarte nötig · jederzeit kündbar</p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <ProductPreview />
          </Reveal>
        </div>

        <div className="hidden justify-center pb-10 sm:flex">
          <a
            href="#funktionen"
            aria-label="Zu den Funktionen scrollen"
            className="flex flex-col items-center gap-1.5 text-ink-300 transition-colors hover:text-ink-500"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider">Scrollen</span>
            <span className="h-8 w-px animate-pulse bg-current" />
          </a>
        </div>
      </section>

      <section id="funktionen" className="border-t border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink-900">Alles, was dein Betrieb braucht</h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-500">
              Ein durchgängiges System statt Insellösungen aus Excel, E-Mail und Papier.
            </p>
          </Reveal>
          <div className="mt-8">
            <Reveal>
              <FeatureGrid />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink-900">Was TaskOrga besonders macht</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 120}>
              <div className="rounded-card border border-ink-100 p-6 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-turquoise-500 text-white">
                  <h.icon size={20} strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-ink-900">{h.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{h.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink-900">Bereit loszulegen?</h2>
            <p className="mt-2 text-sm text-ink-500">14 Tage kostenlos testen — ohne Kreditkarte.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/registrieren"
                className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white shadow-card transition-colors hover:bg-brand-600"
              >
                Kostenlos registrieren
              </Link>
              <Link
                href="/preise"
                className="rounded-lg border border-ink-100 px-6 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50"
              >
                Preise ansehen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
