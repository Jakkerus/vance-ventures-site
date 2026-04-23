import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vance Ventures",
  description: "Building long term value through ownership and execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="site-nav">
            <div className="brand">Vance Ventures</div>

            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
          </nav>
        </header>

        {children}
        <CookieBanner />
        <footer className="site-footer">
          <div className="site-footer-inner">
            <div className="footer-brand">
              <p style={{ fontWeight: 700 }}>VANCE VENTURES</p>
              <p>Building long term value through ownership and execution.</p>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Navigation</p>
                <div className="footer-links">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/portfolio">Portfolio</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/privacy">Privacy</Link>
                </div>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Contact</p>
              <p>info@vance-ventures.com</p>
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
