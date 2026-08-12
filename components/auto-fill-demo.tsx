"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Check } from "lucide-react";

type Field = { label: string; value: string };

// Spielt einmalig ein kurzes "Tippen"-Erlebnis ab (~5s je nach Feldlaenge):
// jedes Feld fuellt sich Zeichen fuer Zeichen, dann erscheint eine kurze
// Erfolgsmeldung -- gefolgt vom echten UI-Element aus der Software (Kachel/
// Zeile/Mini-Diagramm, siehe resultPreview in feature-grid.tsx), wie der neue
// Datensatz jetzt dort aussehen wuerde ("Ergebnis sichtbar machen" statt nur
// einer Text-Bestaetigung). playKey aendert sich pro geoeffneter Kachel und
// startet die Animation dadurch bei jedem Oeffnen frisch von vorn.
export function AutoFillDemo({
  fields,
  resultLabel,
  resultPreview,
  playKey,
}: {
  fields: Field[];
  resultLabel: string;
  resultPreview: ReactNode;
  playKey: string;
}) {
  const [typed, setTyped] = useState<string[]>(() => fields.map(() => ""));
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTyped(fields.map(() => ""));
    setDone(false);
    let cancelled = false;
    const CHAR_MS = 35;
    const GAP_MS = 250;

    async function run() {
      for (let i = 0; i < fields.length; i++) {
        const value = fields[i].value;
        for (let c = 1; c <= value.length; c++) {
          if (cancelled) return;
          await new Promise((r) => setTimeout(r, CHAR_MS));
          setTyped((prev) => {
            const next = [...prev];
            next[i] = value.slice(0, c);
            return next;
          });
        }
        if (cancelled) return;
        await new Promise((r) => setTimeout(r, GAP_MS));
      }
      if (!cancelled) setDone(true);
    }
    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playKey]);

  return (
    <div className="space-y-2.5">
      {fields.map((f, i) => (
        <div key={f.label}>
          <p className="text-[10px] font-medium uppercase tracking-wide text-ink-300">{f.label}</p>
          <div className="mt-1 flex h-9 items-center rounded-lg border border-ink-100 bg-surface px-3 font-mono text-sm text-ink-900">
            {typed[i]}
            {typed[i].length < f.value.length && (
              <span className="ml-0.5 inline-block h-3.5 w-px animate-pulse bg-brand-500" />
            )}
          </div>
        </div>
      ))}
      <div
        className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-opacity duration-500 ${
          done ? "border-success/30 bg-success/10 text-success opacity-100" : "opacity-0"
        }`}
      >
        <Check size={15} />
        {resultLabel}
      </div>

      <div
        className={`transition-all duration-500 delay-300 ${
          done ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        {resultPreview}
      </div>
    </div>
  );
}
