import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero hero-image">
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow">Private Holding Company</p>

          <h1>Building long term value through ownership and execution.</h1>

          <p className="hero-text">
            We build and grow businesses through disciplined ownership,
            operational execution, and a long term mindset.
          </p>

          <div className="hero-actions">
            <Link href="/portfolio" className="button button-primary">
              View Portfolio
            </Link>

            <Link href="/about" className="button button-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="pillar">
          <p className="card-label">Ownership Mindset</p>
          <p>
            We take a long term approach to ownership with a focus on building
            durable, valuable businesses.
          </p>
        </div>

        <div className="pillar">
          <p className="card-label">Operational Excellence</p>
          <p>
            We emphasize systems, discipline, and execution to drive consistent
            performance and growth.
          </p>
        </div>

        <div className="pillar">
          <p className="card-label">Strategic Growth</p>
          <p>
            We pursue opportunities that align with our values and create
            compounding value over time.
          </p>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-copy">
          <p className="card-label">Current Portfolio</p>
          <h2>D-BAT Lubbock</h2>
          <p>
            Franchise ownership and operations with an emphasis on execution,
            systems, and sustainable growth.
          </p>

          <Link href="/portfolio" className="text-link">
            View Portfolio →
          </Link>
        </div>

        <div className="feature-image">
          <img
            src="/assets/images/dbat-lubbock.jpg"
            alt="D-BAT Lubbock"
          />
        </div>
      </section>
    </main>
  );
}
