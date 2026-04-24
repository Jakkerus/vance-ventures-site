import { TargetIcon, TrendingUpIcon } from "@/components/Icons";

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>Built on ownership, driven by execution.</h1>
          <p className="page-hero-text">
            Vance Ventures is a private holding company focused on building and
            growing businesses through disciplined ownership, operational
            execution, and long term value creation.
          </p>
        </div>
      </section>

      <section className="about-grid">
        <div className="container">
          <div className="about-cards">
            <div className="info-card">
              <div className="card-icon">
                <TargetIcon />
              </div>
              <p className="card-label">Mission</p>
              <p>
                Vance Ventures builds and grows businesses through disciplined
                ownership, operational execution, and a focus on long term
                value.
              </p>
            </div>

            <div className="info-card">
              <div className="card-icon">
                <TrendingUpIcon />
              </div>
              <p className="card-label">Vision</p>
              <p>
                To develop a portfolio of durable businesses across industries,
                built on strong operations, practical innovation, and consistent
                long term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-feature">
        <div className="container">
          <p className="card-label">Our Approach</p>
          <h2>Focus on fundamentals. Execute with discipline.</h2>
          <p>
            We take a long term approach to ownership, prioritizing execution,
            consistency, and sustainable growth over short term wins.
          </p>
        </div>
      </section>
    </main>
  );
}
