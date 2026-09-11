import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 text-center">
      <h1 className="font-display text-3xl font-semibold text-ink-900">Seite nicht gefunden</h1>
      <p className="mt-3 text-ink-500">
        Diese Seite gibt es nicht (mehr) oder der Link ist fehlerhaft.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white shadow-card transition-colors hover:bg-brand-600"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
