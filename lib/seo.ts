import { siteUrl } from "@/lib/site";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CredGrow",
  url: siteUrl,
  description:
    "CredGrow is presented as a sector-focused organization connecting capital, capability, technology and execution. Company-specific details require verification before publication."
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CredGrow",
  url: siteUrl
};

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`
    }))
  };
}
