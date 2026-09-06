import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Terms & Conditions",
  "CredGrow website terms, usage conditions and investment information disclaimers.",
  "/terms"
);

export default function TermsPage() {
  const sections = [
    "Introduction",
    "Website usage",
    "Intellectual property",
    "Accuracy of information",
    "Third-party links",
    "Investment information disclaimer",
    "No financial advice",
    "No guarantee of returns",
    "Contractor information",
    "User submissions",
    "Website availability",
    "Limitation of liability",
    "Governing law",
    "Changes to terms",
    "Contact information"
  ];

  return (
    <article className="legal">
      <p className="eyebrow">Legal</p>
      <h1>Terms & Conditions</h1>
      <p>
        These terms are a v1 draft. Final wording, governing law details and contact information
        require legal review and CredGrow verification.
      </p>
      {sections.map((section) => (
        <section key={section}>
          <h2>{section}</h2>
          <p>
            Website information is provided for general business purposes. It does not constitute
            investment advice, an offer to sell securities, an offer to purchase securities, a
            guarantee of returns, or a solicitation where prohibited by applicable law.
          </p>
        </section>
      ))}
    </article>
  );
}
