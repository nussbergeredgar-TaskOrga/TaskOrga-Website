"use client";

import { useEffect, useState } from "react";
import { Check, type LucideIcon } from "lucide-react";

type Field = { label: string; value: string };
type ResultPreview = { primary: string; secondary: string };

// Spielt einmalig ein kurzes "Tippen"-Erlebnis ab (~5s je nach Feldlaenge):
// jedes Feld fuellt sich Zeichen fuer Zeichen, dann erscheint eine kurze
// Erfolgsmeldung -- gefolgt von einer kleinen Vorschau-Zeile, wie der neue
// Datensatz jetzt in der echten Liste aussehen wuerde ("Ergebnis sichtbar
// machen" statt nur einer Text-Bestaetigung). playKey aendert sich pro
// geoeffneter Kachel und startet die Animation dadurch bei jedem Oeffnen
// frisch von vorn.
export function AutoFillDemo({
  icon: Icon,
  fields,
  resultLabel,
  resultPreview,
  playKey,
}: {
  icon: LucideIcon;
  fields: Field[];
  resultLabel: string;
  resultPreview: ResultPreview;
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
        className={`flex items-center gap-3 rounded-lg border border-ink-100 bg-ink-50 px-3 py-2.5 transition-all duration-500 delay-300 ${
          done ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white">
          <Icon size={15} strokeWidth={2} />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-medium text-ink-900">{resultPreview.primary}</span>
          <span className="block truncate text-xs text-ink-500">{resultPreview.secondary}</span>
        </span>
      </div>
    </div>
  );
}
