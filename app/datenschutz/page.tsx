import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von TaskOrga.",
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display font-semibold text-ink-900">{children}</h2>;
}

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-ink-900">Datenschutzerklärung</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-700">
        <section>
          <H2>Verantwortlicher</H2>
          <p className="mt-1">
            Edgar Nussberger
            <br />
            In der Mudersbach 6
            <br />
            55469 Mutterschied
            <br />
            Deutschland
            <br />
            E-Mail:{" "}
            <a href="mailto:info@taskorga.de" className="text-brand-700 hover:underline">
              info@taskorga.de
            </a>
          </p>
        </section>

        <section>
          <H2>Hosting</H2>
          <p className="mt-1">
            Diese Webseite wird bei Vercel Inc. gehostet. Server-Funktionen dieser Webseite laufen
            in einem Rechenzentrum in Frankfurt am Main (EU). Beim Aufruf der Seite werden
            automatisch technische Informationen (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs,
            aufgerufene Seite, verwendeter Browser) in Server-Logfiles verarbeitet. Rechtsgrundlage
            ist unser berechtigtes Interesse an einem sicheren und funktionsfähigen Betrieb der
            Webseite (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section>
          <H2>Registrierung und Login</H2>
          <p className="mt-1">
            Die Schaltflächen &bdquo;Kostenlos registrieren&ldquo; und &bdquo;Anmelden&ldquo; leiten
            dich zur eigentlichen TaskOrga-Software weiter. Dort werden Kontodaten (Name, E-Mail,
            Firmenname) verarbeitet — die dafür geltende Datenschutzerklärung findest du direkt in
            der Software.
          </p>
        </section>

        <section>
          <H2>Terminbuchung (Calendly)</H2>
          <p className="mt-1">
            Sofern wir auf der Seite &bdquo;Demo buchen&ldquo; eine Terminbuchung anbieten, nutzen
            wir dafür den Dienst Calendly (Calendly LLC, USA). Beim Öffnen dieser Seite wird eine
            Verbindung zu Calendly-Servern aufgebaut; dabei können Daten in die USA übertragen
            werden, abgesichert über die von Calendly bereitgestellten Standardvertragsklauseln.
            Rechtsgrundlage ist deine Einwilligung durch aktive Nutzung der Terminbuchung (Art. 6
            Abs. 1 lit. a DSGVO). Die von dir bei der Buchung angegebenen Daten (Name, E-Mail,
            gewünschter Termin) werden ausschließlich zur Terminvereinbarung verwendet.
          </p>
        </section>

        <section>
          <H2>Deine Rechte</H2>
          <p className="mt-1">
            Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
            Verarbeitung deiner Daten sowie ein Recht auf Datenübertragbarkeit und Widerspruch
            gegen Verarbeitungen, die auf berechtigtem Interesse beruhen. Wende dich dafür an{" "}
            <a href="mailto:info@taskorga.de" className="text-brand-700 hover:underline">
              info@taskorga.de
            </a>
            . Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu
            beschweren.
          </p>
        </section>
      </div>
    </div>
  );
}
