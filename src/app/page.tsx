import { Navbar } from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"

export default function Home() {
  return (
    <div className="min-h-svh w-full">
      <Navbar />
      <HeroSection />
      <FeatureSection />
    </div>
  )
}
