import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-ink-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-turquoise-500 text-sm font-bold text-white">
            T
          </span>
          TaskOrga
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-700 md:flex">
          <Link href="/#funktionen" className="transition-colors hover:text-brand-700">
            Funktionen
          </Link>
          <Link href="/preise" className="transition-colors hover:text-brand-700">
            Preise
          </Link>
          <Link href="/demo" className="transition-colors hover:text-brand-700">
            Demo buchen
          </Link>
        </nav>

        <div className="flex flex-col items-end gap-1.5 sm:flex-row sm:items-center sm:gap-3">
          <Link href="/login" className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-700">
            Anmelden
          </Link>
          <Link
            href="/registrieren"
            className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-card transition-colors hover:bg-brand-600"
          >
            Kostenlos registrieren
          </Link>
        </div>
      </div>
    </header>
  );
}
