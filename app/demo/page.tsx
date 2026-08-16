import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo buchen",
  description: "Vereinbare eine kostenlose, unverbindliche Live-Demo von TaskOrga.",
};

export default function DemoPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">Demo buchen</h1>
        <p className="mx-auto mt-3 max-w-xl text-ink-500">
          30 Minuten, live und unverbindlich — wir zeigen dir TaskOrga anhand deines Alltags.
        </p>
      </div>

      {calendlyUrl ? (
        <div className="mt-10 overflow-hidden rounded-card border border-ink-100 shadow-card">
          <iframe
            src={`${calendlyUrl}?hide_gdpr_banner=1&locale=de`}
            title="Demo-Termin buchen"
            className="h-[700px] w-full"
          />
        </div>
      ) : (
        <div className="mt-10 rounded-card border border-dashed border-ink-100 bg-ink-50 p-8 text-center">
          <p className="text-sm text-ink-500">
            Die Terminbuchung wird gerade eingerichtet. Schreib uns bis dahin gern direkt eine
            E-Mail — wir melden uns kurzfristig mit Terminvorschlägen.
          </p>
          <a
            href="mailto:info@taskorga.de"
            className="mt-4 inline-block rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600"
          >
            E-Mail schreiben
          </a>
        </div>
      )}
    </div>
  );
}
