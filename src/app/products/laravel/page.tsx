import { OptimizationDetail } from "@/components/optimization-detail";
import { Code2 } from "lucide-react";

export const metadata = {
  title: "Laravel Speed Optimization | SEO Speeder",
  description: "High-performance Laravel optimization. Fine-tune your applications for maximum speed and efficient resource usage.",
};

export default function LaravelPage() {
  return (
    <OptimizationDetail
      platform="Laravel"
      title="Laravel Speed & Efficiency."
      description="Framework optimization services for Laravel applications. We optimize queries, caching strategies, and asset delivery pipelines."
      iconName="code"
    />
  );
}
