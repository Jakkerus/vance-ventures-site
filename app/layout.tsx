import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import Reveal from "@/components/Reveal";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vance Ventures",
  description: "Building long term value through ownership and execution.",
  icons: {
    icon: [
      { url: "/assets/brand/fav-32.svg", type: "image/svg+xml" },
      { url: "/assets/brand/fav-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/brand/fav-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/assets/brand/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Prevent flash of wrong theme — runs before React hydrates */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}})()` }} />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>

        <Header />

        {children}

        <Reveal />
        <CookieBanner />

        <footer className="site-footer" aria-label="Site footer">
          <div className="site-footer-inner">
            <div className="footer-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/brand/monogram-circle-dark.svg"
                alt="Vance Ventures"
                height="40"
                style={{ width: "auto", display: "block" }}
              />
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
