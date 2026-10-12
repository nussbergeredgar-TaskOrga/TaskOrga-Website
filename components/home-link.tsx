import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Fester Link auf die Startseite fuer die Loesungs-Unterseiten -- anders als
// BackLink (echtes "zurueck" per Browser-History), weil diese Seiten oft direkt
// aus der Suche angesprungen werden und dann keine History dahinter liegt.
export function HomeLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5 text-sm text-ink-500 transition-colors hover:text-ink-900"
    >
      <ArrowLeft size={16} />
      Zur Startseite
    </Link>
  );
}
