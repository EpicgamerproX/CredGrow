import Link from "next/link";

export function CtaBand() {
  return (
    <section className="section band">
      <div className="container">
        <p className="eyebrow">Start a conversation</p>
        <h2 className="section-title">Let&apos;s build what comes next.</h2>
        <p className="lead">
          Whether you&apos;re an investor, contractor, technology partner or organization looking to
          build something meaningful, start a conversation with CredGrow.
        </p>
        <div className="cta-row">
          <Link className="button-light" href="/investors">
            Invest With Us
          </Link>
          <Link className="button-light" href="/contractors">
            Become a Contractor
          </Link>
          <Link className="button" href="/contact">
            Contact CredGrow
          </Link>
        </div>
      </div>
    </section>
  );
}
