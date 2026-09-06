import { CookiePreferencesButton } from "@/components/cookie-preferences-button";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Cookie Preferences",
  "Manage CredGrow cookie consent preferences.",
  "/cookie-preferences"
);

export default function CookiePreferencesPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Cookies</p>
        <h1>Cookie preferences.</h1>
        <p className="lead">
          Review or change your choices for analytics, marketing and functional cookies. Strictly
          necessary cookies remain active for core website operation.
        </p>
        <div className="cta-row">
          <CookiePreferencesButton />
        </div>
      </div>
    </section>
  );
}
