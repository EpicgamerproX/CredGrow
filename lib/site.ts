import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Sectors", href: "/sectors" },
  { label: "Investors", href: "/investors" },
  { label: "Contractors", href: "/contractors" },
  { label: "Contact", href: "/contact" }
];

export type Sector = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  image: string;
  alt: string;
  themes: string[];
  landscape: string;
  governmentContext: string;
  opportunities: string[];
  relationshipTypes: string[];
  sensitiveNote?: string;
  color: string;
  colorLight: string;
};

export const sectors: Sector[] = [
  {
    slug: "renewable-energy",
    name: "Renewable Energy",
    shortName: "Renewables",
    headline: "Powering the transition to a cleaner economy.",
    description:
      "Cleaner, more distributed energy systems are creating opportunities across generation, storage, grid infrastructure, technology and services.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    alt: "Solar panels arranged across a renewable energy installation",
    themes: [
      "Solar",
      "Wind",
      "Energy storage",
      "Green hydrogen",
      "Distributed energy",
      "Grid infrastructure",
      "Energy efficiency",
      "Industrial decarbonisation"
    ],
    landscape:
      "India's renewable-energy transition spans utility-scale generation, distributed assets, storage, industrial decarbonisation and supporting infrastructure.",
    governmentContext:
      "Authoritative public sources such as the Ministry of New and Renewable Energy should be used for final published data and policy references.",
    opportunities: [
      "Generation",
      "Storage",
      "Transmission",
      "Hydrogen",
      "Industrial Energy",
      "Distributed Energy"
    ],
    relationshipTypes: [
      "Developers",
      "EPC contractors",
      "Equipment manufacturers",
      "Project owners",
      "Financiers",
      "Technology providers"
    ],
    color: "#00b060",
    colorLight: "#eaf8f1"
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    shortName: "AI",
    headline: "Intelligence as infrastructure.",
    description:
      "AI is becoming a practical layer of industrial, enterprise and public-sector capability, from automation to decision support.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    alt: "Close view of advanced computing hardware used for technology infrastructure",
    themes: [
      "AI software",
      "Machine learning",
      "Computer vision",
      "Robotics",
      "Automation",
      "Data infrastructure",
      "Enterprise AI",
      "Industrial systems"
    ],
    landscape:
      "AI opportunities are forming around compute access, data quality, responsible deployment, sector workflows and implementation capacity.",
    governmentContext:
      "Final references should be checked against current Government of India and IndiaAI Mission materials before publication.",
    opportunities: [
      "Enterprise AI",
      "Automation",
      "Computer Vision",
      "Robotics",
      "Data Infrastructure",
      "Public Applications"
    ],
    relationshipTypes: [
      "AI companies",
      "Technology providers",
      "Research organizations",
      "Enterprise customers",
      "Implementation partners",
      "Infrastructure providers"
    ],
    color: "#7e22ce",
    colorLight: "#f3e8ff"
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    shortName: "Agriculture",
    headline: "Technology for a more productive agricultural economy.",
    description:
      "Agriculture is being reshaped by digitisation, crop intelligence, mechanisation, finance, supply chains and climate-aware infrastructure.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
    alt: "Agricultural fields arranged in long cultivated rows",
    themes: [
      "Precision agriculture",
      "Agri-tech",
      "Farm digitisation",
      "Crop intelligence",
      "Agricultural finance",
      "Supply chains",
      "Irrigation",
      "Remote sensing"
    ],
    landscape:
      "Agricultural technology can improve productivity, traceability, resource use and access to services across the farm economy.",
    governmentContext:
      "Digital agriculture references should be verified against current public sources for AgriStack, decision-support and related initiatives.",
    opportunities: [
      "Precision Farming",
      "Crop Intelligence",
      "Irrigation",
      "Mechanisation",
      "Supply Chains",
      "Agricultural Finance"
    ],
    relationshipTypes: [
      "Farmers / FPOs",
      "Agri-tech companies",
      "Agricultural contractors",
      "Equipment manufacturers",
      "Institutions",
      "Logistics providers"
    ],
    color: "#d97706",
    colorLight: "#fef3c7"
  },
  {
    slug: "defence",
    name: "Defence",
    shortName: "Defence",
    headline: "Building capability for a self-reliant India.",
    description:
      "Defence and dual-use capability requires precise language, verified credentials, compliant ecosystems and responsible execution.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    alt: "Industrial manufacturing equipment in a controlled engineering facility",
    themes: [
      "Manufacturing",
      "Electronics",
      "Communications",
      "Unmanned systems",
      "Surveillance",
      "Materials",
      "Logistics",
      "Testing"
    ],
    landscape:
      "The sector includes manufacturing, supply chains, technology development, testing, logistics and dual-use systems.",
    governmentContext:
      "All references to defence policy, production, procurement or programmes must be checked against current official sources.",
    opportunities: [
      "Manufacturing",
      "Electronics",
      "Communications",
      "Testing",
      "Dual-Use Technology",
      "Supply Chains"
    ],
    relationshipTypes: [
      "Licensed manufacturers",
      "Approved vendors",
      "Defence contractors",
      "Testing organisations",
      "Technology providers",
      "Procurement ecosystem participants"
    ],
    sensitiveNote:
      "Do not imply government endorsement, defence contracts, military access, security clearance or procurement status without documentary evidence.",
    color: "#334155",
    colorLight: "#f1f5f9"
  },
  {
    slug: "aerospace",
    name: "Aerospace",
    shortName: "Aerospace",
    headline: "Where engineering meets the edge of possibility.",
    description:
      "Aerospace brings together engineering systems, advanced manufacturing, satellite capability, launch ecosystems and space-based services.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
    alt: "Earth seen from orbit representing aerospace and space systems",
    themes: [
      "Aircraft",
      "Spacecraft",
      "Satellites",
      "Launch systems",
      "Propulsion",
      "Avionics",
      "Manufacturing",
      "Space-based services"
    ],
    landscape:
      "India's aerospace and space activity is expanding through advanced engineering, manufacturing depth and private-sector participation.",
    governmentContext:
      "IN-SPACe, ISRO and other official sources should be used to verify final statements about policy and private participation.",
    opportunities: [
      "Satellites",
      "Manufacturing",
      "Launch Ecosystem",
      "Avionics",
      "Engineering Systems",
      "Space Services"
    ],
    relationshipTypes: [
      "Aerospace manufacturers",
      "Component suppliers",
      "Engineering firms",
      "Space startups",
      "Research institutions",
      "Testing facilities"
    ],
    color: "#0284c7",
    colorLight: "#e0f2fe"
  }
];

export const workAreas = [
  {
    title: "Capital",
    text: "Connecting opportunities with appropriate financial and strategic capital, subject to verification and legal review."
  },
  {
    title: "Technology",
    text: "Identifying technology that can solve sector-specific problems across infrastructure, industry and enterprise workflows."
  },
  {
    title: "Execution",
    text: "Working with capable operators, contractors and implementation partners where relationships are verified and publishable."
  },
  {
    title: "Partnerships",
    text: "Building credible relationships across industry, institutions and private enterprise with careful claims governance."
  },
  {
    title: "Growth",
    text: "Helping promising opportunities move from concept toward commercial execution through structured collaboration."
  }
];

export function getSector(slug: string) {
  return sectors.find((sector) => sector.slug === slug);
}

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | CredGrow`,
      description,
      url,
      images: ["/og-image.png"]
    },
    twitter: {
      title: `${title} | CredGrow`,
      description,
      images: ["/og-image.png"]
    }
  };
}
