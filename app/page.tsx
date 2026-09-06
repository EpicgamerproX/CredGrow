import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SectorCarousel } from "@/components/sector-carousel";
import { pageMetadata, sectors, workAreas } from "@/lib/site";

export const metadata = pageMetadata(
  "Growth Across High-Impact Sectors",
  "CredGrow connects capital, capability, technology and execution across high-impact sectors in India."
);

export default function HomePage() {
  return (
    <>
      <section className="hero" style={{ position: 'relative' }}>
        <div className="cursive-overlay" style={{ top: '15%', right: '-5%' }}>Discover</div>
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



      <section className="section reveal" style={{ overflow: 'hidden' }}>
        <div className="container">
          <p className="eyebrow">Sector ecosystem</p>
          <h2 className="section-title">Five sectors. One growth ecosystem.</h2>
          <SectorCarousel sectors={sectors} />
        </div>
      </section>


      <CtaBand />
    </>
  );
}
