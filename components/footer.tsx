import Link from "next/link";
import { navItems, sectors } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-list">
          <h2>CREDGROW</h2>
          <p>Building growth across high-impact sectors.</p>
          <p>Registered company name, office, CIN, GST and official contact details are awaiting CredGrow verification.</p>
          <p>© CredGrow {year}. All rights reserved.</p>
        </div>
        <div className="footer-list">
          <h3>Company</h3>
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-list">
          <h3>Sectors</h3>
          {sectors.map((sector) => (
            <Link href={`/sectors/${sector.slug}`} key={sector.slug}>
              {sector.name}
            </Link>
          ))}
        </div>
        <div className="footer-list">
          <h3>Legal</h3>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/cookie-preferences">Cookie Preferences</Link>
        </div>
      </div>
    </footer>
  );
}
