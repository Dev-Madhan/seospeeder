import dynamic from "next/dynamic"

import HeroSection from "@/components/sections/hero/hero-section"
import LogoCloud from "@/components/sections/logos/logo-cloud-2"
import { ResultsSection } from "@/components/sections/results/results-section"

const FeatureSection = dynamic(() => import("@/components/sections/landing-lazy-sections").then(mod => mod.FeatureSection), { ssr: true })
const ProvenSection = dynamic(() => import("@/components/sections/proven/proven-section").then(mod => mod.ProvenSection), { ssr: true })
const EliteMlSection = dynamic(() => import("@/components/sections/elite-ml/elite-ml-section").then(mod => mod.EliteMlSection), { ssr: true })
const InteractiveAiWorkflow = dynamic(() => import("@/components/sections/workflow/interactive-ai-workflow").then(mod => mod.InteractiveAiWorkflow), { ssr: true })
const TestimonialSection = dynamic(() => import("@/components/sections/testimonials/shake-testimonial-card").then(mod => mod.TestimonialSection), { ssr: true })
const FaqsSection = dynamic(() => import("@/components/sections/faqs/faqs").then(mod => mod.FaqsSection), { ssr: true })

export default function Home() {
  return (
    <div className="w-full pb-20 md:pb-32">
      <HeroSection />
      <LogoCloud />
      <ResultsSection />
      <FeatureSection />
      <ProvenSection />
      <EliteMlSection />
      <InteractiveAiWorkflow />
      <TestimonialSection />
      <FaqsSection />
    </div>
  )
}
