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
        <footer>
          <p>© 2026 Vance Ventures. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
