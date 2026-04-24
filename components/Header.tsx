"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/" className="brand-link" aria-label="Vance Ventures — home" onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              scrolled
                ? "/assets/brand/wordmark-light.svg"
                : "/assets/brand/wordmark-dark.svg"
            }
            alt="Vance Ventures"
            height="34"
            style={{ width: "auto", display: "block" }}
          />
        </Link>

        <div className="nav-links" aria-hidden={menuOpen ? "true" : undefined}>
          <Link href="/#about">About</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/#contact" className="nav-cta">Contact</Link>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-nav" className="nav-mobile-menu" role="navigation" aria-label="Mobile navigation">
          <Link href="/#about" onClick={close}>About</Link>
          <Link href="/#portfolio" onClick={close}>Portfolio</Link>
          <Link href="/privacy" onClick={close}>Privacy</Link>
          <Link href="/#contact" onClick={close} className="nav-mobile-cta">Contact</Link>
        </div>
      )}
    </header>
  );
}
