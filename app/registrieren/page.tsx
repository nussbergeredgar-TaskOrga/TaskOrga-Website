import { redirect } from "next/navigation";

// Siehe /login: dynamisch statt statisch, sonst kaputter Redirect in Produktion.
export const dynamic = "force-dynamic";

// Genau wie /login: leitet zur echten Registrierung in der App weiter, statt
// die Formular-Logik ein zweites Mal nachzubauen.
export default function RegistrierenRedirectPage() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://taskorga-v2pz.vercel.app";
  redirect(`${appUrl}/registrieren`);
}
