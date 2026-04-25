"use client";

import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    const vh = window.innerHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "none";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh - 40) {
        // Already in view on load — skip animation
        return;
      }
      const delay = el.dataset.delay ? parseInt(el.dataset.delay) * 35 : 0;
      el.style.opacity = "0";
      el.style.transform = "translateY(8px)";
      el.style.transition = [
        `opacity 0.25s ease ${delay}ms`,
        `transform 0.25s ease ${delay}ms`,
      ].join(", ");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
