"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type OrbitSkillItem = {
    label: string;
    icon?: ReactNode;
};

export interface OrbitingSkillsProps extends React.HTMLAttributes<HTMLDivElement> {
    items: OrbitSkillItem[];
    radius?: number;
    duration?: number;
    showPath?: boolean;
    followCursor?: boolean;
    children?: ReactNode;
    /** Orbit ring accent color in HSL notation, e.g. "214 100% 60%" */
    accentHsl?: string;
}

const KEYFRAMES = `
@keyframes orbit-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
}
@keyframes orbit-glow-pulse {
    0%, 100% { opacity: 0.18; }
    50%       { opacity: 0.38; }
}
`;

export function OrbitingSkills({
    items,
    radius = 96,
    duration = 18,
    showPath = true,
    followCursor,
    children,
    className,
    accentHsl = "214 100% 60%",
    ...props
}: OrbitingSkillsProps) {
    const containerSize = radius * 2.6;
    const ringSize      = radius * 2;

    return (
        <div
            className={cn("relative flex items-center justify-center select-none", className)}
            style={{ width: containerSize, height: containerSize }}
            {...props}
        >
            <style>{KEYFRAMES}</style>

            {/* ── Ambient glow ── */}
            <div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width:  radius * 0.85,
                    height: radius * 0.85,
                    background: `radial-gradient(circle, hsl(${accentHsl} / 0.14) 0%, transparent 72%)`,
                    animation: "orbit-glow-pulse 4s ease-in-out infinite",
                }}
            />

            {/* ── Orbit ring — fully dotted ── */}
            {showPath && (
                <svg
                    className="absolute pointer-events-none"
                    style={{ width: ringSize, height: ringSize }}
                    viewBox={`0 0 ${ringSize} ${ringSize}`}
                    overflow="visible"
                >
                    {/* Dashed lines: short dashes evenly spaced around the ring */}
                    <circle
                        cx={radius} cy={radius} r={radius - 1}
                        fill="none"
                        stroke={`hsl(${accentHsl})`}
                        strokeWidth="1.5"
                        strokeOpacity="0.4"
                        strokeDasharray="5 8"
                        strokeLinecap="butt"
                    />
                </svg>
            )}

            {/* ── Center slot ── */}
            <div className="absolute z-10 flex items-center justify-center">
                {children}
            </div>

            {/* ── Spinner container ── */}
            <div
                className="group/orbit absolute z-20 flex items-center justify-center"
                style={{
                    width: ringSize,
                    height: ringSize,
                    animation: `orbit-spin ${duration}s linear infinite`,
                }}
            >
                {items.map((item, index) => {
                    const angle = (index / items.length) * 360;
                    const hasIcon = Boolean(item.icon);

                    return (
                        <div
                            key={item.label}
                            className="absolute flex items-center justify-center cursor-default"
                            style={{
                                transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                            }}
                        >
                            {/* Counter-rotate chip */}
                            <div
                                className={cn(
                                    // layout
                                    "group/chip relative flex items-center gap-1.5 rounded-full",
                                    hasIcon ? "px-2.5 py-1.5" : "px-3 py-1.5",
                                    // light theme
                                    "bg-white border border-zinc-200/90",
                                    // dark theme
                                    "dark:bg-zinc-900 dark:border-zinc-700/80",
                                    // shadow — subtle on both backgrounds
                                    "shadow-[0_1px_6px_rgba(0,0,0,0.07),0_0_0_0.5px_rgba(0,0,0,0.04)]",
                                    "dark:shadow-[0_1px_8px_rgba(0,0,0,0.35),0_0_0_0.5px_rgba(255,255,255,0.04)]",
                                    // interaction
                                    "transition-all duration-300 ease-out",
                                    "hover:scale-110",
                                    `hover:border-[hsl(${accentHsl}/0.4)]`,
                                    "hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]",
                                    "dark:hover:border-[hsl(${accentHsl}/0.4)]",
                                    "dark:hover:shadow-[0_4px_16px_rgba(0,0,0,0.5)]",
                                    // pause whole orbit on hover
                                    "group-hover/orbit:[animation-play-state:paused]",
                                )}
                                style={{
                                    animation: `orbit-spin ${duration}s linear reverse infinite`,
                                }}
                            >
                                {/* Icon */}
                                {hasIcon && (
                                    <span
                                        className="flex-shrink-0 text-zinc-400 dark:text-zinc-500 group-hover/chip:text-foreground transition-colors duration-200"
                                        style={{ color: `hsl(${accentHsl} / 0.75)` }}
                                    >
                                        {item.icon}
                                    </span>
                                )}

                                {/* Label */}
                                {item.label && (
                                    <span className="text-[10px] font-medium leading-none tracking-wide text-zinc-600 dark:text-zinc-300 group-hover/chip:text-zinc-900 dark:group-hover/chip:text-zinc-100 transition-colors duration-200 whitespace-nowrap">
                                        {item.label}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
