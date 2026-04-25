"use client";

import { useRef, useState, useId } from "react";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const statusId = useId();

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
        headers: { "Content-Type": "application/json" },
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
    <div className="contact-form-card">
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        aria-describedby={status !== "idle" ? statusId : undefined}
        noValidate
      >
        <input
          type="text"
          name="company_website"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="inquiryType" className="sr-only">Inquiry Type</label>
          <select id="inquiryType" name="inquiryType" defaultValue="" required>
            <option value="" disabled hidden>Inquiry Type</option>
            <option value="general">General Inquiry</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="acquisition">Acquisition Opportunity</option>
            <option value="investment">Investment Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input id="name" name="name" type="text" placeholder="Name" required autoComplete="name" />
        </div>

        <div>
          <label htmlFor="company" className="sr-only">Company or Organization</label>
          <input id="company" name="company" type="text" placeholder="Company or Organization" autoComplete="organization" />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input id="email" name="email" type="email" placeholder="Email" required autoComplete="email" />
        </div>

        <div>
          <label htmlFor="subject" className="sr-only">Subject</label>
          <input id="subject" name="subject" type="text" placeholder="Subject" required />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Briefly describe your inquiry"
            rows={6}
            required
            minLength={20}
          />
        </div>

        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={(t) => setToken(t)}
          onExpire={() => setToken(null)}
          theme="auto"
        />

        <button type="submit" className="button button-dark" disabled={loading}>
          {loading ? "Sending…" : "Send Inquiry"}
        </button>
      </form>

      {status !== "idle" && (
        <div
          id={statusId}
          role="status"
          aria-live="polite"
          className={`form-status ${status === "success" ? "form-status-success" : "form-status-error"}`}
        >
          {status === "success"
            ? "Your inquiry was sent. We will be in touch."
            : "Something went wrong. Please try again."}
        </div>
      )}
    </div>
  );
}
