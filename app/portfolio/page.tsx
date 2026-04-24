import Image from "next/image";

export default function Portfolio() {
  return (
    <main>
      <section className="page-header">
        <p className="card-label">Portfolio</p>
        <h1>Building a portfolio of durable businesses.</h1>
        <p className="page-subtext">
          We focus on businesses with strong fundamentals, growth potential,
          and alignment with our long term vision.
        </p>
      </section>

      <section className="feature-section">
        <div className="feature-image">
          <Image
            src="/assets/images/dbat-lubbock.jpg"
            alt="D-BAT Lubbock"
            width={1536}
            height={1024}
          />
        </div>

        <div className="feature-copy">
          <p className="card-label">Current Portfolio</p>
          <h2>D-BAT Lubbock</h2>
          <p>
            Franchise ownership and operations with an emphasis on execution,
            systems, and sustainable growth.
          </p>
        </div>
      </section>

      <section className="pillars-section">
        <div className="pillar">
          <p className="card-label">Additional Locations</p>
          <p>
            Exploring opportunities to expand within the D-BAT franchise
            system.
          </p>
        </div>

        <div className="pillar">
          <p className="card-label">Technology and Tools</p>
          <p>
            Investing in technology and tools that improve operations and
            customer experience.
          </p>
        </div>

        <div className="pillar">
          <p className="card-label">Strategic Ventures</p>
          <p>
            Evaluating strategic ventures that align with our long term goals
            and create lasting value.
          </p>
        </div>
      </section>
    </main>
  );
}
