"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

type BotDetectionProps = {
  cardTitle?: string;
  cardDescription?: string;
};

const positions = [
  { top: "80px", left: "34px" },
  { top: "161px", left: "90px" },
  { top: "120px", left: "230px" },
  { top: "203px", left: "165px" },
  { top: "100px", left: "120px" },
  { top: "164px", left: "15px" },
  { top: "238px", left: "61px" },
  { top: "180px", left: "237px" },
  { top: "53px", left: "204px" },
];

const BotDetection = ({
  cardTitle = "Bot Detection",
  cardDescription = "Experience fewer fraudulent sign-ups with our sophisticated, AI-driven bot detection that constantly adapts, ensuring high accuracy.",
}: BotDetectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(1);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % positions.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "h-96 w-full max-w-[280px] sm:max-w-sm shrink-0",
        "rounded-3xl border-2 border-zinc-200/80 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-950 dark:to-black shadow-lg transition-all duration-300",
      )}
    >
      <div className="absolute left-1/2 h-full w-full -translate-x-1/2">
        <div className="relative h-[75%] w-full">
          {/* Enhanced Sweep Glow */}
          <motion.div
            className="pointer-events-none absolute bottom-5 left-1/2 h-64 w-64 origin-bottom-left -translate-x-1/2"
            style={{
              background:
                "radial-gradient(circle at 0% 100%, rgba(239, 68, 68, 0.1) 0%, transparent 70%)",
            }}
            initial={{ opacity: 0.7, rotate: -55 }}
            animate={{
              opacity: [0.6, 0.9, 0.6],
              rotate: [-55, -40, -50, -45, -55],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <ContainerMask />
          
          <svg
            width="100%"
            height="100%"
            className="pointer-events-none absolute top-0 left-0 animate-pulse opacity-40 dark:opacity-20"
          >
            {positions.map((pos, i) => (
              <g key={i}>
                <rect
                  x={pos.left}
                  y={pos.top}
                  width={5}
                  height={5}
                  rx={1}
                  ry={1}
                  fill="currentColor"
                  className="text-zinc-400 dark:text-zinc-600"
                />
              </g>
            ))}
          </svg>

          <motion.div
            layoutId="highlight-dot"
            className="absolute flex h-[7px] w-[7px] items-center justify-center rounded-full bg-red-500 shadow-[0_0_15px_4px_rgba(239,68,68,0.8)] z-10"
            style={positions[currentIndex]}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 40,
            }}
          >
            <motion.div
              key={`pulse-${currentIndex}`}
              className="absolute h-full w-full rounded-full border border-red-500"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            />
          </motion.div>
          
          <div className="absolute bottom-2 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border-2 border-zinc-200/60 dark:border-zinc-800 bg-zinc-100/30 dark:bg-zinc-900/50 flex items-center justify-center shadow-inner" />
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 w-full px-5 flex flex-col gap-1.5">
        <h3 className="text-[13px] font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">{cardTitle}</h3>
        <p className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400 leading-snug">{cardDescription}</p>
      </div>
    </div>
  );
};

export default BotDetection;

const ContainerMask = () => {
  return (
    <div className="absolute inset-0 opacity-[0.08] dark:opacity-20 pointer-events-none">
      <div className="absolute top-12 left-1/2 h-full w-[130%] -translate-x-1/2 rounded-full border-t-2 border-dashed border-zinc-300 dark:border-zinc-700" />
      <div className="absolute top-25 left-1/2 h-full w-[110%] -translate-x-1/2 rounded-full border-t-2 border-dashed border-zinc-300 dark:border-zinc-700" />
      <div className="absolute top-38 left-1/2 h-full w-full -translate-x-1/2 rounded-full border-t-2 border-dashed border-zinc-300 dark:border-zinc-700" />
      <div className="absolute top-51 left-1/2 h-full w-[80%] -translate-x-1/2 rounded-full border-t-2 border-dashed border-zinc-300 dark:border-zinc-700" />
    </div>
  );
};
