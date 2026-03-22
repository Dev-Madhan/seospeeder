"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import {
  Network,
  Check,
  Activity,
  Target,
  Brain,
  Zap,
  Workflow
} from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import { Card } from "@/components/ui/card";

export function EliteMlSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 md:px-8 lg:px-4 py-20 md:py-32 overflow-hidden">

      <div className="text-center space-y-6 max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Powered by Elite Analysis Engines
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl font-inter font-medium leading-relaxed max-w-2xl mx-auto">
          We don&apos;t guess. We compute. Our proprietary modeling pipelines analyze billions of signals to deliver a mathematically precise advantage.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6 items-stretch relative z-10">
        <EliteFeatureCard
          className="lg:col-span-4"
          title="Predictive Intent Modeling"
          description="Identify semantic relationships across trillion-token datasets to predict search intent shifts before they manifest in market competition."
          badge="Semantic Core"
          icon={Brain}
          isInView={isInView}
          index={0}
          visual={<SemanticClusterFlow />}
        />

        <EliteFeatureCard
          className="lg:col-span-2"
          title="Authority Mapping"
          description="Build impregnable link structures by validating entity relationships within high-authority knowledge graphs."
          badge="Entity Logic"
          icon={Network}
          isInView={isInView}
          index={1}
          visual={<AuthorityStarscape />}
        />

        <EliteFeatureCard
          className="lg:col-span-2"
          title="Volatility Analysis"
          description="Reverse-engineer algorithmic updates through high-resolution SERP oscillation monitoring and signal decomposition."
          badge="Signal Intel"
          icon={Activity}
          isInView={isInView}
          index={2}
          visual={<SpectralSignalWidget />}
        />

        <EliteFeatureCard
          className="lg:col-span-4"
          title="Automated Gap Logic"
          description="High-velocity indexing and sitemap auditing to detect structural weaknesses and exploit content voids vs competitors."
          badge="Performance Gap"
          icon={Target}
          isInView={isInView}
          index={3}
          visual={<OpportunityHeatmap />}
          status={<PerformanceStatus />}
        />
      </div>
    </div>
  );
}

function EliteFeatureCard({
  className,
  title,
  description,
  badge,
  icon: Icon,
  isInView,
  index,
  visual,
  status
}: {
  className?: string;
  title: string;
  description: string;
  badge: string;
  icon: any;
  isInView: boolean;
  index: number;
  visual: React.ReactNode;
  status?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group h-full", className)}
    >
      <Card className="h-full flex flex-col overflow-hidden bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
        <div className="p-6 md:p-8 flex flex-col h-full space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-card flex items-center justify-center text-zinc-900 dark:text-zinc-50 shadow-sm outline outline-1 outline-zinc-200/80 dark:outline-zinc-800/80 outline-offset-2 group-hover:bg-primary/5 transition-all duration-500">
                <Icon size={20} strokeWidth={2.5} className="group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
              </div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{badge}</span>
            </div>
            {/* Elegant Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm shadow-sm transition-all duration-300">
              <div className="relative size-1.5">
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.3, 0.1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-primary/20 rounded-full"
                />
                <div className="size-full bg-primary rounded-full relative z-10" />
              </div>
              <span className="text-[9px] font-black text-zinc-900 dark:text-zinc-50 uppercase tracking-[0.15em]">ACTIVE</span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center min-h-[180px] py-4">
            {visual}
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              {status && (
                <div className="shrink-0">
                  {status}
                </div>
              )}
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm font-inter font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

/* ─── Sophisticated Visual Components ─── */

function SemanticClusterFlow() {
  const nodes = useMemo(() => [
    { x: "22%", y: "28%", size: 12, label: "Intent", delay: 0 },
    { x: "78%", y: "22%", size: 10, label: "Context", delay: 0.7 },
    { x: "50%", y: "48%", size: 16, label: "Semantic", delay: 1.4 },
    { x: "35%", y: "72%", size: 8, label: "Vector", delay: 2.1 },
    { x: "85%", y: "65%", size: 9, label: "Entity", delay: 2.8 },
    { x: "18%", y: "75%", size: 14, label: "Cluster", delay: 3.5 },
  ], []);

  const connections = useMemo(() => [
    [0, 2], [1, 2], [3, 2], [4, 1], [4, 2], [5, 3]
  ], []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-zinc-50/20 dark:bg-zinc-950/20 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.02)_0%,transparent_70%)]" />

      <div className="absolute inset-0 p-8">
        <div className="relative w-full h-full">
          {/* Intricate Network Web - Shared Coordinate Space */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary) / 0)" />
                <stop offset="50%" stopColor="hsl(var(--primary) / 0.3)" />
                <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
              </linearGradient>
            </defs>

            {connections.map(([from, to], i) => (
              <g key={i}>
                <motion.line
                  x1={nodes[from].x}
                  y1={nodes[from].y}
                  x2={nodes[to].x}
                  y2={nodes[to].y}
                  stroke="hsl(var(--primary) / 0.15)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
                <motion.circle
                  r="1.5"
                  fill="hsl(var(--primary))"
                  animate={{
                    cx: [nodes[from].x, nodes[to].x],
                    cy: [nodes[from].y, nodes[to].y],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3 + (i % 4) * 0.5,
                    repeat: Infinity,
                    delay: (i % 7) * 0.3,
                    ease: "linear"
                  }}
                />
              </g>
            ))}
          </svg>
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: node.delay * 0.2,
                duration: 0.5,
              }}
              className="absolute"
              style={{ left: node.x, top: node.y }}
            >
              {/* Elegant Node Marker centered exactly on the coordinate */}
              <div className="relative -translate-x-1/2 -translate-y-1/2 group">
                <div
                  className="relative bg-white dark:bg-zinc-900 border-2 border-primary rounded-full shadow-sm flex items-center justify-center overflow-hidden"
                  style={{ width: node.size + 4, height: node.size + 4 }}
                >
                  <div className="size-1 bg-primary rounded-full" />
                </div>
              </div>

              {/* Premium Typography Label offset below each node's border */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: node.delay * 0.2 + 0.5 }}
                className="absolute left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm whitespace-nowrap"
                style={{ top: node.size / 2 + 12 }}
              >
                <span className="text-[9px] font-bold text-primary uppercase tracking-wider font-mono">
                  {node.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AuthorityStarscape() {
  const orbits = useMemo(() => [
    { radius: 60, speed: 40, nodes: 3, delay: 0 },
    { radius: 90, speed: 60, nodes: 4, delay: 1 },
    { radius: 120, speed: 80, nodes: 2, delay: 2 },
  ], []);

  return (
    <div className="relative size-56 flex items-center justify-center bg-zinc-50/20 dark:bg-zinc-950/20 rounded-full scale-90 border border-zinc-200/50 dark:border-zinc-800/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.03)_0%,transparent_70%)]" />

      {/* Multi-layered orbital paths */}
      {orbits.map((orbit, i) => (
        <React.Fragment key={i}>
          <div
            className="absolute rounded-full border border-primary/5 pointer-events-none"
            style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: orbit.speed, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
          >
            {[...Array(orbit.nodes)].map((_, j) => {
              const angle = (j / orbit.nodes) * 360;
              return (
                <div key={j} className="absolute inset-0" style={{ rotate: `${angle}deg` }}>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3 + j, repeat: Infinity }}
                    className="absolute -top-1 left-1/2 -ms-[2px] size-1 bg-zinc-900 dark:bg-zinc-300 rounded-full shadow-sm"
                  />
                  {/* Subtle trail effect */}
                  <div className="absolute -top-1 left-1/2 -ms-[0.5px] w-px h-12 bg-gradient-to-t from-primary/20 to-transparent origin-bottom" />
                </div>
              );
            })}
          </motion.div>
        </React.Fragment>
      ))}

      {/* Central Brand Entity Node - High Premium Style */}
      <div className="relative z-20">
        <div className="relative size-14 rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-card flex items-center justify-center text-primary shadow-sm outline outline-1 outline-zinc-200/80 dark:outline-zinc-800/80 outline-offset-2 overflow-hidden">
          <Zap size={24} strokeWidth={2.5} className="fill-primary/10" />
        </div>
      </div>

      {/* Background Floating "Stars" (Data points) - Hardcoded to prevent hydration mismatch */}
      {[
        { x: 15, y: 35, d: 2 }, { x: 45, y: 15, d: 3 }, { x: 75, y: 45, d: 2.5 },
        { x: 25, y: 65, d: 4 }, { x: 55, y: 85, d: 3.5 }, { x: 85, y: 25, d: 2.8 },
        { x: 35, y: 25, d: 3.2 }, { x: 65, y: 75, d: 2.2 }, { x: 15, y: 85, d: 3.8 },
        { x: 85, y: 75, d: 2.4 }, { x: 45, y: 55, d: 3.1 }, { x: 25, y: 15, d: 2.6 }
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: pos.d, repeat: Infinity, delay: i * 0.4 }}
          className="absolute size-0.5 bg-primary rounded-full blur-none opacity-40"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`
          }}
        />
      ))}
    </div>
  );
}

function SpectralSignalWidget() {
  return (
    <div className="w-full max-w-[220px] h-32 flex flex-col gap-4 relative overflow-hidden group/spectral p-4 bg-zinc-50/50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)]" />

      {/* Precision Frequency Grid */}
      <div className="absolute inset-0 flex items-center justify-between px-2 opacity-10 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="h-full w-px bg-primary/40" />
        ))}
      </div>

      <div className="relative h-16 flex items-end justify-between gap-[2px] z-10">
        {/* Synthetic Waveform Layer */}
        <svg className="absolute inset-0 w-full h-full opacity-20 text-primary">
          <motion.path
            d="M 0 40 Q 40 10 80 40 T 160 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            animate={{ d: ["M 0 40 Q 40 10 80 40 T 160 40", "M 0 40 Q 40 70 80 40 T 160 40", "M 0 40 Q 40 10 80 40 T 160 40"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* High-Resolution Bars with Glows */}
        {[30, 60, 45, 85, 40, 95, 55, 75, 90, 40, 65, 80].map((h, i) => (
          <div key={i} className="relative w-[3px] h-full flex items-end">
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: [`${h}%`, `${Math.max(20, h + ((i % 3) * 10 - 10))}%`, `${h}%`],
              }}
              transition={{ duration: 2 + (i % 4) * 0.4, repeat: Infinity, ease: "easeInOut" }}
              className={cn(
                "w-full rounded-full relative z-20",
                h > 75 ? "bg-primary" : "bg-primary/30"
              )}
            />
            {h > 75 && (
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-0 inset-x-0 h-[120%] bg-primary/20 blur-md rounded-full z-10"
              />
            )}
          </div>
        ))}
      </div>

      {/* Advanced Telemetry Footer */}
      <div className="flex flex-col gap-2 relative z-10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm p-1.5 rounded-lg border border-zinc-200/50 dark:border-zinc-800/50 mt-auto">
        <div className="flex justify-between items-center text-[8px] font-black text-zinc-500 font-mono tracking-widest px-1">
          <span>SIGNAL.ALPHA_092</span>
          <span className="text-primary tabular-nums">99.42%</span>
        </div>
        <div className="w-full h-[3px] bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: ["90%", "100%", "92%", "98%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="h-full bg-primary"
          />
        </div>
      </div>
    </div>
  );
}

function BridgeReadout() {
  const [delta, setDelta] = React.useState("0.00");

  React.useEffect(() => {
    setDelta((Math.random() * 100).toFixed(2));
  }, []);

  return (
    <div className="absolute top-0 right-2 text-[6px] font-mono text-primary font-bold whitespace-nowrap opacity-60">
      Δ_BRIDGE: {delta}%
    </div>
  );
}

function OpportunityHeatmap() {
  return (
    <div className="relative w-full h-44 flex flex-col items-center justify-center p-6 bg-zinc-50/20 dark:bg-zinc-950/20 rounded-2xl overflow-hidden group/gap border border-zinc-200/50 dark:border-zinc-800/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.01)_0%,transparent_70%)]" />

      {/* High-Precision Measuring Grid */}
      <div className="absolute inset-0 grid grid-cols-[repeat(24,1fr)] grid-rows-[repeat(12,1fr)] opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        {[...Array(288)].map((_, i) => (
          <div key={i} className="border-[0.25px] border-primary" />
        ))}
      </div>

      {/* Logic Delta Mapping */}
      <div className="relative w-full h-full flex flex-col justify-center gap-6 px-10">
        {[0, 1].map((row) => (
          <div key={row} className="relative h-4 w-full flex items-center">
            {/* Background Track */}
            <div className="absolute inset-0 h-px bg-zinc-200 dark:bg-zinc-800" />

            {/* Data Segments with "Gap Indicators" */}
            <div className="relative w-full h-full flex justify-between items-center">
              {[...Array(10)].map((_, i) => {
                const isGap = (row === 0 && (i === 3 || i === 7)) || (row === 1 && (i === 2 || i === 8));

                return (
                  <div key={i} className="relative group/segment">
                    <motion.div
                      className={cn(
                        "h-[3px] w-6 rounded-full transition-all duration-700",
                        isGap ? "bg-zinc-300 dark:bg-zinc-700 opacity-40" : "bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.3)]"
                      )}
                      animate={isGap ? { opacity: [0.1, 0.4, 0.1] } : {}}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    />
                    {/* Ruler Markers */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-px w-px h-1 bg-zinc-300 dark:bg-zinc-700" />
                  </div>
                );
              })}
            </div>

            {/* Scanning "Bridge Projection" Effect */}
            <motion.div
              animate={{ x: ['-20%', '120%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-[-20px] w-12 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 z-20 pointer-events-none"
            >
              <div className="absolute inset-y-0 right-0 w-px bg-primary/40 shadow-[0_0_10px_rgba(var(--primary-rgb),0.4)]" />
              <BridgeReadout />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Telemetry Ruler System */}
      <div className="absolute inset-x-8 top-10 flex justify-between opacity-30 text-[6px] font-mono font-black text-zinc-500">
        {["0.0ms", "1.2ms", "2.4ms", "3.6ms", "4.8ms", "6.0ms"].map(t => <span key={t}>{t}</span>)}
      </div>

      {/* Specialized Gap Status Indicators */}
      <div className="absolute bottom-10 inset-x-10 flex justify-between">
        <div className="flex items-center gap-1.5 opacity-60">
          <div className="size-1 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
          <span className="text-[7px] font-bold text-zinc-500 uppercase font-mono tracking-widest">UNCALIBRATED_GAP</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="size-1 bg-primary rounded-full animate-pulse" />
          <span className="text-[7px] font-bold text-primary uppercase font-mono tracking-widest">BRIDGE_ACTIVE</span>
        </div>
      </div>

    </div>
  );
}

function PerformanceStatus() {
  return (
    <div className="flex items-center gap-4 bg-white/40 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 px-2.5 py-1 rounded-lg shadow-sm z-30">
      <div className="flex items-center gap-1.5">
        <div className="relative size-1.5">
          <motion.div
            animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-primary/40 rounded-full"
          />
          <div className="size-full bg-primary rounded-full relative z-10" />
        </div>
        <span className="text-[8px] font-black text-zinc-500 dark:text-zinc-400 font-mono tracking-widest">GAP_DETECTED</span>
      </div>

      <div className="w-px h-3 bg-zinc-200 dark:bg-zinc-800/50" />

      <div className="flex items-center gap-1.5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="flex items-center justify-center shrink-0"
        >
          <Workflow size={10} className="text-primary" />
        </motion.div>
        <span className="text-[8px] font-black text-primary font-mono tracking-widest whitespace-nowrap">
          OPTIMIZING
        </span>
      </div>
    </div>
  );
}
