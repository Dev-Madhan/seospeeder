"use client";

import React, { useState } from "react";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export const WP_CATEGORIES = [
  "Speed Optimization",
  "Optimization Maintenance",
  "SEO",
  "Server Side Optimization",
  "GSC Core Web Vitals",
  "CWV Maintenance"
];

export const WP_PRICING_PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: "49",
    originalPrice: "100",
    description: "One Time Cost",
    features: [
      "Valid for Sites Up to 49 Pages",
      "90+ Google Desktop Speed Test",
      "90+ Google Mobile Speed Test",
      "A Grade on Gtmetrix",
      "2 secs Load time on Gtmetrix",
      "Same design and functionality",
      "Detailed SEO Audit Report",
      "Premium Plugin for 1 Year"
    ]
  },
  {
    id: "advance",
    name: "Advance",
    price: "175",
    originalPrice: "300",
    description: "One Time Cost",
    features: [
      "90+ Google Desktop Speed Test",
      "90+ Google Mobile Speed Test",
      "A Grade on Gtmetrix",
      "2 secs Load time on Gtmetrix",
      "Same design and functionality",
      "Detailed SEO Audit Report",
      "Premium Plugin For Life Time"
    ]
  },
  {
    id: "expert",
    name: "Expert",
    price: "225",
    originalPrice: "400",
    description: "One Time Cost",
    features: [
      "Core Web Vitals - Performance metrix only (All Green)",
      "90+ Google Desktop Speed Test",
      "90+ Google Mobile Speed Test",
      "A Grade with all Web Vitals green on Gtmetrix",
      "2 secs Load time on Gtmetrix",
      "2 secs Load time on Gtmetrix",
      "Same design and functionality",
      "Detailed SEO Audit Report",
      "Premium Plugin For Life Time"
    ]
  }
];

export const WPPricingCard = ({ plan, color, isActive }: any) => (
  <div className={cn(
    "relative group p-8 rounded-[40px] border transition-all duration-500 overflow-hidden flex flex-col justify-between",
    isActive 
      ? "bg-slate-900 dark:bg-white border-slate-900 dark:border-white shadow-2xl scale-[1.02] z-10" 
      : "bg-white/50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 shadow-xl"
  )}>
     {/* Tactical Accents */}
     <div className="absolute top-0 right-0 p-6 opacity-20">
        <Terminal size={40} className={isActive ? (isActive && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? "text-black" : "text-white") : "text-slate-300"} />
     </div>

     <div className="relative z-10 space-y-8">
        <div className="space-y-2">
           <div className="flex items-center gap-3">
              <span className={cn(
                 "text-[10px] font-black uppercase tracking-[0.4em]",
                 isActive ? "text-slate-400 dark:text-neutral-500" : "text-slate-400 dark:text-white/30"
              )}>Package // {plan.id}</span>
              {isActive && (
                 <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-[8px] font-black text-white uppercase tracking-widest">Recommended</span>
              )}
           </div>
           <h3 className={cn(
              "text-3xl font-black uppercase tracking-tighter",
              isActive ? "text-white dark:text-black" : "text-slate-900 dark:text-white"
           )}>{plan.name}</h3>
        </div>

        <div className="space-y-1">
           <div className="flex items-baseline gap-3">
              <span className={cn(
                 "text-5xl font-black tracking-tighter tabular-nums",
                 isActive ? "text-white dark:text-black" : "text-slate-900 dark:text-white"
              )}>{plan.price}</span>
              <span className={cn(
                 "text-lg font-black uppercase tracking-widest",
                 isActive ? "text-white/60 dark:text-black/60" : "text-slate-400 dark:text-white/40"
              )}>USD</span>
              <span className={cn(
                 "text-lg font-bold line-through opacity-40 ml-2",
                 isActive ? "text-white dark:text-black" : "text-slate-500 dark:text-white/30"
              )}>{plan.originalPrice}</span>
           </div>
           <p className={cn(
              "text-[10px] font-black uppercase tracking-[0.2em]",
              isActive ? "text-slate-400 dark:text-neutral-500" : ""
           )} style={{ color: isActive ? undefined : color }}>&lt; {plan.description} /&gt;</p>
        </div>

        <div className={cn(
           "space-y-4 pt-8 border-t",
           isActive ? "border-white/10 dark:border-black/5" : "border-slate-200 dark:border-white/5"
        )}>
           <p className={cn(
              "text-[9px] font-black uppercase tracking-[0.25em] mb-4",
              isActive ? "text-white/40 dark:text-black/40" : "text-slate-400 dark:text-white/20"
           )}>Services Included:</p>
           {plan.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-start gap-4 group/item">
                 <div className={cn(
                    "mt-1 size-1.5 rounded-sm transition-transform group-hover/item:scale-125",
                    isActive ? "bg-emerald-400" : ""
                 )} style={{ backgroundColor: isActive ? undefined : color }} />
                 <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest leading-relaxed",
                    isActive ? "text-white/80 dark:text-black/80" : "text-slate-500 dark:text-white/60"
                 )}>{feature}</span>
              </div>
           ))}
        </div>
     </div>

     <button className={cn(
        "mt-10 w-full py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 relative overflow-hidden group/btn",
        isActive 
          ? "bg-white text-black dark:bg-black dark:text-white hover:scale-[1.02]" 
          : "bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10"
     )}>
        <span className="relative z-10">Initialize Deployment</span>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-emerald-500 translate-y-full group-hover/btn:translate-y-0 transition-transform" />
     </button>
  </div>
);

export function WPAcceleratedSection({ wpBlue }: { wpBlue: string }) {
  const [activeCategory, setActiveCategory] = useState("Speed Optimization");

  return (
    <div className="col-span-12 mt-12 pt-12 border-t border-slate-200 dark:border-white/5 space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-white/40 tracking-[0.4em]">Optimized in 48 Hours</p>
          <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">WordPress Accelerated</h2>
        </div>
        
        {/* Category Selector */}
        <div className="flex flex-wrap gap-2">
          {WP_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border",
                activeCategory === cat 
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-black dark:border-white" 
                  : "bg-transparent text-slate-400 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
        {WP_PRICING_PLANS.map((plan) => (
          <WPPricingCard 
            key={plan.id}
            plan={plan}
            color={wpBlue}
            isActive={plan.id === "advance"}
          />
        ))}
      </div>
    </div>
  );
}
