'use client';
import { CSSProperties } from 'react'
import { Highlighter } from "@/components/ui/highlighter"
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { motion } from 'motion/react'

export function Stats() {
    return (
        <section className="bg-background py-16 sm:py-24 font-primary overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
                    <div className="max-w-2xl space-y-4 text-center lg:text-left mx-auto lg:mx-0">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
                            Unmatched <Highlighter color="hsl(var(--foreground) / 0.1)" padding={0} strokeWidth={1} iterations={1}>Speed & Reliability</Highlighter>
                        </h2>
                        <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 font-inter font-medium">
                            Our infrastructure helps you pass Core Web Vitals instantly, boosting SEO and user retention.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full lg:w-auto">
                        <div className="flex flex-col items-center lg:items-start p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 sm:bg-transparent sm:dark:bg-transparent lg:border-l-2 lg:border-zinc-200 lg:dark:border-zinc-800 lg:pl-6 lg:rounded-none">
                            <span className="text-4xl sm:text-5xl font-bold text-foreground tracking-tighter">99+</span>
                            <span className="text-sm sm:text-base text-muted-foreground mt-1 font-semibold font-inter">PageSpeed Score</span>
                        </div>
                        <div className="flex flex-col items-center lg:items-start p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 sm:bg-transparent sm:dark:bg-transparent lg:border-l-2 lg:border-zinc-200 lg:dark:border-zinc-800 lg:pl-6 lg:rounded-none">
                            <span className="text-4xl sm:text-5xl font-bold text-foreground tracking-tighter">&lt;100ms</span>
                            <span className="text-sm sm:text-base text-muted-foreground mt-1 font-semibold font-inter">Time to First Byte</span>
                        </div>
                        <div className="flex flex-col items-center lg:items-start p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 sm:bg-transparent sm:dark:bg-transparent lg:border-l-2 lg:border-zinc-200 lg:dark:border-zinc-800 lg:pl-6 lg:rounded-none">
                            <span className="text-4xl sm:text-5xl font-bold text-foreground tracking-tighter">100%</span>
                            <span className="text-sm sm:text-base text-muted-foreground mt-1 font-semibold font-inter">Indexation Rate</span>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                className="mt-12 sm:mt-20 mx-auto h-[300px] sm:h-[400px] w-full max-w-7xl px-4 sm:px-6 lg:px-8"
            >
                <div className="h-full w-full rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/30 p-4 sm:p-8 backdrop-blur-xl overflow-hidden shadow-2xl relative group">
                    <div className="absolute top-8 left-8 z-10">
                      <div className="flex items-center gap-2 w-fit">
                        <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 font-inter tracking-tight">Real-time Performance Metrics</span>
                      </div>
                    </div>
                    <MonitoringChart />
                </div>
            </motion.div>
        </section>
    )
}

const chartConfig = {
  active: {
      label: 'Performance',
      color: 'hsl(var(--primary))',
  },
  baseline: {
      label: 'Baseline',
      color: 'hsl(var(--muted-foreground))',
  },
} satisfies ChartConfig

const chartData = [
  { month: 'May 1', baseline: 120, active: 180 },
  { month: 'May 8', baseline: 126, active: 240 },
  { month: 'May 15', baseline: 132, active: 210 },
  { month: 'May 22', baseline: 138, active: 290 },
  { month: 'Jun 1', baseline: 144, active: 240 },
  { month: 'Jun 8', baseline: 150, active: 340 },
  { month: 'Jun 15', baseline: 156, active: 270 },
  { month: 'Jun 22', baseline: 162, active: 410 },
  { month: 'Jul 1', baseline: 168, active: 310 },
  { month: 'Jul 8', baseline: 174, active: 480 },
  { month: 'Jul 15', baseline: 180, active: 360 },
  { month: 'Jul 22', baseline: 186, active: 590 },
  { month: 'Aug 1', baseline: 192, active: 420 },
  { month: 'Aug 8', baseline: 198, active: 680 },
  { month: 'Aug 15', baseline: 204, active: 480 },
  { month: 'Aug 22', baseline: 210, active: 820 },
  { month: 'Sep 1', baseline: 216, active: 560 },
  { month: 'Sep 8', baseline: 222, active: 940 },
  { month: 'Sep 15', baseline: 228, active: 750 },
  { month: 'Sep 22', baseline: 234, active: 1100 },
  { month: 'Sep 29', baseline: 237, active: 1050 },
  { month: 'Oct 8', baseline: 240, active: 1540 },
]

const MonitoringChart = () => {
  return (
      <ChartContainer
          className="h-full w-full"
          config={chartConfig}>
          <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                  left: -20,
                  right: 0,
                  top: 40,
                  bottom: 0
              }}>
              <defs>
                  <linearGradient
                      id="fillActive"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1">
                      <stop
                          offset="0%"
                          stopColor="var(--color-active)"
                          stopOpacity={0.4}
                      />
                      <stop
                          offset="80%"
                          stopColor="var(--color-active)"
                          stopOpacity={0}
                      />
                  </linearGradient>
                  <linearGradient
                      id="fillBaseline"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1">
                      <stop
                          offset="0%"
                          stopColor="var(--color-baseline)"
                          stopOpacity={0.2}
                      />
                      <stop
                          offset="80%"
                          stopColor="var(--color-baseline)"
                          stopOpacity={0}
                      />
                  </linearGradient>
              </defs>
              <CartesianGrid 
                vertical={false} 
                strokeDasharray="3 3" 
                stroke="rgba(161, 161, 170, 0.1)" 
              />
              <ChartTooltip
                  animationDuration={300}
                  animationEasing="ease-out"
                  cursor={{ stroke: 'rgba(161, 161, 170, 0.2)', strokeWidth: 1 }}
                  content={
                    <ChartTooltipContent 
                      className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-2xl [&_.text-muted-foreground]:text-zinc-500 dark:[&_.text-muted-foreground]:text-zinc-400" 
                      labelClassName="text-zinc-900 dark:text-zinc-50 font-bold mb-1"
                    />
                  }
              />
              <Area
                  strokeWidth={2}
                  dataKey="baseline"
                  type="linear"
                  fill="url(#fillBaseline)"
                  stroke="var(--color-baseline)"
                  strokeDasharray="5 5"
                  activeDot={{ r: 3, fill: "var(--color-baseline)", strokeWidth: 0 }}
              />
              <Area
                  strokeWidth={4}
                  dataKey="active"
                  type="monotone"
                  fill="url(#fillActive)"
                  stroke="var(--color-active)"
                  animationDuration={2500}
                  activeDot={{ 
                    r: 6, 
                    fill: "var(--color-active)", 
                    stroke: "hsl(var(--background))", 
                    strokeWidth: 2,
                    className: "shadow-lg shadow-primary/50"
                  }}
              />
          </AreaChart>
      </ChartContainer>
  )
}
