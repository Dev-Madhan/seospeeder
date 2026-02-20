'use client';

import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from '@/components/ui/image-comparison';
import { ArrowUpRight, Zap, Trophy, Activity, Search } from 'lucide-react';
import { motion, useInView, useSpring, useMotionValue, useTransform, animate } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from 'next-themes';

gsap.registerPlugin(ScrollTrigger);

export function ResultsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        toggleActions: 'play none none none',
      },
    });

    tl.from('.gsap-fade-up', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    })
    .from('.gsap-image-reveal', {
      scale: 0.92,
      opacity: 0,
      duration: 1.2,
      ease: 'expo.out',
    }, '-=0.8');

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* 1. Section Headline & Subheading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="gsap-fade-up text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Engineered for instant rankings.
          </h2>
          <p className="gsap-fade-up text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-inter font-medium">
            Performance is the new SEO. See how we transform sluggish sites into lightning-fast experiences that Google loves.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image Comparison */}
            <div className="gsap-image-reveal space-y-4">
              <ImageComparison
                className="aspect-[1905/1080] w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900"
                enableHover
                springOptions={{
                  bounce: 0.3,
                }}
              >
                <ImageComparisonImage
                  src={mounted && resolvedTheme !== 'dark' ? "/assets/images/failure-light.png" : "/assets/images/failure-dark.png"}
                  alt="Standard Optimization"
                  position="right"
                  className="object-contain"
                />
                <ImageComparisonImage
                  src={mounted && resolvedTheme !== 'dark' ? "/assets/images/success-light.png" : "/assets/images/success-dark.png"}
                  alt="SEO Speeder Optimization"
                  position="left"
                  className="object-contain"
                />
                <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-sm" />
              </ImageComparison>
              <p className="text-center text-sm text-zinc-500 font-semibold font-inter">
                Drag the slider to compare standard optimization vs. SEO Speeder
              </p>
            </div>

          {/* Right Column: Metrics & Content */}
          <div className="space-y-12">
            {/* 4. Measurable Metrics */}
            <div ref={metricsRef} className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-10">
              <MetricItem 
                icon={<Zap className="w-5 h-5 text-amber-500" />}
                value={99}
                suffix="+"
                label="Mobile Performance"
                description="Google PageSpeed score, up from 45."
              />
              <MetricItem 
                icon={<Activity className="w-5 h-5 text-blue-500" />}
                value={0.5}
                suffix="s"
                decimals={1}
                label="LCP Duration"
                description="Reduced from 3.2s. Instant visual load."
              />
              <MetricItem 
                icon={<Trophy className="w-5 h-5 text-yellow-500" />}
                value={100}
                suffix="%"
                label="SEO Health"
                description="Perfect technical audit score."
              />
              <MetricItem 
                icon={<Search className="w-5 h-5 text-purple-500" />}
                value={42}
                prefix="+"
                suffix="%"
                label="Organic Impressions"
                description="Observed average lift within 14 days."
              />
            </div>

            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 space-y-8">
              {/* 5. Mini Case Study */}
              <motion.div 
                className="gsap-fade-up bg-zinc-100 dark:bg-zinc-900/50 rounded-xl p-6 border-2 border-zinc-200 dark:border-zinc-800 cursor-default relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">DevScale Migration</span>
                  <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">Verified</span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed relative z-10 font-inter font-medium">
                  "After switching to SEO Speeder, DevScale saw their indexation rate hit 100% in 48 hours. The drop in latency directly correlated with a 20% boost in time-on-page."
                </p>
              </motion.div>

              {/* 6. CTA */}
              <div className="gsap-fade-up flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Stop losing traffic to slower competitors.</h3>
                  <p className="text-sm text-zinc-500 font-inter font-medium">No credit card required for audit.</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Button variant="secondary" className="group w-full sm:w-auto rounded-full font-medium transition-colors hover:shadow-lg hover:bg-zinc-900 hover:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900">
                    Start your free audit
                    <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricItem({ 
  icon, 
  value, 
  label, 
  description, 
  suffix = '', 
  prefix = '',
  decimals = 0 
}: { 
  icon: React.ReactNode, 
  value: number, 
  label: string, 
  description: string,
  suffix?: string,
  prefix?: string,
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals);
      }
    });
  }, [springValue, decimals]);

  return (
    <motion.div 
      className="p-4 rounded-2xl transition-all duration-200 sm:hover:bg-zinc-100 dark:sm:hover:bg-zinc-800/50 active:scale-[0.98] sm:active:scale-100 cursor-default"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-3 min-h-[3rem]">
        <div className="p-2 rounded-lg bg-white dark:bg-zinc-900/50 shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-800">
           {icon}
        </div>
        <span className="text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-wider leading-tight font-inter">{label}</span>
      </div>
      <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight text-center sm:text-left flex items-center justify-center sm:justify-start">
        {prefix}<span ref={ref}>0</span>{suffix}
      </div>
      <p className="text-sm text-zinc-500 leading-snug hidden sm:block font-inter font-medium">{description}</p>
    </motion.div>
  );
}
