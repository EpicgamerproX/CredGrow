import { CtaBand } from "@/components/cta-band";
import { LeadForm } from "@/components/lead-form";
import { formConfigs } from "@/lib/forms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Contractors",
  "Become a contractor partner with CredGrow across EPC, engineering, technology and specialized services.",
  "/contractors"
);

export default function ContractorsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contractors</p>
          <h1>Build with CredGrow.</h1>
          <p className="lead">
            Contractor pathways focus on capability, compliance, execution readiness, geography and
            documented experience.
          </p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container content-grid">
          <h2 className="section-title">Contractor categories</h2>
          <div className="pill-list">
            {[
              "EPC",
              "Engineering",
              "Civil Infrastructure",
              "Electrical",
              "Mechanical",
              "Technology",
              "Manufacturing",
              "Logistics",
              "Specialised Services"
            ].map((item) => (
              <span className="pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container content-grid">
          <h2 className="section-title">Become a contractor partner</h2>
          <LeadForm kind="contractor" fields={formConfigs.contractor} submitLabel="Become a Contractor Partner" />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
