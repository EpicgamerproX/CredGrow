import { LeadForm } from "@/components/lead-form";
import { formConfigs } from "@/lib/forms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact",
  "Contact CredGrow for investor, contractor, sector partnership and general enquiries.",
  "/contact"
);

export default function ContactPage() {
  return (
    <section className="page-hero">
      <div className="container content-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Partner with CredGrow.</h1>
          <p className="lead">
            Use this form for investor, contractor, sector partnership and general enquiries.
          </p>
        </div>
        <LeadForm kind="contact" fields={formConfigs.contact} submitLabel="Send Enquiry" />
      </div>
    </section>
  );
}
