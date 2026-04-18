'use client';

import dynamic from "next/dynamic"

export const FeatureSection = dynamic(() => import("@/components/sections/features/feature-section").then(mod => mod.FeatureSection), {
  ssr: false,
})
