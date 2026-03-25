"use client"

import React from "react"
import { IconCloud, IconDatabase, IconServer, IconShield, IconCircleCheck, IconBulb, IconUser } from "@tabler/icons-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

interface CloudFlowProps {
  className?: string
  centerText?: string
  nodeLabels?: {
    topLeft: string
    topRight: string
    bottomLeft: string
    bottomRight: string
  }
  badges?: {
    left: string
    right: string
  }
  title?: string
  accentColor?: string
}

export default function CloudFlow({
  className,
  centerText,
  nodeLabels,
  badges,
  title,
  accentColor = "#00A6F5",
}: CloudFlowProps) {
  return (
    <div
      className={cn(
        "relative flex h-[350px] w-full max-w-[500px] flex-col items-center font-primary",
        className
      )}
    >
      {/* SVG Flow Diagram */}
      <svg
        className="h-full w-full opacity-90"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
      >
        <g
          className="text-zinc-200 dark:text-zinc-800"
          stroke="currentColor"
          fill="none"
          strokeWidth="1.0"
          strokeDasharray="100 100"
          pathLength="100"
        >
          {/* Path connections with subtle curvature */}
          <path d="M 25 15 L 25 35 Q 25 40 30 40 L 90 40 Q 95 40 95 45 L 95 48" />
          <path d="M 175 15 L 175 35 Q 175 40 170 40 L 110 40 Q 105 40 105 45 L 105 48" />
          <path d="M 95 62 L 95 65 Q 95 70 90 70 L 30 70 Q 25 70 25 75 L 25 85" />
          <path d="M 105 62 L 105 65 Q 105 70 110 70 L 170 70 Q 175 70 175 75 L 175 85" />

          {/* Slower, premium draw animation */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="2.5s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.4,0,0.2,1"
            keyTimes="0; 1"
          />
        </g>

        {/* Pulse Animations */}
        {[
          "M 25 15 L 25 35 Q 25 40 30 40 L 90 40 Q 95 40 95 45 L 95 48",
          "M 175 15 L 175 35 Q 175 40 170 40 L 110 40 Q 105 40 105 45 L 105 48",
          "M 95 62 L 95 65 Q 95 70 90 70 L 30 70 Q 25 70 25 75 L 25 85",
          "M 105 62 L 105 65 Q 105 70 110 70 L 170 70 Q 175 70 175 75 L 175 85"
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke={accentColor}
            strokeWidth="1.2"
            strokeDasharray="6 94"
            strokeDashoffset="100"
            initial={{ opacity: 0 }}
            animate={{
              strokeDashoffset: [100, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.4,
              times: [0, 0.1, 0.9, 1],
            }}
          />
        ))}

        {/* Node Badges — Properly padded and spaced for E-E-A-T */}
        <g fill="none">
          {/* Top Left — Experience */}
          <g>
            <rect className="fill-white dark:fill-zinc-900 stroke-zinc-200 dark:stroke-zinc-800" strokeWidth="0.5" x="2" y="9" width="46" height="12" rx="6" />
            <IconUser x="7" y="11.8" size="6.5" color={accentColor} />
            <text x="28" y="17.2" textAnchor="middle" className="fill-zinc-950 dark:fill-zinc-100 font-primary" fontSize="4.2" fontWeight="700">
              {nodeLabels?.topLeft || "Experience"}
            </text>
          </g>

          {/* Top Right — Expertise */}
          <g>
            <rect className="fill-white dark:fill-zinc-900 stroke-zinc-200 dark:stroke-zinc-800" strokeWidth="0.5" x="152" y="9" width="46" height="12" rx="6" />
            <IconBulb x="157" y="11.8" size="6.5" color={accentColor} />
            <text x="178" y="17.2" textAnchor="middle" className="fill-zinc-950 dark:fill-zinc-100 font-primary" fontSize="4.2" fontWeight="700">
              {nodeLabels?.topRight || "Expertise"}
            </text>
          </g>

          {/* Bottom Left — Authority */}
          <g>
            <rect className="fill-white dark:fill-zinc-900 stroke-zinc-200 dark:stroke-zinc-800" strokeWidth="0.5" x="2" y="84" width="46" height="12" rx="6" />
            <IconCircleCheck x="7" y="86.8" size="6.5" color={accentColor} />
            <text x="28" y="92.2" textAnchor="middle" className="fill-zinc-950 dark:fill-zinc-100 font-primary" fontSize="4.2" fontWeight="700">
              {nodeLabels?.bottomLeft || "Authority"}
            </text>
          </g>

          {/* Bottom Right — Trust */}
          <g>
            <rect className="fill-white dark:fill-zinc-900 stroke-zinc-200 dark:stroke-zinc-800" strokeWidth="0.5" x="152" y="84" width="46" height="12" rx="6" />
            <IconShield x="157" y="86.8" size="6.5" color={accentColor} />
            <text x="178" y="92.2" textAnchor="middle" className="fill-zinc-950 dark:fill-zinc-100 font-primary" fontSize="4.2" fontWeight="700">
              {nodeLabels?.bottomRight || "Trust"}
            </text>
          </g>
        </g>
      </svg>

      {/* Main Container */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">


        {/* Title Badge — Clean Light Theme with bold text */}
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-1.5 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.15)] sm:-top-4">
          <IconCloud className="size-3.5" color={accentColor} />
          <span className="ml-2 text-[11px] font-extrabold text-black dark:text-white uppercase tracking-widest leading-none">
            {title || "E-E-A-T Architecture"}
          </span>
        </div>

        {/* Center Hub — Premium Glass look */}
        <div
          className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full bg-white dark:bg-zinc-950 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.25)] border-2 transform-gpu translate-z-0"
          style={{
            borderColor: accentColor,
            color: accentColor,
          }}
        >
          <span className="text-[12px] font-bold tracking-[0.25em] leading-none subpixel-antialiased">{centerText || "HUB"}</span>
        </div>

        {/* Main Content Box — Glassmorphism and Proper Shadow */}
        <div className="bg-white/80 dark:bg-zinc-950/60 backdrop-blur-xl relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_rgba(0,0,0,0.4)]">
          
          {/* Mobile: Single Centered Status Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex sm:hidden h-9 items-center gap-3 rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 pl-3 pr-4 text-[10px] font-bold text-black dark:text-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all whitespace-nowrap">
            <div className="flex items-center gap-2 border-r-2 border-zinc-200 dark:border-zinc-800 pr-3">
              <IconBulb className="size-3.5" color={accentColor} />
              <span className="uppercase tracking-widest leading-none mt-0.5">{badges?.left || "Semantic Score"}</span>
            </div>
            <span className="font-extrabold tracking-widest leading-none mt-0.5" style={{ color: accentColor }}>
              {badges?.right || "99 / 100"}
            </span>
          </div>

          {/* Desktop: Original style — Down Left for Category */}
          <div className="absolute bottom-8 left-8 hidden sm:flex z-20 h-9 items-center gap-2 rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 px-3 text-[10px] font-bold text-black dark:text-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all">
            <IconBulb className="size-3.5" color={accentColor} />
            <span className="uppercase tracking-widest leading-none mt-0.5">{badges?.left || "Semantic Score"}</span>
          </div>
          
          <div className="absolute top-6 right-8 hidden sm:flex z-20 h-9 items-center gap-2 rounded-full border-2 bg-white/70 dark:bg-zinc-900/60 px-3 text-[10px] font-extrabold shadow-sm backdrop-blur-md"
            style={{ borderColor: `${accentColor}66`, color: accentColor }}
          >
            <span className="tracking-widest leading-none">{badges?.right || "99 / 100"}</span>
          </div>

          {/* Core Hub Inner Pulse */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ 
              background: `radial-gradient(circle at 50% 100%, ${accentColor} 0%, transparent 60%)` 
            }}
          />

          {/* Animated Concentric Circles */}
          {[20, 40, 60, 80].map((inset, i) => (
             <motion.div
              key={i}
              className="absolute pointer-events-none rounded-full border-2"
              style={{
                bottom: -inset,
                width: 120 + i * 40,
                height: 120 + i * 40,
                borderColor: `${accentColor}1A`,
              }}
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: i + 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
