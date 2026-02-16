import { Navbar } from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { ResultsSection } from "@/components/results-section"

export default function Home() {
  return (
    <div className="min-h-svh w-full">
      <Navbar />
      <HeroSection />
      <ResultsSection />
      <FeatureSection />
    </div>
  )
}
