import Image from "next/image";
import Link from "next/link";
import {
  BuildingIcon,
  TargetIcon,
  TrendingUpIcon,
  MapPinIcon,
  CpuIcon,
  StarIcon,
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
            Vance Ventures is a Texas-based private holding company. We acquire
            and operate businesses directly — with hands-on involvement, clear
            accountability, and a long-term hold strategy.
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
              investor. We are operators — acquiring businesses, building
              operating infrastructure, and holding assets for the long term.
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
                operational involvement in each portfolio business. We run lean,
                build systems, and hold assets as long as they meet our
                performance and strategic criteria.
              </p>
            </div>

            <div className="info-card" data-reveal data-delay="1">
              <div className="card-icon" aria-hidden="true">
                <TrendingUpIcon />
              </div>
              <h3>How We Think</h3>
              <p>
                We prioritize operational control over scale, unit economics
                over growth rate, and sustainable cash flow over headline
                returns. Every decision is evaluated against its long-term
                impact on business quality — not its short-term optics.
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
                infrastructure required to support that growth without
                sacrificing quality or margins.
              </p>
            </div>

            <div className="operate-item">
              <h4>Conservative Capital Deployment</h4>
              <p>
                Leverage is used selectively, at levels the business can
                service from existing cash flow. We do not rely on projected
                growth to justify current commitments.
              </p>
            </div>

            <div className="operate-item">
              <h4>Defined Performance Standards</h4>
              <p>
                Each business operates against defined KPIs — staffing ratios,
                margin targets, utilization rates, and retention benchmarks —
                reviewed on a consistent cadence.
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
                <li>Youth and amateur sports — facilities, instruction, and franchise systems</li>
                <li>Service businesses with recurring revenue and strong local retention</li>
                <li>Franchise concepts with proven unit economics and regional expansion potential</li>
                <li>Businesses operating in Texas markets we know and understand</li>
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
                alt="D-BAT Lubbock batting and training facility"
                width={1536}
                height={1024}
              />
            </div>
            <div className="feature-copy">
              <h3>D-BAT Lubbock</h3>
              <p>
                A D-BAT franchise location in Lubbock, Texas offering private
                instruction, team training, and batting cage rentals for youth
                and amateur baseball and softball. Acquired and operated
                directly with a focus on consistent quality, local growth, and
                operational efficiency.
              </p>
              <Link href="#contact" className="text-link">
                Get in touch →
              </Link>
            </div>
          </div>

          <div className="portfolio-future">
            <div className="portfolio-future-header" data-reveal>
              <h3>Looking Ahead</h3>
              <p>Where capital and attention are directed.</p>
            </div>

            <div className="pillars-grid">
              <div className="pillar" data-reveal>
                <div className="pillar-icon" aria-hidden="true">
                  <MapPinIcon />
                </div>
                <h3>Franchise Expansion</h3>
                <p>
                  Evaluating additional D-BAT markets based on population
                  density, site economics, and operational readiness. Capital
                  committed only after criteria are met.
                </p>
              </div>

              <div className="pillar" data-reveal data-delay="1">
                <div className="pillar-icon" aria-hidden="true">
                  <CpuIcon />
                </div>
                <h3>Operational Infrastructure</h3>
                <p>
                  Building the scheduling, staffing, and customer data systems
                  required to operate multiple units without adding management
                  overhead.
                </p>
              </div>

              <div className="pillar" data-reveal data-delay="2">
                <div className="pillar-icon" aria-hidden="true">
                  <StarIcon />
                </div>
                <h3>Adjacent Acquisitions</h3>
                <p>
                  Reviewing acquisition targets in adjacent service industries
                  with stable cash flow, defensible positioning, and strong
                  operator alignment.
                </p>
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
            <p>
              We are open to discussions involving acquisitions, franchise
              opportunities, partnerships, and aligned business inquiries.
            </p>
          </div>

          <div className="contact-inner">
            <div className="contact-info" data-reveal>
              <h3>Reach out directly.</h3>
              <p>
                Use the form for initial inquiries, or email us directly. We
                respond to all qualified outreach within a few business days.
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
