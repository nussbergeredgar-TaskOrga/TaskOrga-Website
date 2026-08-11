import { redirect } from "next/navigation";

// Kein eigenes Login-Formular hier -- die echte Anmeldung passiert immer in
// der App, damit es nur eine einzige Auth-Logik gibt (siehe Plan). Fuer
// Besucher fuehlt sich taskorga.de/login trotzdem wie ein normaler Login an.
export default function LoginRedirectPage() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://taskorga-v2pz.vercel.app";
  redirect(`${appUrl}/login`);
}
