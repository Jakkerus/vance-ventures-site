"use client";

export default function Contact() {
  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

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
        alert("Inquiry sent successfully.");
        form.reset();

        const select = form.querySelector(
          'select[name="inquiryType"]'
        ) as HTMLSelectElement | null;

        if (select) {
          select.classList.add("select-placeholder");
        }
      } else {
        alert(result.error || "Something went wrong.");
      }
    } catch {
      alert("Something went wrong.");
    }
  }

  function handleInquiryTypeChange(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    if (e.currentTarget.value === "") {
      e.currentTarget.classList.add("select-placeholder");
    } else {
      e.currentTarget.classList.remove("select-placeholder");
    }
  }

  return (
    <main>
      <section className="page-header">
        <p className="card-label">Contact</p>
        <h1>Let’s build something meaningful.</h1>
        <p className="page-subtext">
          We are open to discussions involving partnerships, strategic
          opportunities, and aligned business inquiries.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <p className="card-label">Get in Touch</p>
          <h2>Start the conversation.</h2>
          <p>
            For general business inquiries, partnership discussions, or future
            opportunities, reach out using the information below.
          </p>

          <div className="contact-details">
            <div>
              <p className="footer-heading">Email</p>
              <p>info@vance-ventures.com</p>
            </div>

            <div>
              <p className="footer-heading">Location</p>
              <p>Texas, United States</p>
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

            <select
              name="inquiryType"
              defaultValue=""
              required
            >
              <option value="" disabled hidden>
                Inquiry Type
              </option>
              <option value="general">General Inquiry</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="acquisition">Acquisition Opportunity</option>
              <option value="investment">Investment Inquiry</option>
            </select>

            <input name="name" type="text" placeholder="Name" />
            <input
              name="company"
              type="text"
              placeholder="Company or Organization"
            />
            <input name="email" type="email" placeholder="Email" />
            <input name="subject" type="text" placeholder="Subject" />
            <textarea
              name="message"
              placeholder="Briefly describe your inquiry"
              rows={6}
            />

            <button type="submit" className="button button-dark">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
