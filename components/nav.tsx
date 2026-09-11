"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/#funktionen", label: "Funktionen" },
  { href: "/preise", label: "Preise" },
  { href: "/demo", label: "Demo buchen" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

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
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-brand-700">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
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

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-50 transition-colors md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-100 px-4 py-4 space-y-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-ink-700">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-3 border-t border-ink-100">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-700"
            >
              Anmelden
            </Link>
            <Link
              href="/registrieren"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-brand-500 px-4 py-2 text-center text-sm font-medium text-white shadow-card transition-colors hover:bg-brand-600"
            >
              Kostenlos registrieren
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
