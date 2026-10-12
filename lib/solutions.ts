import { Wallet, FileText, Users, Briefcase, type LucideIcon } from "lucide-react";

// Eine Quelle fuer Startseiten-Abschnitt "Loesungen" (app/page.tsx) und das
// Dropdown im Menue (components/nav.tsx) -- sonst laufen Titel/Links irgendwann
// auseinander.
export const SOLUTIONS: {
  href: string;
  icon: LucideIcon;
  title: string;
  navLabel: string;
  description: string;
}[] = [
  {
    href: "/rechnungsprogramm-kleinunternehmer",
    icon: Wallet,
    title: "Rechnungsprogramm für Kleinunternehmer",
    navLabel: "Rechnungsprogramm",
    description: "Rechnungen in Minuten, Kleinunternehmerregelung nach §19 UStG und automatisches Mahnwesen.",
  },
  {
    href: "/angebote-software",
    icon: FileText,
    title: "Angebote schreiben",
    navLabel: "Angebote schreiben",
    description: "Positionen, Rabatte, Positions-Bibliothek und Versionierung — vom Angebot direkt zum Auftrag.",
  },
  {
    href: "/kundenverwaltung",
    icon: Users,
    title: "Kundenverwaltung für Selbstständige",
    navLabel: "Kundenverwaltung",
    description: "Kunden, Anfragen und Historie an einem Ort — mit Frühwarnung, wenn ein Kunde inaktiv wird.",
  },
  {
    href: "/auftragsverwaltung",
    icon: Briefcase,
    title: "Auftragsverwaltung für Dienstleister",
    navLabel: "Auftragsverwaltung",
    description: "Aufträge, Zeiterfassung, Termine und Aufgaben — vom Angebot bis zur Rechnung.",
  },
];
