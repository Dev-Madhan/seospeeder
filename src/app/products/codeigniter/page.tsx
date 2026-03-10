import { OptimizationDetail } from "@/components/optimization-detail";
import { Flame } from "lucide-react";

export const metadata = {
  title: "CodeIgniter Speed Optimization | SEO Speeder",
  description: "Optimize your CodeIgniter applications for peak performance. Professional speed tuning for legacy and modern CI projects.",
};

export default function CodeIgniterPage() {
  return (
    <OptimizationDetail
      platform="CodeIgniter"
      title="CodeIgniter Performance Tuning."
      description="PHP framework speed enhancement for CodeIgniter. We revitalize your application's response times and efficiency."
      iconName="flame"
    />
  );
}
