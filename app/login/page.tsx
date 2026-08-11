import { redirect } from "next/navigation";

// Erzwingt dynamisches Rendering statt eines beim Build "eingefrorenen"
// statischen Redirects -- Next.js' statische Vorausberechnung einer externen
// (cross-origin) Weiterleitung lieferte in Produktion eine kaputte Antwort
// ohne Location-Header (Fehler-Shell statt echtem Redirect).
export const dynamic = "force-dynamic";

// Kein eigenes Login-Formular hier -- die echte Anmeldung passiert immer in
// der App, damit es nur eine einzige Auth-Logik gibt (siehe Plan). Fuer
// Besucher fuehlt sich taskorga.de/login trotzdem wie ein normaler Login an.
export default function LoginRedirectPage() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://taskorga-v2pz.vercel.app";
  redirect(`${appUrl}/login`);
}
