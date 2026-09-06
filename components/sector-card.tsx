import Image from "next/image";
import Link from "next/link";
import type { Sector } from "@/lib/site";

export function SectorCard({ sector }: { sector: Sector }) {
  return (
    <Link 
      className="sector-card" 
      href={`/sectors/${sector.slug}`}
      style={{ "--sector-color": sector.color, "--sector-color-light": sector.colorLight } as React.CSSProperties}
    >
      <Image src={sector.image} alt={sector.alt} fill sizes="(max-width: 920px) 100vw, 50vw" />
      <div className="sector-overlay">
        <h3>{sector.name}</h3>
        <span>Explore sector →</span>
        <div className="sector-details-wrapper">
          <div className="sector-details">
            <p>{sector.description}</p>
            <p className="overview-text">{sector.landscape}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
