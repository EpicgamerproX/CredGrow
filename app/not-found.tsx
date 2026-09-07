import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: "calc(60vh - var(--header-h, 72px))" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
          <p className="eyebrow">404</p>
          <h1 style={{ fontSize: "clamp(4rem, 12vw, 10rem)", lineHeight: 1, margin: "0 0 24px" }}>
            Page not found.
          </h1>
          <p className="lead" style={{ maxWidth: 520, margin: "0 auto 40px" }}>
            The page you&apos;re looking for doesn&apos;t exist, has been moved, or is
            temporarily unavailable.
          </p>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <Link className="button" href="/">
              Back to Homepage →
            </Link>
            <Link className="button-secondary" href="/contact">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
