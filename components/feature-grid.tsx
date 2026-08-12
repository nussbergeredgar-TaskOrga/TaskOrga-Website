"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Users,
  Inbox,
  FileText,
  Briefcase,
  Calendar,
  ListTodo,
  Wallet,
  Radar,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { AutoFillDemo } from "@/components/auto-fill-demo";

type ModuleDef = {
  icon: LucideIcon;
  title: string;
  description: string;
  demoLabel: string;
  demoFields: { label: string; value: string }[];
  demoResult: string;
};

// Icon-Komponenten (Funktionen) lassen sich nicht als Prop von einer Server-
// an eine Client-Komponente reichen (React-RSC-Grenze) -- die Modul-Liste
// lebt deshalb direkt hier statt als Prop von app/page.tsx zu kommen.
// Feldnamen/-reihenfolge sind 1:1 aus den echten "Neu anlegen"-Formularen der
// Software uebernommen (components/customer-form.tsx, inquiry-form.tsx,
// quote-form.tsx, project-quick-form.tsx, appointment-quick-form.tsx,
// task-form.tsx, invoice-form.tsx) -- keine erfundenen Felder.
const MODULES: ModuleDef[] = [
  {
    icon: Users,
    title: "Kunden",
    description: "Alle Kontaktdaten, Historie und Dokumente an einem Ort — pro Kunde auf einen Blick.",
    demoLabel: "Formular „Neuer Kunde“",
    demoFields: [
      { label: "Kundentyp", value: "Geschäftskunde" },
      { label: "Firmenname", value: "Müller GmbH" },
      { label: "Ort", value: "Hamburg" },
    ],
    demoResult: "Kunde angelegt",
  },
  {
    icon: Inbox,
    title: "Anfragen",
    description: "Vom ersten Kontakt bis zum Auftrag, mit frei konfigurierbarem Workflow.",
    demoLabel: "Formular „Neue Anfrage“",
    demoFields: [
      { label: "Kunde", value: "Müller GmbH" },
      { label: "Titel", value: "Wallbox-Installation" },
      { label: "Quelle", value: "Weiterempfehlung" },
    ],
    demoResult: "Anfrage angelegt",
  },
  {
    icon: FileText,
    title: "Angebote",
    description: "Positionen, MwSt. pro Position, Rabatte, Positions-Bibliothek und Versionierung.",
    demoLabel: "Formular „Neues Angebot“",
    demoFields: [
      { label: "Kunde", value: "Müller GmbH" },
      { label: "Titel", value: "Elektroinstallation" },
      { label: "Gültig bis", value: "30 Tage" },
    ],
    demoResult: "Angebot erstellt",
  },
  {
    icon: Briefcase,
    title: "Aufträge",
    description: "Laufende Arbeiten im Blick behalten, vom Angebot bis zum Abschluss.",
    demoLabel: "Formular „Neuer Auftrag“",
    demoFields: [
      { label: "Kunde", value: "Müller GmbH" },
      { label: "Titel", value: "Bad-Sanierung" },
    ],
    demoResult: "Auftrag angelegt",
  },
  {
    icon: Calendar,
    title: "Termine",
    description: "Kalender mit Monats-, Wochen- und Tagesansicht, Zuständigkeiten und Arbeitszeiten.",
    demoLabel: "Formular „Neuer Termin“",
    demoFields: [
      { label: "Kunde", value: "Familie Schmidt" },
      { label: "Titel", value: "Wallbox-Beratung" },
      { label: "Art", value: "Vor-Ort-Termin" },
    ],
    demoResult: "Termin gespeichert",
  },
  {
    icon: ListTodo,
    title: "Aufgaben",
    description: "Frei erstellbare To-dos, verknüpfbar mit Kunden, Angeboten oder Terminen.",
    demoLabel: "Formular „Neue Aufgabe“",
    demoFields: [
      { label: "Titel", value: "Material bestellen" },
      { label: "Fällig am", value: "Morgen" },
      { label: "Priorität", value: "Hoch" },
    ],
    demoResult: "Aufgabe angelegt",
  },
  {
    icon: Wallet,
    title: "Rechnungen",
    description: "PDF-Erstellung, E-Mail-Versand und automatisches Mahnwesen.",
    demoLabel: "Formular „Neue Rechnung“",
    demoFields: [
      { label: "Kunde", value: "Müller GmbH" },
      { label: "Position", value: "Elektroinstallation" },
      { label: "Betrag", value: "1.850 €" },
    ],
    demoResult: "Rechnung erstellt",
  },
  {
    icon: Radar,
    title: "Kunden-Radar",
    description: "Frühwarnsystem für Kunden, die länger nichts mehr von sich hören ließen.",
    demoLabel: "Automatisch erkanntes Signal",
    demoFields: [
      { label: "Kunde", value: "Schmidt GmbH" },
      { label: "Kein Kontakt seit", value: "94 Tagen" },
    ],
    demoResult: "Automatisch erkannt",
  },
  {
    icon: BarChart3,
    title: "Einblicke",
    description: "Frei baubare Diagramme und Kennzahlen zu jedem Datentyp in deinem System.",
    demoLabel: "Formular „Neues Diagramm“",
    demoFields: [
      { label: "Name", value: "Rechnungen nach Status" },
      { label: "Datentyp", value: "Rechnungen" },
      { label: "Gruppiert nach", value: "Status" },
    ],
    demoResult: "Diagramm erstellt",
  },
];

// Klick auf eine Kachel: Grid weicht einer einzelnen, zentrierten Kachel mit
// einer kurzen Auto-Ausfuell-Animation darunter (~5s, siehe AutoFillDemo).
// "Zurueck" schliesst sie wieder und zeigt das volle Grid.
export function FeatureGrid() {
  const [openTitle, setOpenTitle] = useState<string | null>(null);
  const active = MODULES.find((m) => m.title === openTitle) ?? null;

  if (active) {
    return <ExpandedCard module={active} onBack={() => setOpenTitle(null)} />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {MODULES.map((m) => (
        <button
          key={m.title}
          type="button"
          onClick={() => setOpenTitle(m.title)}
          className="group rounded-card border border-ink-100 bg-surface p-5 text-left shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-500 group-hover:text-white">
            <m.icon size={20} strokeWidth={2} />
          </div>
          <h3 className="mt-4 font-display font-semibold text-ink-900">{m.title}</h3>
          <p className="mt-1.5 text-sm text-ink-500">{m.description}</p>
        </button>
      ))}
    </div>
  );
}

function ExpandedCard({ module: m, onBack }: { module: ModuleDef; onBack: () => void }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`mx-auto max-w-md transition-all duration-300 ${
        shown ? "scale-100 opacity-100" : "scale-95 opacity-0"
      }`}
    >
      <div className="rounded-card border border-brand-500/30 bg-surface p-6 shadow-cardHover">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-white">
          <m.icon size={20} strokeWidth={2} />
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{m.title}</h3>
        <p className="mt-1.5 text-sm text-ink-500">{m.description}</p>

        <div className="mt-5 overflow-hidden rounded-lg border border-ink-100 shadow-card">
          <div className="flex items-center gap-1.5 border-b border-ink-100 bg-ink-50 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
            <span className="ml-2 font-mono text-[11px] text-ink-300">{m.demoLabel}</span>
          </div>
          <div className="bg-surface p-4">
            <AutoFillDemo fields={m.demoFields} resultLabel={m.demoResult} playKey={m.title} />
          </div>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="mt-5 flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
        >
          <ArrowLeft size={15} />
          Zurück
        </button>
      </div>
    </div>
  );
}
