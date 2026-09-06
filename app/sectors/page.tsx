import { CtaBand } from "@/components/cta-band";
import { SectorCard } from "@/components/sector-card";
import { pageMetadata, sectors } from "@/lib/site";

export const metadata = pageMetadata(
  "Sectors",
  "Explore CredGrow's five sector focus areas: renewable energy, AI, agriculture, defence and aerospace.",
  "/sectors"
);

export default function SectorsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Sectors</p>
          <h1>Five sectors. One growth ecosystem.</h1>
          <p className="lead">
            Each sector page explains opportunity areas and CredGrow&apos;s intended relationship map
            without publishing unverified claims.
          </p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container sector-grid">
          {sectors.map((sector) => (
            <SectorCard sector={sector} key={sector.slug} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
