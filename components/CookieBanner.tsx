"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("vv_cookie_consent");
    if (!consent) {
      // delay to avoid React warning
      setTimeout(() => {
        setVisible(true);
      }, 0);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("vv_cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("vv_cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to improve your experience. See our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <div className="cookie-actions">
        <button onClick={decline}>Decline</button>
        <button onClick={accept}>Accept</button>
      </div>
    </div>
  );
}
