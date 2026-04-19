import { OptimizationDetail } from "@/components/sections/performance/optimization-detail";

export const metadata = {
  title: "WordPress Speed Optimisation | SEO Speeder",
  description: "Expert WordPress speed optimisation services. Boost your Core Web Vitals, improve user experience, and dominate search rankings.",
};

export default function WordPressPage() {
  return (
    <OptimizationDetail
      platform="WordPress"
      title=""
      description=""
      iconName="globe"
      showPricing={true}
    />
  );
}
