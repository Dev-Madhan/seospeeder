import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SERVICES } from "@/config/services";
import { TextEffect } from "@/components/ui/text-effect";
import { CallToAction } from "@/components/sections/cta/cta";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/core/icons";
import { Globe2, Zap, Shield, Gauge, ArrowRight, Code2, Globe, Layers, ShoppingBag, Smartphone, Rocket } from "lucide-react";
import { BoostRankingsBadge } from "@/components/sections/hero/boost-rankings-badge";
import { productLinks } from "@/components/sections/navbar/nav-links";
import ServiceDashboard from "@/components/sections/dashboard/service-dashboard";
import { MobilePerformanceShowcase } from "@/components/sections/performance/mobile-performance-showcase";
import { ModernWordPressPerformance } from "@/components/sections/performance/modern-wordpress-performance";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { PricingSection } from "@/components/pricing-section";
import { Marquee } from "@/components/ui/marquee";
import { Card } from "@/components/ui/card";
import { ShopifyPerformanceShowcase } from "@/components/sections/performance/shopify-performance-showcase";
import { ShopifyLiveMetrics } from "@/components/sections/performance/shopify-live-metrics";
import { ShopifyAutomatedOptimization } from "@/components/sections/performance/shopify-automated-optimization";


export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Get the platform icon - fallback to Globe2 if not found
  const PlatformIcon = (Icons as Record<string, React.ElementType>)[slug] || Globe2;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-6 md:pt-20 lg:pt-24 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Added Platform Icon on top */}
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mx-auto mt-6 md:mt-8 max-w-5xl text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-center text-[#0A0A0A] dark:text-neutral-100"
            >
              {(service as any).heroHeadline || `${service.title} Performance Perfected.`}
            </TextEffect>

            {/* Description - Exact Match with Home Page */}
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mx-auto mt-6 md:mt-6 max-w-2xl text-balance text-xs md:text-base text-muted-foreground opacity-90 font-inter font-medium"
            >
              {(service as any).heroDescription || `Specialised speed optimization for ${service.title} sites. We eliminate performance bottlenecks for lightning-fast load times.`}
            </TextEffect>

            {/* Global Actions - Swapped Variants */}
            <AnimatedGroup
              className="flex flex-col sm:flex-row items-center gap-5 pt-6"
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.8,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    filter: "blur(12px)",
                    y: 12,
                  },
                  visible: {
                    opacity: 1,
                    filter: "blur(0.1px)",
                    y: 0,
                    transition: {
                      y: { type: "spring", bounce: 0.3, duration: 1.5 },
                      opacity: { duration: 0.5 },
                      filter: { duration: 0.5, ease: "easeOut" },
                    },
                  },
                },
              }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-56 rounded-xl px-8 text-base font-inter font-semibold transition-all duration-300"
              >
                <Link href="#audit">
                  <span className="text-nowrap">Get Free Audit</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="group/btn w-full sm:w-56 rounded-xl px-8 text-base font-bold font-inter bg-primary hover:bg-primary/95 text-primary-foreground transition-all duration-300 shadow-[0_0_20px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.6)] relative overflow-hidden border-none"
              >
                <Link href="#how-it-works">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
                  <span className="relative z-10 text-nowrap">See How It Works</span>
                </Link>
              </Button>
            </AnimatedGroup>

            {/* Service-specific Dashboard or Marquee for Shopify */}
            {slug === "shopify" ? (
              <div className="w-full mt-8 md:mt-12 overflow-visible">
                <ShopifyPerformanceShowcase />
              </div>
            ) : (
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.5,
                      },
                    },
                  },
                  item: {
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                  }
                }}
                className="w-full mt-16 md:mt-24"
              >
                <div className="relative mx-auto overflow-visible px-0 lg:px-4">
                  <div
                    className="bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl md:rounded-[2.5rem] border-2 shadow-2xl shadow-zinc-950/20 ring-1 ring-background"
                    style={{
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.06), 0 25px 50px -12px rgba(0,0,0,0.25)',
                      WebkitTransform: 'translateZ(0)',
                      isolation: 'isolate',
                    }}
                  >
                    {/* Subtle Background Lighting for the container */}
                    <div className="absolute -top-24 left-1/2 -z-10 h-96 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)] blur-[60px]" />

                    <div className="relative w-full overflow-hidden p-0 sm:p-2">
                      <ServiceDashboard slug={slug} />
                    </div>
                  </div>
                </div>
              </AnimatedGroup>
            )}
          </div>
        </div>
      </section>



      {/* WordPress Accelerated Experience Hub */}
      {slug === "wordpress" && (
        <ModernWordPressPerformance />
      )}

      {/* Mobile Performance Deep Dive */}
      {slug === "wordpress" && (
        <div className="w-full overflow-x-hidden">
          <div className="pt-12 md:pt-20 pb-12 md:pb-20">
            <MobilePerformanceShowcase />
          </div>
        </div>
      )}

      {/* Shopify Live Metrics */}
      {slug === "shopify" && (
        <div className="w-full overflow-x-hidden">
          <div>
            <ShopifyLiveMetrics />
          </div>
        </div>
      )}

      {/* Shopify Automated Optimization */}
      {slug === "shopify" && (
        <div className="w-full overflow-x-hidden">
          <div>
            <ShopifyAutomatedOptimization />
          </div>
        </div>
      )}

      {/* Pricing Section */}
      {(slug === "wordpress" || slug === "shopify") && (
        <div className="w-full overflow-x-hidden">
          <div className="pt-12 md:pt-20 pb-12 md:pb-20">
            <PricingSection />
          </div>
        </div>
      )}


      {/* Final Site CTA */}
      {slug !== "wordpress" && (
        <div className="mt-8">
          <CallToAction />
        </div>
      )}
    </div>
  );
}
