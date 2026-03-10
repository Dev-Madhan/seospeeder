import { OptimizationDetail } from "@/components/optimization-detail";
import { Code2 } from "lucide-react";

export const metadata = {
  title: "HTML Speed Optimization | SEO Speeder",
  description: "Static HTML performance optimization. achieve perfect lighthouse scores with optimized assets, clean code, and fast delivery.",
};

export default function HtmlPage() {
  return (
    <OptimizationDetail
      platform="HTML"
      title="Lightweight HTML Performance."
      description="Static HTML performance. We optimize your static sites for maximum delivery speed, ensuring near-instant load times globally."
      iconName="code"
    />
  );
}
