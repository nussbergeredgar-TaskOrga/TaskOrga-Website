import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Wallet, Bell, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { HomeLink } from "@/components/home-link";

export const metadata: Metadata = {
  title: "Rechnungsprogramm für Kleinunternehmer",
  description:
    "Rechnungen und Angebote in Minuten erstellen, automatisches Mahnwesen, korrekte Kleinunternehmerregelung nach §19 UStG. 14 Tage kostenlos testen.",
};

const FEATURES = [
  {
    icon: FileText,
    title: "Rechnungen in Minuten",
    description:
      "Positionen, Mehrwertsteuersätze pro Position und Rabatte — als professionelles PDF direkt aus TaskOrga versendet.",
  },
  {
    icon: ShieldCheck,
    title: "Kleinunternehmerregelung inklusive",
    description:
      "Mehrwertsteuer-Ausweis auf Dokumenten lässt sich firmenweit ein- oder ausschalten — passend zu §19 UStG, ohne Vorlagen von Hand anpassen zu müssen.",
  },
  {
    icon: Bell,
    title: "Automatisches Mahnwesen",
    description:
      "Offene Rechnungen werden selbstständig erkannt und Erinnerungsstufen automatisch verschickt — kein Nachhalten in Excel mehr nötig.",
  },
  {
    icon: Wallet,
    title: "Umsatz immer im Blick",
    description:
      "Offene Rechnungen, bezahlte Beträge und der Umsatz des laufenden Monats direkt auf dem Dashboard, ohne eigene Tabelle zu pflegen.",
  },
];

const FAQ = [
  {
    q: "Ersetzt TaskOrga meine Buchhaltung?",
    a: "Nein. TaskOrga erstellt und verfolgt Rechnungen, ist aber keine Buchhaltung: keine Belegerfassung, kein Banking, keine Umsatzsteuer-Voranmeldung. Die Buchhaltung macht weiter dein Steuerberater oder deine Buchhaltungssoftware.",
  },
  {
    q: "Ist TaskOrga für die Kleinunternehmerregelung geeignet?",
    a: "Ja. Der Mehrwertsteuer-Ausweis auf Rechnungen und Angeboten lässt sich in den Firmeneinstellungen zentral ein- oder ausschalten — passend zu §19 UStG.",
  },
  {
    q: "Brauche ich Buchhaltungskenntnisse?",
    a: "Nein. Positionen, Preise und Steuersätze eintragen — TaskOrga berechnet Summen, Steuerbeträge und erstellt das PDF automatisch.",
  },
  {
    q: "Kann ich Rechnungen auch aus einem Angebot erstellen?",
    a: "Ja, direkt aus einem angenommenen Angebot oder einem laufenden Auftrag — die Positionen werden übernommen, ohne sie erneut einzutippen.",
  },
];

export default function RechnungsprogrammKleinunternehmerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <HomeLink />
      <Reveal>
        <div className="text-center">
          <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Rechnungsprogramm für Kleinunternehmer
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-ink-500">
            Rechnungen entstehen direkt aus deinem Angebot oder Auftrag — ohne Daten doppelt zu
            tippen. Zahlungen behältst du im Blick, überfällige Beträge werden automatisch
            nachgefasst. Die Buchhaltung bleibt bei deinem Steuerberater.
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
