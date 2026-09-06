import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SectorCard } from "@/components/sector-card";
import { pageMetadata, sectors, workAreas } from "@/lib/site";

export const metadata = pageMetadata(
  "Growth Across High-Impact Sectors",
  "CredGrow connects capital, capability, technology and execution across high-impact sectors in India."
);

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Credibility. Growth. Technology. Execution.</p>
            <h1>Building growth across the sectors shaping tomorrow.</h1>
            <p className="lead">
              CredGrow connects capital, capability, technology and execution across high-impact
              industries.
            </p>
            <div className="cta-row">
              <Link className="button" href="/contact">
                Partner With CredGrow →
              </Link>
              <Link className="button-secondary" href="/sectors">
                Explore Our Sectors →
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
              alt="Industrial landscape representing infrastructure, technology and growth"
              fill
              priority
              sizes="(max-width: 920px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container statement">
          <h2>Growth needs more than capital.</h2>
          <div className="prose">
            <p>
              CredGrow is being presented as a sector-focused organization operating around capital,
              capability, technology and execution. This v1 website avoids unsupported company
              claims until official CredGrow source material is supplied.
            </p>
            <p>
              Founded details, headquarters, legal entity, leadership, projects, clients,
              registrations and institutional relationships are awaiting CredGrow verification.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2 className="section-title">Capital, technology and execution need a shared operating model.</h2>
          <div className="editorial-list">
            {workAreas.map((area) => (
              <div className="editorial-row" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Sector ecosystem</p>
          <h2 className="section-title">Five sectors. One growth ecosystem.</h2>
          <div className="sector-grid">
            {sectors.map((sector) => (
              <SectorCard sector={sector} key={sector.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <p className="eyebrow">Why CredGrow</p>
          <h2 className="section-title">An intelligent institution, not a sales brochure.</h2>
          <div className="pathways">
            <div className="pathway">
              <h3>Credibility</h3>
              <p>Factual claims, relationships and statistics are published only after verification.</p>
            </div>
            <div className="pathway">
              <h3>Capability</h3>
              <p>Sector pages explain opportunity areas, execution pathways and responsible constraints.</p>
            </div>
            <div className="pathway">
              <h3>Network</h3>
              <p>Investor, contractor and sector-partner pathways are clear from the first visit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Investors</p>
            <h2 className="section-title">Build long-term value across high-impact sectors.</h2>
            <p className="prose">
              Investment information on this website is general and does not constitute financial
              advice, an offer, solicitation or guarantee of returns.
            </p>
            <Link className="button" href="/investors">
              Talk to CredGrow →
            </Link>
          </div>
          <div>
            <p className="eyebrow">Contractors</p>
            <h2 className="section-title">Build with CredGrow.</h2>
            <p className="prose">
              Contractor pathways focus on capability, compliance, geography and verified project
              fit.
            </p>
            <Link className="button-secondary" href="/contractors">
              Become a Partner →
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
