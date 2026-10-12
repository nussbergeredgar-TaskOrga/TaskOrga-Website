import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Percent, History, Library } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { HomeLink } from "@/components/home-link";

export const metadata: Metadata = {
  title: "Angebote schreiben Software",
  description:
    "Angebote mit Positionen, Rabatten und Mehrwertsteuer pro Position erstellen — mit Positions-Bibliothek und Versionierung. 14 Tage kostenlos testen.",
};

const FEATURES = [
  {
    icon: FileText,
    title: "Positionen statt Fließtext",
    description:
      "Menge, Einheit, Einzelpreis und Steuersatz pro Zeile — TaskOrga berechnet Zwischensummen und Gesamtbetrag automatisch, kein Nachrechnen von Hand.",
  },
  {
    icon: Percent,
    title: "Rabatte pauschal oder prozentual",
    description:
      "Ein Nachlass auf das ganze Angebot, als Betrag oder Prozentsatz — wird korrekt auf alle Positionen umgelegt, inklusive Steuerberechnung.",
  },
  {
    icon: Library,
    title: "Positions-Bibliothek",
    description:
      "Häufig verwendete Leistungen und Artikel einmal anlegen und in jedem neuen Angebot per Klick übernehmen, statt sie jedes Mal neu einzutippen.",
  },
  {
    icon: History,
    title: "Versionierung",
    description:
      "Änderungswünsche des Kunden? Der vorherige Stand bleibt als Version erhalten, bevor du das Angebot anpasst — nachvollziehbar, was sich geändert hat.",
  },
];

const FAQ = [
  {
    q: "Kann ich aus einem angenommenen Angebot direkt einen Auftrag erstellen?",
    a: "Ja. Ein angenommenes Angebot lässt sich mit einem Klick in einen Auftrag umwandeln, die Positionen werden übernommen.",
  },
  {
    q: "Kann der Kunde das Angebot online einsehen?",
    a: "Angebote lassen sich als PDF versenden oder als Vorschau-Link teilen, ohne dass der Kunde ein eigenes Konto braucht.",
  },
  {
    q: "Wie läuft die Umwandlung in eine Rechnung ab?",
    a: "Direkt aus dem zugehörigen Auftrag — einzelne Positionen lassen sich dabei auswählen, falls nur ein Teil abgerechnet werden soll.",
  },
];

export default function AngeboteSoftwarePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <HomeLink />
      <Reveal>
        <div className="text-center">
          <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Angebote schreiben — Software statt Word-Vorlage
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-ink-500">
            Professionelle Angebote mit Positionen, Rabatten und korrekter Mehrwertsteuer erstellen
            — und mit einem Klick zum Auftrag und zur Rechnung weiterführen.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/registrieren"
              className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white shadow-card transition-colors hover:bg-brand-600"
            >
              14 Tage kostenlos testen
            </Link>
            <Link
              href="/preise"
              className="rounded-lg border border-ink-100 px-6 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50"
            >
              Preise ansehen
            </Link>
          </div>
          <p className="mt-3 font-mono text-xs text-ink-300">keine Kreditkarte nötig · jederzeit kündbar</p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 100}>
            <div className="h-full rounded-card border border-ink-100 p-6 shadow-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-turquoise-500 text-white">
                <f.icon size={20} strokeWidth={2} />
              </div>
              <h2 className="mt-4 font-display font-semibold text-ink-900">{f.title}</h2>
              <p className="mt-2 text-sm text-ink-500">{f.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14">
          <h2 className="font-display text-xl font-semibold text-ink-900">Häufige Fragen</h2>
          <div className="mt-5 space-y-5">
            {FAQ.map((item) => (
              <div key={item.q}>
                <p className="font-medium text-ink-900">{item.q}</p>
                <p className="mt-1 text-sm text-ink-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-14 rounded-card bg-ink-50 p-6 text-center">
          <p className="font-display font-semibold text-ink-900">14 Tage kostenlos testen</p>
          <p className="mt-1 text-sm text-ink-500">Ohne Kreditkarte, jederzeit kündbar.</p>
          <Link
            href="/registrieren"
            className="mt-4 inline-block rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600"
          >
            Kostenlos registrieren
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
