"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ShopifyPerformanceShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });

      // Initial state to prevent flash
      gsap.set(".marquee-container", { opacity: 0, y: 30 });
      gsap.set([".marquee-card-1", ".marquee-card-2"], { scale: 0.9, opacity: 0 });

      // 1. Smooth fade/slide for the main container
      tl.to(".marquee-container", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out"
      });

      // 2. Simultaneous "Fantastic" Reveal for both rows (No Blur)
      tl.to(".marquee-card-1", {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.08,
        ease: "expo.out"
      }, "-=0.6");

      tl.to(".marquee-card-2", {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: {
          each: 0.08,
          from: "end"
        },
        ease: "expo.out"
      }, "<"); // Exactly synchronized with marquee-card-1
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="marquee-container relative py-4 md:py-8 w-screen left-1/2 -translate-x-1/2 bg-transparent overflow-hidden"
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
      }}
    >
      {/* Top Ambient Light - Connects to Hero */}
      <div className="absolute top-0 inset-x-0 h-32 z-20 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pointer-events-none" />

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 z-10 w-4 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-10 w-4 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <Marquee duration={60} direction="left" repeat={2} className="py-4 [--gap:1.5rem]">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="marquee-card-1 group/card relative w-[300px] sm:w-[380px] aspect-[16/10] rounded-lg border-2 border-border/50 overflow-hidden shadow-lg shadow-black/5 transition-all duration-500"
          >
            <Image
              src={`/assets/images/shopify-images/shopify-img (${num}).jpg`}
              alt={`Shopify Result ${num}`}
              fill
              className="object-cover"
              sizes="380px"
              priority={num <= 6}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover/card:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex flex-col items-center justify-center p-6 text-white translate-y-4 group-hover/card:translate-y-0 font-inter">
              <div className="flex flex-col items-center gap-2 mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00ff9d]">Performance</span>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold tracking-normal text-white">100</span>
                    <span className="text-[10px] uppercase opacity-60 font-medium text-white">Mobile</span>
                  </div>
                  <div className="size-px h-8 bg-white/20" />
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold tracking-normal text-white">99</span>
                    <span className="text-[10px] uppercase opacity-60 font-medium text-white">Desktop</span>
                  </div>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full bg-white/10 border-white/20 hover:bg-white hover:text-black transition-colors duration-300 font-bold tracking-normal h-9 px-6 text-xs uppercase text-white"
              >
                <Link
                  href={
                    num === 6 ? "https://pagespeed.web.dev/analysis/https-shopify-supply-collections-performance-pack/nsnaph4nx6?form_factor=desktop" :
                    num === 5 ? "https://pagespeed.web.dev/analysis/https-www-shopify-com-editions-summer2024/z1os1gr9w7?form_factor=mobile" :
                    num === 4 ? "https://pagespeed.web.dev/analysis/https-elevaremarket-com-en-qa/dq0p6z8qop?form_factor=mobile" :
                    num === 3 ? "https://pagespeed.web.dev/analysis/https-digitalflagship-com/jn4z9blcvi?form_factor=mobile" :
                    num === 1 ? "https://pagespeed.web.dev/analysis/https-vaonis-com-pages-product-hyperia/16ajq5j3l4?form_factor=mobile" :
                    num === 2 ? "https://pagespeed.web.dev/analysis/https-buchwalder-linder-ch/kvbcrtkkz8?form_factor=mobile" :
                    "https://pagespeed.web.dev/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Live Score
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </Marquee>

      <div className="hidden md:block">
        <Marquee duration={60} direction="right" repeat={2} className="py-4 [--gap:1.5rem]">
          {[7, 8, 9, 10, 11, 12].map((num) => (
            <div
              key={num}
              className="marquee-card-2 group/card relative w-[300px] sm:w-[380px] aspect-[16/10] rounded-lg border-2 border-border/50 overflow-hidden shadow-lg shadow-black/5 transition-all duration-500"
            >
              <Image
                src={`/assets/images/shopify-images/shopify-img (${num}).jpg`}
                alt={`Shopify Result ${num}`}
                fill
                className="object-cover"
                sizes="380px"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover/card:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex flex-col items-center justify-center p-6 text-white translate-y-4 group-hover/card:translate-y-0 font-inter">
                <div className="flex flex-col items-center gap-2 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00ff9d]">Performance</span>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold tracking-normal text-white">98</span>
                      <span className="text-[10px] uppercase opacity-60 font-medium text-white">Mobile</span>
                    </div>
                    <div className="size-px h-8 bg-white/20" />
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold tracking-normal text-white">100</span>
                      <span className="text-[10px] uppercase opacity-60 font-medium text-white">Desktop</span>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-white/10 border-white/20 hover:bg-white hover:text-black transition-colors duration-300 font-bold tracking-normal h-9 px-6 text-xs uppercase text-white"
                >
                  <Link
                    href={
                      num === 12 ? "https://pagespeed.web.dev/analysis/https-www-shopify-com-editions-winter2024/soy9ws1mbc?form_factor=mobile" :
                      num === 11 ? "https://pagespeed.web.dev/analysis/https-omrbeauty-com/m1wz4fzshf?form_factor=mobile" :
                      num === 9 ? "https://pagespeed.web.dev/analysis/https-bedouinsdaughter-com/34l5zwbcar?form_factor=mobile" :
                      num === 10 ? "https://pagespeed.web.dev/analysis/https-casperscaviar-com/w0t9ynydlh?form_factor=mobile" :
                      num === 8 ? "https://pagespeed.web.dev/analysis/https-us-masons-it/8twah5yqwe?form_factor=mobile" :
                      num === 7 ? "https://pagespeed.web.dev/analysis/https-www-massproductions-se/p89tcpemg0?form_factor=mobile" :
                      "https://pagespeed.web.dev/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Live Score
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
