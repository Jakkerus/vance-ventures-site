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
            We build and grow businesses through disciplined ownership,
            operational execution, and a long term mindset.
          </p>
          <div className="hero-actions">
            <Link href="#portfolio" className="button button-primary">
              View Portfolio
            </Link>
            <Link href="#about" className="button button-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="pillars-section" aria-label="Core principles">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar" data-reveal>
              <div className="pillar-icon" aria-hidden="true">
                <BuildingIcon />
              </div>
              <h3>Ownership Mindset</h3>
              <p>
                We take a long term approach to ownership with a focus on
                building durable, valuable businesses.
              </p>
            </div>

            <div className="pillar" data-reveal data-delay="1">
              <div className="pillar-icon" aria-hidden="true">
                <TargetIcon />
              </div>
              <h3>Operational Excellence</h3>
              <p>
                We emphasize systems, discipline, and execution to drive
                consistent performance and growth.
              </p>
            </div>

            <div className="pillar" data-reveal data-delay="2">
              <div className="pillar-icon" aria-hidden="true">
                <TrendingUpIcon />
              </div>
              <h3>Strategic Growth</h3>
              <p>
                We pursue opportunities that align with our values and create
                compounding value over time.
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
              Built on ownership, driven by execution.
            </h2>
            <p>
              Vance Ventures is a private holding company focused on building
              and growing businesses through disciplined ownership, operational
              execution, and long term value creation.
            </p>
          </div>

          <div className="about-cards">
            <div className="info-card" data-reveal>
              <div className="card-icon" aria-hidden="true">
                <TargetIcon />
              </div>
              <h3>Mission</h3>
              <p>
                Vance Ventures builds and grows businesses through disciplined
                ownership, operational execution, and a focus on long term
                value.
              </p>
            </div>

            <div className="info-card" data-reveal data-delay="1">
              <div className="card-icon" aria-hidden="true">
                <TrendingUpIcon />
              </div>
              <h3>Vision</h3>
              <p>
                To develop a portfolio of durable businesses across industries,
                built on strong operations, practical innovation, and consistent
                long term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach-section" aria-labelledby="approach-heading">
        <div className="container">
          <div data-reveal>
            <h2 id="approach-heading">
              Focus on fundamentals. Execute with discipline.
            </h2>
            <p>
              We take a long term approach to ownership, prioritizing execution,
              consistency, and sustainable growth over short term wins.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="portfolio-section" aria-labelledby="portfolio-heading">
        <div className="container">
          <div className="section-intro" data-reveal>
            <h2 id="portfolio-heading">
              Building a portfolio of durable businesses.
            </h2>
            <p>
              We focus on businesses with strong fundamentals, growth
              potential, and alignment with our long term vision.
            </p>
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
                Franchise ownership and operations with an emphasis on
                execution, systems, and sustainable growth.
              </p>
              <Link href="#contact" className="text-link">
                Get in touch →
              </Link>
            </div>
          </div>

          <div className="portfolio-future">
            <div className="portfolio-future-header" data-reveal>
              <h3>Looking Ahead</h3>
              <p>Strategic initiatives and areas of future focus.</p>
            </div>

            <div className="pillars-grid">
              <div className="pillar" data-reveal>
                <div className="pillar-icon" aria-hidden="true">
                  <MapPinIcon />
                </div>
                <h3>Additional Locations</h3>
                <p>
                  Exploring opportunities to expand within the D-BAT franchise
                  system.
                </p>
              </div>

              <div className="pillar" data-reveal data-delay="1">
                <div className="pillar-icon" aria-hidden="true">
                  <CpuIcon />
                </div>
                <h3>Technology and Tools</h3>
                <p>
                  Investing in technology and tools that improve operations and
                  customer experience.
                </p>
              </div>

              <div className="pillar" data-reveal data-delay="2">
                <div className="pillar-icon" aria-hidden="true">
                  <StarIcon />
                </div>
                <h3>Strategic Ventures</h3>
                <p>
                  Evaluating strategic ventures that align with our long term
                  goals and create lasting value.
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
            <h2 id="contact-heading">Let&apos;s build something meaningful.</h2>
            <p>
              We are open to discussions involving partnerships, strategic
              opportunities, and aligned business inquiries.
            </p>
          </div>

          <div className="contact-inner">
            <div className="contact-info" data-reveal>
              <h3>Start the conversation.</h3>
              <p>
                For general business inquiries, partnership discussions, or
                future opportunities, reach out using the information below.
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
