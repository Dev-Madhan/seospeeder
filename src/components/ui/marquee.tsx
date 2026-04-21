import { cn } from "@/lib/utils"

export function Marquee({
  children,
  direction = "left",
  repeat = 4,
  duration,
  className,
  ...props
}: {
  children: React.ReactNode
  direction?: "left" | "right"
  repeat?: number
  duration?: number
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden [--gap:1rem]",
        className
      )}
      style={duration ? { "--duration": `${duration}s` } as React.CSSProperties : undefined}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)] will-change-transform transform-gpu", {
              "animate-marquee-left": direction === "left",
              "animate-marquee-right": direction === "right",
              "group-hover:[animation-play-state:paused]": true,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
