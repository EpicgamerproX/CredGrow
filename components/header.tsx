"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          CREDGROW
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link 
                className={`nav-link ${isActive ? "active" : ""}`} 
                href={item.href} 
                key={item.href}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link className="button" href="/contact">
            Partner With Us
          </Link>
        </nav>
        <button
          className="icon-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </div>
      <nav 
        id="mobile-nav"
        className={`mobile-panel ${open ? "open" : ""}`} 
        aria-label="Mobile navigation"
        {...(!open ? { inert: true } : {})}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link 
              href={item.href} 
              key={item.href} 
              onClick={() => setOpen(false)}
              aria-current={isActive ? "page" : undefined}
              style={{ color: isActive ? 'var(--green)' : 'inherit' }}
            >
              {item.label}
            </Link>
          );
        })}
        <Link className="button" href="/contact" onClick={() => setOpen(false)}>
          Partner With Us
        </Link>
      </nav>
    </header>
  );
}
