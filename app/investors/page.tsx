import { CtaBand } from "@/components/cta-band";
import { LeadForm } from "@/components/lead-form";
import { formConfigs } from "@/lib/forms";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Investors",
  "Start an investor conversation with CredGrow while observing investment-information safeguards.",
  "/investors"
);

export default function InvestorsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Investors</p>
          <h1>Invest in the sectors shaping India&apos;s next decade.</h1>
          <p className="lead">
            CredGrow&apos;s investment proposition, structures, pipeline, governance and reporting
            details are awaiting verification and legal review.
          </p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container content-grid">
          <h2 className="section-title">Investment pathway</h2>
          <div className="prose">
            <p>
              This website does not publish investment returns, projected returns, IRR, guarantees or
              financial performance.
            </p>
            <p>
              General information presented here does not constitute investment advice, an offer to
              sell securities, an offer to purchase securities or a solicitation where prohibited by
              law.
            </p>
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container content-grid">
          <h2 className="section-title">Start an investor conversation</h2>
          <LeadForm kind="investor" fields={formConfigs.investor} submitLabel="Start an Investor Conversation" />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
