import type { Metadata } from "next";
import Link from "next/link";
import { Users, Inbox, Radar, FolderClock } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Kundenverwaltung für Selbstständige",
  description:
    "Kunden, Kontakte, Anfragen und Dokumente an einem Ort — mit automatischer Erinnerung, wenn ein Kunde länger nichts von sich hören lässt. 14 Tage kostenlos testen.",
};

const FEATURES = [
  {
    icon: Users,
    title: "Alles zu einem Kunden auf einen Blick",
    description:
      "Kontaktdaten, Ansprechpartner, Anfragen, Angebote, Aufträge, Rechnungen und Dokumente — statt über E-Mail-Postfach, Excel und Papierablage verstreut.",
  },
  {
    icon: Inbox,
    title: "Anfragen mit frei konfigurierbarem Workflow",
    description:
      "Vom ersten Kontakt bis zum gewonnenen Auftrag — eigene Bearbeitungsschritte festlegen, die zu deinem Betrieb passen, statt ein starres Standardschema.",
  },
  {
    icon: Radar,
    title: "Kunden-Radar als Frühwarnsystem",
    description:
      "TaskOrga erkennt automatisch, wenn ein Kunde lange nichts mehr bestellt hat oder seltener Termine vereinbart — bevor er ganz abspringt.",
  },
  {
    icon: FolderClock,
    title: "Nichts geht unter",
    description:
      "Jede Aktivität — Anruf, Angebot, Rechnung, Termin — landet automatisch in der Kundenhistorie, ohne dass du sie selbst protokollieren musst.",
  },
];

const FAQ = [
  {
    q: "Ist das ein vollwertiges CRM?",
    a: "TaskOrga deckt das ab, was Selbstständige und kleine Unternehmen im Alltag brauchen: Kunden, Kontakte, Anfragen-Workflow und Historie — ohne die Komplexität eines Enterprise-CRM.",
  },
  {
    q: "Kann ich Geschäfts- und Privatkunden verwalten?",
    a: "Ja, beide Kundentypen werden unterstützt, mit jeweils passenden Feldern (z. B. Firmenname vs. Vor-/Nachname).",
  },
  {
    q: "Woher weiß TaskOrga, dass ein Kunde inaktiv wird?",
    a: "Der Kunden-Radar wertet automatisch aus, wie lange der letzte Kontakt zurückliegt und ob sich die Terminfrequenz verringert hat — ganz ohne manuelles Nachtragen.",
  },
];

export default function KundenverwaltungPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Reveal>
        <div className="text-center">
          <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Kundenverwaltung für Selbstständige
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-ink-500">
            Kunden, Anfragen und die gesamte Historie an einem Ort — statt verstreut über Excel,
            E-Mail-Postfach und Papier.
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
