import type { Sector } from "@/lib/site";

export function RelationshipMap({ sector }: { sector: Sector }) {
  return (
    <div className="relationship-map" aria-label={`How CredGrow connects to ${sector.name}`}>
      <div className="relationship-center">CREDGROW</div>
      <div className="relationship-nodes">
        {sector.relationshipTypes.map((type) => (
          <div className="relationship-node" key={type}>
            <strong>{type}</strong>
            <p>Organization names, engagement details, geography, projects and status awaiting verification.</p>
          </div>
        ))}
      </div>
      {sector.sensitiveNote ? <p className="prose">{sector.sensitiveNote}</p> : null}
    </div>
  );
}
