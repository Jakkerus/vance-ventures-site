import Image from "next/image";
import Link from "next/link";
import {
  BuildingIcon,
  TargetIcon,
  TrendingUpIcon,
  MapPinIcon,
  CpuIcon,
  MailIcon,
} from "@/components/Icons";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main id="main-content">

      {/* HERO */}
      <section id="home" className="hero hero-image" aria-label="Introduction">
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <h1>Building long term value through ownership and execution.</h1>
          <p className="hero-text">
            We acquire and operate businesses with long-term potential.
            Direct ownership. Hands-on execution. No passive positions.
          </p>
          <div className="hero-actions">
            <Link href="#portfolio" className="button button-primary">
              View Portfolio
            </Link>
            <Link href="#about" className="button button-secondary">
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="pillars-section" aria-label="Operating principles">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar" data-reveal>
              <div className="pillar-icon" aria-hidden="true">
                <BuildingIcon />
              </div>
              <h3>Operator-First</h3>
              <p>
                We own and operate. Every business in our portfolio is managed
                directly — no passive positions, no absentee ownership.
              </p>
            </div>

            <div className="pillar" data-reveal data-delay="1">
              <div className="pillar-icon" aria-hidden="true">
                <TargetIcon />
              </div>
              <h3>Capital Discipline</h3>
              <p>
                Capital is deployed conservatively. We prioritize unit economics
                and cash flow, and commit only after our criteria are met.
              </p>
            </div>

            <div className="pillar" data-reveal data-delay="2">
              <div className="pillar-icon" aria-hidden="true">
                <TrendingUpIcon />
              </div>
              <h3>Long-Term Hold</h3>
              <p>
                We are not optimizing for an exit. Our default hold period is
                indefinite — we sell only when it clearly serves long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section" aria-labelledby="about-heading">
        <div className="container">
          <div className="section-intro" data-reveal>
            <h2 id="about-heading">
              A private holding company built to own and operate.
            </h2>
            <p>
              Vance Ventures is not a fund, an accelerator, or a passive
              investor. We are operators — we acquire businesses, build
              operating infrastructure, and hold assets for the long term.
            </p>
          </div>

          <div className="about-cards">
            <div className="info-card" data-reveal>
              <div className="card-icon" aria-hidden="true">
                <BuildingIcon />
              </div>
              <h3>Who We Are</h3>
              <p>
                A Texas-based private holding company with direct ownership and
                operational involvement in each portfolio business. We build
                systems, run lean, and hold assets as long as they meet our
                performance criteria.
              </p>
            </div>

            <div className="info-card" data-reveal data-delay="1">
              <div className="card-icon" aria-hidden="true">
                <TrendingUpIcon />
              </div>
              <h3>How We Think</h3>
              <p>
                Operational control over scale. Unit economics over growth rate.
                Sustainable cash flow over headline returns. Every decision
                is evaluated against its long-term impact on business quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE OPERATE */}
      <section className="operate-section" aria-labelledby="operate-heading">
        <div className="container">
          <div className="operate-intro" data-reveal>
            <h2 id="operate-heading">How we operate.</h2>
            <p>
              Operator involvement is not a differentiator — it is a
              requirement. Every business we own is run with direct
              accountability, defined processes, and a consistent operating
              standard.
            </p>
          </div>

          <div className="operate-grid" data-reveal>
            <div className="operate-item">
              <h4>Direct Management</h4>
              <p>
                We do not use management companies or third-party operators.
                Decisions are made internally by the people accountable for
                outcomes.
              </p>
            </div>

            <div className="operate-item">
              <h4>Systems Before Scale</h4>
              <p>
                Before expanding a unit or adding a location, we build the
                infrastructure required to support growth without sacrificing
                quality or margins.
              </p>
            </div>

            <div className="operate-item">
              <h4>Conservative Capital Deployment</h4>
              <p>
                Leverage is used selectively, at levels the business can service
                from existing cash flow. We do not rely on projected growth to
                justify current commitments.
              </p>
            </div>

            <div className="operate-item">
              <h4>Defined Performance Standards</h4>
              <p>
                Each business operates against defined KPIs — margin targets,
                utilization rates, and retention benchmarks — reviewed on a
                consistent cadence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE LOOK FOR */}
      <section className="criteria-section" aria-labelledby="criteria-heading">
        <div className="container">
          <div className="section-intro" data-reveal>
            <h2 id="criteria-heading">What we look for.</h2>
            <p>
              We evaluate each opportunity against a defined set of criteria.
              If a business doesn&apos;t meet these standards, it isn&apos;t
              pursued regardless of price.
            </p>
          </div>

          <div className="criteria-inner">
            <div data-reveal>
              <ul className="criteria-list" aria-label="Acquisition criteria">
                <li>Proven unit economics with at least two years of operating history</li>
                <li>Defensible market position within a defined and knowable geography</li>
                <li>Revenue driven by durable customer behavior — recurring, habitual, or need-based</li>
                <li>Operational gaps that can be closed with systems and process, not additional capital</li>
                <li>A seller with realistic valuation expectations and alignment on transition terms</li>
                <li>A business that improves with better operations, not simply more spending</li>
              </ul>
            </div>

            <div className="focus-block" data-reveal data-delay="1">
              <h4>Areas of Focus</h4>
              <ul className="focus-list" aria-label="Areas of focus">
                <li>Service-based businesses with recurring or durable revenue</li>
                <li>Franchise systems with strong unit economics</li>
                <li>Businesses with operational inefficiencies that can be improved</li>
                <li>Opportunities with clear paths to scale through execution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="portfolio-section" aria-labelledby="portfolio-heading">
        <div className="container">
          <div className="section-intro" data-reveal>
            <h2 id="portfolio-heading">Active portfolio.</h2>
            <p>Owned and operated directly.</p>
          </div>

          <div className="feature-inner portfolio-feature" data-reveal>
            <div className="feature-image">
              <Image
                src="/assets/images/dbat-lubbock.jpg"
                alt="D-BAT Lubbock training facility"
                width={1536}
                height={1024}
              />
            </div>
            <div className="feature-copy">
              <h3>D-BAT Lubbock</h3>
              <p>
                A D-BAT franchise location in Lubbock, Texas. Acquired and
                operated directly. Current priorities include operational
                efficiency, systems build-out, and service consistency
                across all offerings.
              </p>
              <Link href="#contact" className="text-link">
                Get in touch →
              </Link>
            </div>
          </div>

          <div className="portfolio-future">
            <div className="portfolio-future-header" data-reveal>
              <h3>Current Focus</h3>
              <p>Active priorities.</p>
            </div>

            <div className="pillars-grid">
              <div className="pillar" data-reveal>
                <div className="pillar-icon" aria-hidden="true">
                  <BuildingIcon />
                </div>
                <h3>Expanding within existing operations</h3>
              </div>

              <div className="pillar" data-reveal data-delay="1">
                <div className="pillar-icon" aria-hidden="true">
                  <CpuIcon />
                </div>
                <h3>Strengthening internal systems and reporting</h3>
              </div>

              <div className="pillar" data-reveal data-delay="2">
                <div className="pillar-icon" aria-hidden="true">
                  <MapPinIcon />
                </div>
                <h3>Evaluating new acquisition opportunities</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section" aria-labelledby="contact-heading">
        <div className="container">
          <div className="section-intro" data-reveal>
            <h2 id="contact-heading">Get in touch.</h2>
            <p>We review all inbound inquiries.</p>
          </div>

          <div className="contact-inner">
            <div className="contact-info" data-reveal>
              <h3>Reach out directly.</h3>
              <p>
                If you are exploring an acquisition, partnership, or strategic
                opportunity, provide relevant detail so we can evaluate fit.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon" aria-hidden="true">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="contact-detail-label">Email</p>
                    <p className="contact-detail-value">
                      <a href="mailto:info@vance-ventures.com">
                        info@vance-ventures.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon" aria-hidden="true">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="contact-detail-label">Location</p>
                    <p className="contact-detail-value">Texas, United States</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
