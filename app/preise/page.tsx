import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Preise",
  description: "Ein transparenter Preis pro Mitarbeiter, gestaffelt nach Teamgröße. 14 Tage kostenlos testen, ohne Kreditkarte.",
};

const TIERS = [
  { range: "1–4 Mitarbeiter", price: "19", note: "pro Mitarbeiter / Monat" },
  { range: "5–10 Mitarbeiter", price: "14", note: "pro Mitarbeiter / Monat" },
  { range: "ab 11 Mitarbeitern", price: "9", note: "pro Mitarbeiter / Monat, ohne Obergrenze" },
];

// Gestaffelt und kumulativ, wie in den FAQ unten beschrieben (und in
// lib/subscription-pricing.ts der App): Stufe richtet sich nach der Position
// des Mitarbeiters, nicht nach der Gesamtzahl.
function monthlyPrice(employees: number): number {
  let total = 0;
  for (let i = 1; i <= employees; i++) total += i <= 4 ? 19 : i <= 10 ? 14 : 9;
  return total;
}

const EXAMPLE_TEAM_SIZES = [1, 3, 5, 10, 15];

export default function PreisePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Reveal>
        <div className="text-center">
          <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Ein Preis, der mit dir wächst
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-ink-500">
            Du zahlst pro Mitarbeiter, der TaskOrga tatsächlich nutzt — je größer dein Team, desto
            günstiger pro Kopf. Keine Einrichtungsgebühr, kein Mindestvertrag.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {TIERS.map((t, i) => (
          <Reveal key={t.range} delay={i * 120}>
            <div className="rounded-card border border-ink-100 p-6 text-center shadow-card">
              <p className="text-sm font-medium text-ink-500">{t.range}</p>
              <p className="mt-3 font-display text-4xl font-semibold text-ink-900">{t.price} €</p>
              <p className="mt-1 text-xs text-ink-300">{t.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10">
          <h2 className="text-center font-display text-lg font-semibold text-ink-900">
            Was das im Monat konkret heißt
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {EXAMPLE_TEAM_SIZES.map((n) => (
              <div key={n} className="rounded-card border border-ink-100 p-4 text-center">
                <p className="text-sm text-ink-500">{n} Mitarbeiter</p>
                <p className="mt-1 font-display text-2xl font-semibold text-ink-900">{monthlyPrice(n)} €</p>
                <p className="text-xs text-ink-300">pro Monat</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-ink-300">
            Alle Preise netto, zuzüglich der gesetzlichen Umsatzsteuer.
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 rounded-card bg-ink-50 p-6 text-center">
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

      <Reveal>
        <div className="mt-12">
          <h2 className="font-display text-lg font-semibold text-ink-900">Häufige Fragen</h2>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <p className="font-medium text-ink-900">Wie wird abgerechnet?</p>
              <p className="text-ink-500">
                Gestaffelt und kumulativ: die ersten 4 Mitarbeiter kosten je 19 €, der 5. bis 10.
                je 14 €, ab dem 11. Mitarbeiter ohne Obergrenze je 9 € — automatisch passend zu
                deiner aktuellen Teamgröße.
              </p>
            </div>
            <div>
              <p className="font-medium text-ink-900">Brauche ich eine Kreditkarte für die Testphase?</p>
              <p className="text-ink-500">Nein. Du kannst 14 Tage lang alles testen, ohne Zahlungsdaten zu hinterlegen.</p>
            </div>
            <div>
              <p className="font-medium text-ink-900">Kann ich jederzeit kündigen?</p>
              <p className="text-ink-500">Ja, monatlich kündbar, keine Mindestlaufzeit.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
