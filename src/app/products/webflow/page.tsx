import { OptimizationDetail } from "@/components/optimization-detail";
import { Workflow } from "lucide-react";

export const metadata = {
  title: "Webflow Speed Optimization | SEO Speeder",
  description: "Supercharge your Webflow designs. Advanced speed optimization for Webflow interactions, assets, and custom code.",
};

export default function WebflowPage() {
  return (
    <OptimizationDetail
      platform="Webflow"
      title="High-Performance Webflow."
      description="No-code platform optimization for Webflow. We optimize your interactions, clean up your CSS/JS, and ensure your site is lightning fast."
      iconName="workflow"
    />
  );
}
