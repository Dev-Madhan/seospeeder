import { OptimizationDetail } from "@/components/optimization-detail";
import { Code2 } from "lucide-react";

export const metadata = {
  title: "React JS Speed Optimization | SEO Speeder",
  description: "Optimize your React and Next.js applications. Eliminate re-render issues, optimize bundles, and achieve instant load times.",
};

export default function ReactJsPage() {
  return (
    <OptimizationDetail
      platform="React JS"
      title="React Performance Engineering."
      description="React application optimization. We fine-tune state management, optimize component rendering, and implement advanced code-splitting."
      iconName="code"
    />
  );
}
