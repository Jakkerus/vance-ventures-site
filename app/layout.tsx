import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import Reveal from "@/components/Reveal";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vance Ventures",
  description: "Building long term value through ownership and execution.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>

        <header>
          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/" className="brand" aria-label="Vance Ventures — home">
              <span className="brand-line">Vance</span>
              <span className="brand-line">Ventures</span>
            </Link>

            <div className="nav-links">
              <Link href="/#about">About</Link>
              <Link href="/#portfolio">Portfolio</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/#contact" className="nav-cta">Contact</Link>
            </div>
          </nav>
        </header>

        {children}

        <Reveal />
        <CookieBanner />

        <footer className="site-footer" aria-label="Site footer">
          <div className="site-footer-inner">
            <div className="footer-brand">
              <div className="footer-brand-name" aria-label="Vance Ventures">
                <span>Vance</span>
                <span>Ventures</span>
              </div>
              <p>Building long term value through ownership and execution.</p>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Navigation</p>
              <nav aria-label="Footer navigation">
                <div className="footer-links">
                  <Link href="/">Home</Link>
                  <Link href="/#about">About</Link>
                  <Link href="/#portfolio">Portfolio</Link>
                  <Link href="/#contact">Contact</Link>
                  <Link href="/privacy">Privacy</Link>
                </div>
              </nav>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Contact</p>
              <p>
                <a href="mailto:info@vance-ventures.com">
                  info@vance-ventures.com
                </a>
              </p>
              <p>Texas, United States</p>
            </div>
          </div>

          <div className="site-footer-bottom">
            <p>© 2026 Vance Ventures. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
