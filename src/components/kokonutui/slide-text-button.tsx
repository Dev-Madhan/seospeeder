"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

interface SlideTextButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: React.ReactNode;
  hoverText?: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "default" | "ghost";
}

export default function SlideTextButton({
  text = "Browse Components",
  hoverText,
  href = "#",
  className,
  variant = "default",
  ...props
}: SlideTextButtonProps) {
  const slideText = hoverText ?? text;
  
  const variantStyles =
    variant === "ghost"
      ? "bg-transparent border-2 border-primary/20 hover:border-primary text-foreground hover:bg-primary/5"
      : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_-10px_rgba(var(--primary),0.6)] hover:shadow-[0_0_50px_-5px_rgba(var(--primary),0.8)]";

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center overflow-hidden rounded-full font-bold transition-all duration-500 hover:scale-105 active:scale-95",
        variantStyles,
        className
      )}
      {...props}
    >
      <div className="flex flex-col h-full w-full items-center transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-y-1/2">
        <span className="flex h-full w-full shrink-0 flex-1 items-center justify-center transition-opacity duration-500 group-hover:opacity-0 px-8 py-3">
          {text}
        </span>
        <span className="flex h-full w-full shrink-0 flex-1 items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100 px-8 py-3">
          {slideText}
        </span>
      </div>
    </Link>
  );
}
