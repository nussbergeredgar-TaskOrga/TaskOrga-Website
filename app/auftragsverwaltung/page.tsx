import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Clock, Calendar, ListTodo } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Auftragsverwaltung für Dienstleister",
  description:
    "Aufträge, Zeiterfassung, Termine und Aufgaben an einem Ort — vom Angebot bis zur Rechnung. Für Handwerker, Berater und Dienstleister. 14 Tage kostenlos testen.",
};

const FEATURES = [
  {
    icon: Briefcase,
    title: "Vom Angebot direkt zum Auftrag",
    description:
      "Ein angenommenes Angebot wird mit einem Klick zum Auftrag, ohne Positionen erneut einzutippen — und lässt sich danach jederzeit direkt anlegen, auch ohne vorheriges Angebot.",
  },
  {
    icon: Clock,
    title: "Zeiterfassung pro Auftrag",
    description:
      "Gearbeitete Stunden direkt am Auftrag erfassen und zum hinterlegten Stundensatz automatisch in die Rechnung übernehmen.",
  },
  {
    icon: Calendar,
    title: "Termine mit Zuständigkeiten",
    description:
      "Vor-Ort-Termine und Rückrufe im Kalender planen, einem Mitarbeiter zuweisen und direkt mit dem passenden Auftrag verknüpfen.",
  },
  {
    icon: ListTodo,
    title: "Aufgaben, die nichts vergessen",
    description:
      "Material bestellen, Rückruf erledigen, Abnahme vereinbaren — als Aufgabe direkt am Auftrag, mit Fälligkeitsdatum und automatischer Erinnerung bei Überfälligkeit.",
  },
];

const FAQ = [
  {
    q: "Eignet sich TaskOrga für Handwerksbetriebe?",
    a: "Ja — Auftragsverwaltung, Zeiterfassung und Terminplanung decken den typischen Ablauf von der Anfrage bis zur Rechnung ab, unabhängig von der Branche.",
  },
  {
    q: "Können mehrere Mitarbeiter gleichzeitig arbeiten?",
    a: "Ja, Aufträge, Termine und Aufgaben lassen sich einzelnen Mitarbeitern zuweisen — jeder sieht, wofür er zuständig ist.",
  },
  {
    q: "Wie wird aus erfasster Arbeitszeit eine Rechnung?",
    a: "Beim Erstellen der Rechnung aus dem Auftrag lässt sich die noch nicht abgerechnete Zeit auswählen und automatisch zum hinterlegten Stundensatz übernehmen.",
  },
];

export default function AuftragsverwaltungPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Reveal>
        <div className="text-center">
          <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Auftragsverwaltung für Dienstleister
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-ink-500">
            Aufträge, Zeiterfassung, Termine und Aufgaben an einem Ort — vom Angebot bis zur
            Rechnung, für Handwerker, Berater und Dienstleister aus jeder Branche.
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
