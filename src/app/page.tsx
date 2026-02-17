import { Navbar } from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { ResultsSection } from "@/components/results-section"
import { Stats } from "@/components/stats-2"
import { ProvenSection } from "@/components/proven-section"

export default function Home() {
  return (
    <div className="min-h-svh w-full">
      <Navbar />
      <HeroSection />
      <ResultsSection />
      <Stats />
      <ProvenSection />
      <FeatureSection />
    </div>
  )
}
