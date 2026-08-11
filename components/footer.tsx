import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display font-semibold text-ink-900">TaskOrga</p>
          <p>Weniger Büro. Mehr Business.</p>
        </div>
        <nav className="flex flex-wrap gap-4">
          <Link href="/#funktionen" className="hover:text-brand-700">
            Funktionen
          </Link>
          <Link href="/preise" className="hover:text-brand-700">
            Preise
          </Link>
          <Link href="/demo" className="hover:text-brand-700">
            Demo buchen
          </Link>
          <Link href="/login" className="hover:text-brand-700">
            Anmelden
          </Link>
        </nav>
        <p>© {new Date().getFullYear()} TaskOrga</p>
      </div>
    </footer>
  );
}
