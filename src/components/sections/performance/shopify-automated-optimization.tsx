"use client";

import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  CodeXml, 
  WandSparkles, 
  ServerCog, 
  Hourglass, 
  ArchiveRestore, 
  Waypoints, 
  Clapperboard, 
  ImageDown 
} from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Remove Unused JavaScript", icon: <CodeXml /> },
  { title: "Clean & Reduce CSS Overload", icon: <WandSparkles /> },
  { title: "Minify CSS & JS Files", icon: <ServerCog /> },
  { title: "Defer Render-Blocking Scripts", icon: <Hourglass /> },
  { title: "Enable Gzip / Brotli Compression", icon: <ArchiveRestore /> },
  { title: "Optimize Third-Party Scripts", icon: <Waypoints /> },
  { title: "Video & Iframe Optimization", icon: <Clapperboard /> },
  { title: "Lazy Load Images & Media", icon: <ImageDown /> },
];

export function ShopifyAutomatedOptimization() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  // Immediately hide cards before paint to prevent flash
  useLayoutEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".opt-card");
    gsap.set(cards, { opacity: 0, y: 48, filter: "blur(10px)" });
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".opt-card");

      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power3.out",
            stagger: { each: 0.09, from: "start" },
          });
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div ref={headerRef} className="mx-auto max-w-3xl text-center mb-16 md:mb-24 flex flex-col gap-4">
          <TextEffect
            as="h2"
            preset="fade-in-blur"
            trigger={isInView}
            className="text-balance font-bold tracking-tight text-[#1a1b41] dark:text-foreground text-3xl sm:text-4xl md:text-5xl leading-[1.2]"
          >
            100% Automated Shopify Speed Optimization
          </TextEffect>
          <TextEffect
            as="p"
            preset="fade-in-blur"
            trigger={isInView}
            delay={0.2}
            className="mx-auto max-w-2xl text-balance text-base md:text-lg text-muted-foreground leading-relaxed font-inter"
          >
            We deploy comprehensive technical enhancements to streamline your store's architecture, ensuring frictionless shopping experiences and maximum conversion potential without lifting a finger.
          </TextEffect>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="opt-card h-full">
              {/* Outer wrapper — spinning border padding-trick */}
              <div className="relative group/card rounded-2xl p-[2px] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-500 ease-in-out cursor-default h-full min-h-[200px]">

                {/* Static border when idle */}
                <div className="absolute inset-0 bg-border/40 transition-opacity duration-500 ease-in-out group-hover/card:opacity-0" />

                {/* Spinning conic gradient border on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 ease-in-out pointer-events-none">
                  <div className="w-full h-full animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(var(--primary))_10%,transparent_40%,transparent_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00ff9d_10%,transparent_40%,transparent_100%)] will-change-transform" />
                </div>

                {/* Inner card content */}
                <div className="relative w-full h-full bg-card rounded-[calc(1rem-2px)] p-6 flex flex-col items-center justify-center gap-5 z-10 transition-colors duration-500 ease-in-out text-center">

                  {/* Interior glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none rounded-[calc(1rem-2px)]" />

                  {/* Icon */}
                  <div className="flex items-center justify-center text-primary transition-colors duration-500 ease-in-out shrink-0 relative z-10 group-hover/card:text-primary/80 mb-2">
                    {React.cloneElement(feature.icon as React.ReactElement, {
                      className: "w-10 h-10 md:w-12 md:h-12 stroke-[1.2]",
                    })}
                  </div>

                  {/* Title */}
                  <div className="flex flex-col gap-2 relative z-10">
                    <h3 className="font-bold text-sm md:text-base text-[#1a1b41] dark:text-foreground leading-snug text-balance font-inter">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
