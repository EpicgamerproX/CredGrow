import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy Policy",
  "CredGrow privacy policy covering enquiry data, cookies, analytics and user rights.",
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <article className="legal">
      <p className="eyebrow">Legal</p>
      <h1>Privacy Policy</h1>
      <p>
        This v1 policy is a business-ready draft and must be reviewed by legal counsel before final
        publication.
      </p>
      {[
        "Information collected",
        "Contact-form information",
        "Cookies and analytics",
        "Purpose of processing",
        "Data retention",
        "Third-party processors",
        "Security measures",
        "User rights",
        "Grievance and contact mechanism",
        "International transfers",
        "Children's privacy",
        "Policy updates"
      ].map((section) => (
        <section key={section}>
          <h2>{section}</h2>
          <p>
            CredGrow will publish final details for this section after operational, legal and vendor
            information is verified.
          </p>
        </section>
      ))}
    </article>
  );
}
