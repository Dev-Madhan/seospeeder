import { OptimizationDetail } from "@/components/optimization-detail";
import { Server } from "lucide-react";

export const metadata = {
  title: "Server Side Optimization | SEO Speeder",
  description: "Backend and server-level performance tuning. Optimize TTFB, server response times, and resource allocation for maximum speed.",
};

export default function ServerSidePage() {
  return (
    <OptimizationDetail
      platform="Server Side"
      title="Backend Performance Scaled."
      description="Backend and server optimization. We handle configuration tuning, caching layers, and database optimization to reduce server-side bottlenecks."
      iconName="server"
    />
  );
}
