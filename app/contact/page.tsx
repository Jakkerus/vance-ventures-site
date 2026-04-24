"use client";

import { useRef, useState } from "react";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { MailIcon, MapPinIcon } from "@/components/Icons";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!token) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      inquiryType: data.get("inquiryType"),
      name: data.get("name"),
      company: data.get("company"),
      email: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
      company_website: data.get("company_website"),
      turnstileToken: token,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
      setToken(null);
      turnstileRef.current?.reset();
    }
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s build something meaningful.</h1>
          <p className="page-hero-text">
            We are open to discussions involving partnerships, strategic
            opportunities, and aligned business inquiries.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-info">
              <p className="card-label">Get in Touch</p>
              <h2>Start the conversation.</h2>
              <p>
                For general business inquiries, partnership discussions, or
                future opportunities, reach out using the information below.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="contact-detail-label">Email</p>
                    <p className="contact-detail-value">info@vance-ventures.com</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="contact-detail-label">Location</p>
                    <p className="contact-detail-value">Texas, United States</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <p className="card-label">Inquiry Form</p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="company_website"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <select name="inquiryType" defaultValue="" required>
                  <option value="" disabled hidden>
                    Inquiry Type
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="acquisition">Acquisition Opportunity</option>
                  <option value="investment">Investment Inquiry</option>
                </select>

                <input name="name" type="text" placeholder="Name" required />
                <input
                  name="company"
                  type="text"
                  placeholder="Company or Organization"
                />
                <input name="email" type="email" placeholder="Email" required />
                <input name="subject" type="text" placeholder="Subject" required />
                <textarea
                  name="message"
                  placeholder="Briefly describe your inquiry"
                  rows={6}
                  required
                />

                <Turnstile
                  ref={turnstileRef}
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={(token) => setToken(token)}
                  onExpire={() => setToken(null)}
                />

                <button
                  type="submit"
                  className="button button-dark"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                </button>
              </form>

              {status === "success" && (
                <p className="form-success">Inquiry sent successfully.</p>
              )}

              {status === "error" && (
                <p className="form-error">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
