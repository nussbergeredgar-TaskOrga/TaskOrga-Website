"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { SOLUTIONS } from "@/lib/solutions";

const LINKS: { href: string; label: string; dropdown?: boolean }[] = [
  { href: "/#funktionen", label: "Funktionen" },
  { href: "/#loesungen", label: "Lösungen", dropdown: true },
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
          {LINKS.map((link) =>
            link.dropdown ? (
              // Hover (und Tastatur-Fokus) klappt die vier Loesungen auf; der Klick
              // auf "Loesungen" selbst springt zum Abschnitt auf der Startseite.
              // pt-3 am Panel ueberbrueckt die Luecke, damit der Hover beim
              // Wechsel vom Link ins Panel nicht abreisst.
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 transition-colors group-hover:text-brand-700 group-focus-within:text-brand-700"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                  />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-card border border-ink-100 bg-surface p-2 shadow-cardHover">
                    {SOLUTIONS.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-ink-900 transition-colors hover:bg-ink-50 hover:text-brand-700"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                          <s.icon size={16} strokeWidth={2} />
                        </span>
                        {s.navLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-brand-700">
                {link.label}
              </Link>
            )
          )}
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
              <div key={link.href} className="flex flex-col gap-2">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="transition-colors hover:text-brand-700"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="ml-1 flex flex-col gap-2 border-l border-ink-100 pl-3 font-normal text-ink-500">
                    {SOLUTIONS.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="transition-colors hover:text-brand-700"
                      >
                        {s.navLabel}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
