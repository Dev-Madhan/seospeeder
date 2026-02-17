import { CSSProperties } from 'react'

export function Stats() {
    return (
        <section className="bg-background py-16 sm:py-24 font-primary overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
                    <div className="max-w-2xl space-y-4 text-center lg:text-left mx-auto lg:mx-0">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
                            Unmatched Speed & Reliability
                        </h2>
                        <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
                            Our infrastructure helps you pass Core Web Vitals instantly, boosting SEO and user retention.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full lg:w-auto">
                        <div className="flex flex-col items-center lg:items-start p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 sm:bg-transparent sm:dark:bg-transparent lg:border-l-2 lg:border-zinc-200 lg:dark:border-zinc-800 lg:pl-6 lg:rounded-none">
                            <span className="text-4xl sm:text-5xl font-bold text-foreground tracking-tighter">99+</span>
                            <span className="text-sm sm:text-base text-muted-foreground mt-1 font-medium">PageSpeed Score</span>
                        </div>
                        <div className="flex flex-col items-center lg:items-start p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 sm:bg-transparent sm:dark:bg-transparent lg:border-l-2 lg:border-zinc-200 lg:dark:border-zinc-800 lg:pl-6 lg:rounded-none">
                            <span className="text-4xl sm:text-5xl font-bold text-foreground tracking-tighter">&lt;100ms</span>
                            <span className="text-sm sm:text-base text-muted-foreground mt-1 font-medium">Time to First Byte</span>
                        </div>
                        <div className="flex flex-col items-center lg:items-start p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 sm:bg-transparent sm:dark:bg-transparent lg:border-l-2 lg:border-zinc-200 lg:dark:border-zinc-800 lg:pl-6 lg:rounded-none">
                            <span className="text-4xl sm:text-5xl font-bold text-foreground tracking-tighter">100%</span>
                            <span className="text-sm sm:text-base text-muted-foreground mt-1 font-medium">Indexation Rate</span>
                        </div>
                    </div>
                </div>
            </div>

            <div
                aria-hidden
                className="mt-12 sm:mt-20 mx-auto flex h-48 sm:h-64 lg:h-80 w-full max-w-7xl items-end justify-between gap-px px-4 sm:px-6 lg:px-8 opacity-90"
            >
                {Array.from({ length: 80 }, (_, i) => {
                    const progress = i / 79
                    const base = Math.pow(progress, 2.2)
                    const noise = Math.sin(i * 0.7) * 0.08 + Math.sin(i * 1.3) * 0.05
                    const height = Math.min(1, Math.max(0.05, base + noise * (0.3 + progress * 0.7)))
                    return (
                        <div
                            key={i}
                            className="after:h-[var(--line-height)] after:bg-foreground/20 hover:after:bg-primary relative h-full w-full max-w-[6px] rounded-t-sm duration-300 ease-out before:absolute before:inset-0 before:-inset-x-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:rounded-t-sm after:transition-colors"
                            style={{ '--line-height': `${height * 100}%` } as CSSProperties}
                        />
                    )
                })}
            </div>
        </section>
    )
}
