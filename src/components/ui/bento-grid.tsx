import { ComponentPropsWithoutRef, ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      "hover:border-primary/50 transition-all duration-300",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0 z-0 transition-opacity duration-300 group-hover:opacity-100">
      {background}
    </div>
    <div className="relative z-10 p-6 flex flex-col h-full">
      <div className="pointer-events-none flex transform-gpu flex-col gap-2 transition-all duration-500 lg:group-hover:-translate-y-8">
        <Icon className="h-14 w-14 origin-left transform-gpu text-primary transition-all duration-500 ease-in-out group-hover:scale-90 opacity-80 group-hover:opacity-100" />
        <h3 className="text-2xl font-bold text-foreground drop-shadow-sm">
          {name}
        </h3>
        <p className="max-w-lg text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </div>

      <div
        className={cn(
          "mt-auto pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden"
        )}
      >
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0 text-primary font-bold"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full translate-y-6 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
      )}
    >
      <Button
        variant="link"
        asChild
        size="sm"
        className="pointer-events-auto p-0 text-primary font-bold text-lg hover:no-underline"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 h-5 w-5 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/[0.02]" />
  </div>
)

export { BentoCard, BentoGrid }
