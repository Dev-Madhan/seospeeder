import React from "react";
import { AnimatedList } from "@/components/ui/animated-list";
import { Zap, Gauge, ShoppingBag, Layers, Code2, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
const metrics = [
  {
    title: "TTFB Optimized",
    description: "Time to First Byte reduced to 120ms.",
    time: "Just now",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    title: "LCP Improved",
    description: "Largest Contentful Paint reached 1.2s.",
    time: "2m ago",
    icon: <Gauge className="h-4 w-4" />,
  },
  {
    title: "Checkout Enhanced",
    description: "Mobile cart interactions optimized.",
    time: "5m ago",
    icon: <ShoppingBag className="h-4 w-4" />,
  },
  {
    title: "CLS Stabilized",
    description: "CLS metric perfected to 0.00.",
    time: "10m ago",
    icon: <Layers className="h-4 w-4" />,
  },
  {
    title: "Payload Reduced",
    description: "Unused JavaScript & CSS removed.",
    time: "15m ago",
    icon: <Code2 className="h-4 w-4" />,
  },
  {
    title: "Mobile: 99/100",
    description: "Lighthouse mobile metrics verified.",
    time: "22m ago",
    icon: <Smartphone className="h-4 w-4" />,
  },
];

const MetricCard = ({ item }: { item: typeof metrics[0] }) => {
  return (
    <div
      className={cn(
        "relative mx-auto w-full cursor-pointer overflow-hidden rounded-xl border-2 border-border/50 p-4",
        "transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-border",
        "bg-gradient-to-br from-background to-muted shadow-sm text-foreground"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-border/50 bg-muted/30 text-foreground">
          {item.icon}
        </div>
        <div className="flex flex-col overflow-hidden w-full font-inter">
          <div className="flex flex-row items-center justify-between gap-2 min-w-0">
            <span className="text-sm font-semibold tracking-tight text-foreground truncate min-w-0 flex-1">
              {item.title}
            </span>
            <span className="text-[11px] text-muted-foreground shrink-0 font-medium ml-2">
              {item.time}
            </span>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground truncate">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export function ShopifyLiveMetrics() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Content */}
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="inline-flex w-fit items-center rounded-full border border-border/50 bg-muted/30 px-3 py-1 text-xs font-semibold tracking-wide text-foreground uppercase">
              Real-Time Tracking
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
              Continuous live optimization for your store.
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg font-inter">
              Our automated systems constantly monitor and refine your Shopify store's performance. Every metric, from Time to First Byte to Core Web Vitals, is tracked and perfected in real-time.
            </p>
          </div>

          {/* Animated List Container */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative flex h-[450px] w-full flex-col justify-center overflow-hidden rounded-2xl border border-border/50 bg-background shadow-sm p-6">

              <div
                className="relative h-full w-full"
                style={{
                  maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
                }}
              >
                <AnimatedList className="w-full" columnGap={85}>
                  {metrics.map((item, idx) => (
                    <MetricCard key={idx} item={item} />
                  ))}
                </AnimatedList>
              </div>            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
