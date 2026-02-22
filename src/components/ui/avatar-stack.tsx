"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AvatarStackProps {
  avatars: string[];
  totalCount?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function AvatarStack({ 
  avatars, 
  totalCount, 
  className,
  size = "md"
}: AvatarStackProps) {
  const sizeClasses = {
    sm: "size-8",
    md: "size-10",
    lg: "size-12"
  };

  const borderClasses = {
    sm: "border-2",
    md: "border-4",
    lg: "border-4"
  };

  return (
    <div className={cn("flex items-center -space-x-4", className)}>
      {avatars.map((avatar, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
          className={cn(
            "relative rounded-full border-background bg-muted overflow-hidden shadow-sm transition-transform duration-300",
            sizeClasses[size],
            borderClasses[size]
          )}
        >
          <Image
            src={avatar.startsWith('/') ? avatar : `/assets/avatars/${avatar}`}
            alt="User avatar"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 48px, 48px"
          />
        </motion.div>
      ))}
      {totalCount && (
        <div className={cn(
          "rounded-full border-background bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold relative z-0",
          sizeClasses[size],
          borderClasses[size]
        )}>
          {totalCount}
        </div>
      )}
    </div>
  );
}
