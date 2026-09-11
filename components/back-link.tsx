"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// Echtes "zurück" (Browser-History) statt eines festen Links auf "/" --
// Impressum/Datenschutz werden von mehreren Seiten aus verlinkt (Footer ist
// global), ein fester Home-Link wuerde den eigentlichen Ausgangspunkt verlieren.
export function BackLink() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-900 transition-colors"
    >
      <ArrowLeft size={16} />
      Zurück
    </button>
  );
}
