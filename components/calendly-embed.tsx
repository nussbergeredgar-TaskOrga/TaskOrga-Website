"use client";

import { useState } from "react";

// Calendly (Calendly LLC, USA) setzt beim Laden Cookies und ueberbertraegt
// Daten in die USA -- ein automatisch ladendes iframe waere keine gueltige
// DSGVO-Einwilligung (blosses Aufrufen der Seite ist kein bewusstes Opt-in).
// Deshalb erst ein Platzhalter mit explizitem Zustimmungs-Klick, das iframe
// selbst laedt danach erst client-seitig.
export function CalendlyEmbed({ calendlyUrl }: { calendlyUrl: string }) {
  const [consented, setConsented] = useState(false);

  if (!consented) {
    return (
      <div className="mt-10 rounded-card border border-dashed border-ink-100 bg-ink-50 p-8 text-center">
        <p className="text-sm text-ink-500">
          Für die Terminbuchung binden wir den Dienst Calendly (Calendly LLC, USA) per iframe ein.
          Dabei werden Daten an Calendly übertragen und Cookies gesetzt.
        </p>
        <button
          type="button"
          onClick={() => setConsented(true)}
          className="mt-4 inline-block rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600"
        >
          Terminbuchung laden und Calendly zustimmen
        </button>
      </div>
    );
  }

  return (
    <div className="mt-10 overflow-hidden rounded-card border border-ink-100 shadow-card">
      <iframe
        src={`${calendlyUrl}?hide_gdpr_banner=1&locale=de`}
        title="Demo-Termin buchen"
        className="h-[700px] w-full"
      />
    </div>
  );
}
