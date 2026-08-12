"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Dezente Tiefenwirkung: das Element verschiebt sich beim Scrollen langsamer/
// schneller als der Rest der Seite (typisches "Tesla-Stil"-Detail). Rein
// dekorativ, deshalb komplett per rAF-throttled Scroll-Listener statt einer
// schweren Animationsbibliothek, und ausgeschaltet bei prefers-reduced-motion.
export function Parallax({
  children,
  speed = 0.15,
  className = "",
}: {
  children?: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    function update() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const distanceFromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${distanceFromCenter * -speed}px)`;
    }
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
