import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Cookie Policy",
  "CredGrow cookie policy explaining necessary, analytics, marketing and functional categories.",
  "/cookie-policy"
);

export default function CookiePolicyPage() {
  return (
    <article className="legal">
      <p className="eyebrow">Legal</p>
      <h1>Cookie Policy</h1>
      <p>
        CredGrow uses strictly necessary cookies for site operation. Analytics, marketing and
        functional cookies remain disabled until consent is given where required.
      </p>
      {["Strictly Necessary", "Analytics", "Marketing", "Functional", "Changing preferences"].map(
        (section) => (
          <section key={section}>
            <h2>{section}</h2>
            <p>
              Final third-party cookie details will be documented after analytics, marketing and
              embedded-service providers are selected.
            </p>
          </section>
        )
      )}
    </article>
  );
}
