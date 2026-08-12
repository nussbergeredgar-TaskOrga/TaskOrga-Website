import { Parallax } from "@/components/parallax";

// Abstrakte, gestalterische Andeutung des Dashboards (keine echte Bildschirmaufnahme) --
// vermittelt "Software-Produkt" rein per CSS, ohne einen falschen Screenshot zu behaupten.
export function ProductPreview() {
  const bars = [40, 65, 50, 80, 60, 95];
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <Parallax speed={0.12} className="absolute -top-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <Parallax speed={0.22} className="absolute -bottom-10 right-0 h-48 w-48 rounded-full bg-turquoise-500/20 blur-3xl" />

      <div className="relative rounded-card border border-ink-100 bg-surface p-5 shadow-cardHover">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
          <span className="ml-2 font-mono text-[11px] text-ink-300">app.taskorga.de</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2.5">
          <div className="rounded-lg border border-ink-100 p-3">
            <p className="text-[11px] text-ink-500">Umsatz</p>
            <p className="font-display text-lg font-semibold text-ink-900">12.480 €</p>
          </div>
          <div className="rounded-lg border border-ink-100 p-3">
            <p className="text-[11px] text-ink-500">Offene Aufgaben</p>
            <p className="font-display text-lg font-semibold text-ink-900">7</p>
          </div>
          <div className="rounded-lg border border-ink-100 p-3">
            <p className="text-[11px] text-ink-500">Neue Anfragen</p>
            <p className="font-display text-lg font-semibold text-ink-900">4</p>
          </div>
        </div>

        <div className="mt-3 flex h-28 items-end gap-2 rounded-lg border border-ink-100 p-3">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-brand-500 to-turquoise-500"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
