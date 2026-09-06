import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { RelationshipMap } from "@/components/relationship-map";
import { breadcrumbJsonLd } from "@/lib/seo";
import { getSector, pageMetadata, sectors } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return pageMetadata(sector.name, sector.description, `/sectors/${sector.slug}`);
}

export default async function SectorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = getSector(slug);

  if (!sector) {
    notFound();
  }

  return (
    <div className="sector-detail-wrapper" style={{ "--sector-color": sector.color, "--sector-color-light": sector.colorLight } as React.CSSProperties}>
      <section className="page-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="cursive-overlay" style={{ top: '5%', right: '10%' }}>{sector.name}</div>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">{sector.name}</p>
            <h1>{sector.headline}</h1>
            <p className="lead">{sector.description}</p>
            <div className="pill-list">
              {sector.opportunities.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="page-hero-image">
            <Image src={sector.image} alt={sector.alt} fill sizes="(max-width: 920px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container content-grid">
          <h2 className="section-title">Sector overview</h2>
          <div className="prose">
            <p>{sector.landscape}</p>
            <p>
              Final sector statistics, policy references and market data should be verified against
              current authoritative sources before publication.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container content-grid">
          <h2 className="section-title">Why this sector matters</h2>
          <div className="editorial-list">
            {sector.themes.map((theme) => (
              <div className="editorial-row" key={theme}>
                <h3>{theme}</h3>
                <p>
                  Opportunity area identified for v1 positioning. CredGrow-specific activity in this
                  area is awaiting verification.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container content-grid">
          <h2 className="section-title">How CredGrow connects to this sector</h2>
          <div>
            <p className="prose">
              This relationship map is structured for verified organizations, engagement types,
              geography, relevant projects, status and external verification.
            </p>
            <RelationshipMap sector={sector} />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container content-grid">
          <h2 className="section-title">Government ecosystem</h2>
          <p className="prose">{sector.governmentContext}</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container content-grid">
          <h2 className="section-title">Projects and partners</h2>
          <p className="prose">
            Project references, partner organizations, client names, certifications and registrations
            are not shown until CredGrow approves verified publication material.
          </p>
        </div>
      </section>

      <CtaBand />
      <Script
        id={`${sector.slug}-breadcrumbs`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Sectors", path: "/sectors" },
              { name: sector.name, path: `/sectors/${sector.slug}` }
            ])
          )
        }}
      />
    </div>
  );
}
