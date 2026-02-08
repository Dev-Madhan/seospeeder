"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useScroll } from "motion/react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { DesktopNav } from "@/components/desktop-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

const INITIAL_WIDTH = "70rem"
const MAX_WIDTH = "800px"

export function Navbar() {
  const { scrollY } = useScroll()
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 10)
    })
    return unsubscribe
  }, [scrollY])

  return (
    <header
      className={cn(
        "sticky z-50 mx-4 flex justify-center transition-all duration-300 md:mx-0",
        hasScrolled ? "top-6" : "top-4 mx-0"
      )}
    >
      <motion.div
        initial={{ width: INITIAL_WIDTH }}
        animate={{ width: hasScrolled ? MAX_WIDTH : INITIAL_WIDTH }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-2xl transition-all duration-300 xl:px-0",
            hasScrolled
              ? "border-border bg-background/75 border-2 px-2 backdrop-blur-lg"
              : "px-7 shadow-none"
          )}
        >
          <div className="flex h-[56px] items-center justify-between p-4">
            <Link href="/" className="flex items-center gap-3">
              <Icons.logo className="-mt-1 size-4 md:size-6" />
              <p className="text-primary ml-1 text-lg font-semibold">
                EldoraUI
              </p>
            </Link>

            <DesktopNav />

            <div className="flex shrink-0 flex-row items-center gap-1 md:gap-3">
              <div className="flex items-center space-x-6">
                <Link
                  className="text-primary-foreground dark:text-cyan-500-foreground hidden h-8 w-fit items-center justify-center rounded-full border-2 border-white/[0.12] bg-cyan-500 px-4 text-sm font-normal tracking-wide shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] md:flex"
                  href="#"
                >
                  Try for free
                </Link>
              </div>
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
