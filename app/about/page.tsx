import { CtaBand } from "@/components/cta-band";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "About",
  "Learn how CredGrow presents its sector-focused model while verified company details are prepared.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About CredGrow</p>
          <h1>Built around opportunity. Focused on execution.</h1>
          <p className="lead">
            CredGrow&apos;s official company description, leadership, legal entity details and
            milestones are awaiting verification before final publication.
          </p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container content-grid">
          <h2 className="section-title">Who we are</h2>
          <div className="prose">
            <p>
              This section is intentionally conservative for v1. It will be replaced with CredGrow&apos;s
              verified company narrative, operating model, geography and core capabilities.
            </p>
            <p>
              Current publishable positioning: CredGrow is presented as a growth-oriented platform
              connecting sector opportunities with capital, technology, partners and execution
              capability.
            </p>
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container content-grid">
          <h2 className="section-title">What we believe</h2>
          <div className="pill-list">
            {["Long-term thinking", "Credible partnerships", "Execution", "Technology", "Responsible growth"].map(
              (item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container content-grid">
          <h2 className="section-title">Leadership and milestones</h2>
          <div className="prose">
            <p>
              Leadership profiles, photographs, LinkedIn links and milestone timelines will be added
              only after CredGrow supplies verified source material.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
