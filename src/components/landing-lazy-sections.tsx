'use client';

import dynamic from "next/dynamic"

export const Stats = dynamic(() => import("@/components/stats-2").then(mod => mod.Stats), {
  ssr: false,
})

export const FeatureSection = dynamic(() => import("@/components/feature-section").then(mod => mod.FeatureSection), {
  ssr: false,
})
