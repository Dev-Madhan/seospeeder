"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Ease-out cubic easing — fast start, gentle deceleration
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function smoothScrollToTop(duration = 500) {
  const startY = window.scrollY;
  if (startY === 0) return; // already at top, nothing to do

  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);

    window.scrollTo(0, startY * (1 - eased));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    // Disable browser scroll restoration so we fully control it
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Skip animation on first load — page starts at top already
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    smoothScrollToTop(520);
  }, [pathname]);

  return <>{children}</>;
}
