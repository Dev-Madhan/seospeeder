"use client";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { type FREQUENCY, FrequencyToggle } from "@/components/frequency-toggle";
import { StarIcon, CheckCircleIcon } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type Plan = {
	name: string;
	info: string;
	price: {
		monthly: number;
		yearly: number; // yearly per month
	};
	features: string[];
	btn: {
		text: string;
		href: string;
	};
	highlighted?: boolean;
};

const pricingData: Record<string, Plan[]> = {
	"seo": [
		{
			name: "Basic",
			info: "For new websites & basic SEO improvements",
			price: {
				monthly: 250,
				yearly: 200,
			},
			features: [
				"5-10 Primary Keywords",
				"SEO Audit & Competitor Analysis",
				"Complete On-Page SEO",
				"Google Search Console & GA4 Setup",
				"URL & Image Optimization",
				"Basic Internal Linking",
			],
			btn: {
				text: "Buy Now",
				href: "#",
			},
		},
		{
			highlighted: true,
			name: "Advance",
			info: "For competitive websites needing growth",
			price: {
				monthly: 625,
				yearly: 500,
			},
			features: [
				"15-30 Targeted Keywords (LSI Included)",
				"90+ PageSpeed Score Guarantee",
				"50 Backlinks + 1 High DA Guest Post",
				"Advance Internal Linking Strategy",
				"Monthly 2 SEO Blog Publishing",
				"Comprehensive Schema Markup",
				"Monthly SEO Report & Call",
			],
			btn: {
				text: "Buy Now",
				href: "#",
			},
		},
		{
			name: "Expert",
			info: "High-competition businesses & authority building",
			price: {
				monthly: 1200,
				yearly: 1080,
			},
			features: [
				"50-100 Keywords + Topic Clusters",
				"90+ PageSpeed Score Guarantee",
				"100 Backlinks + 2 High DA Guest Posts",
				"Expert Internal Linking Strategy",
				"Monthly 4-5 SEO Blog Publishing",
				"Conversion Rate Optimization (CRO)",
				"Monthly SEO Report & Call",
			],
			btn: {
				text: "Buy Now",
				href: "#",
			},
		},
	],
	"speed-optimization": [
		{
			name: "Basic",
			info: "For standard websites needing a speed boost",
			price: {
				monthly: 600,
				yearly: 540,
			},
			features: [
				"B Grade on Gtmetrix",
				"90+ Google Desktop Speed Test",
				"70+ Google Mobile Speed Test",
				"4 secs Load time on Gtmetrix",
				"Same design and functionality",
				"Detailed SEO Audit Report",
			],
			btn: {
				text: "Buy Now",
				href: "#",
			},
		},
		{
			highlighted: true,
			name: "Advance",
			info: "For dynamic websites needing high performance",
			price: {
				monthly: 800,
				yearly: 640,
			},
			features: [
				"A Grade on Gtmetrix",
				"90+ Google Desktop Speed Test",
				"80+ Google Mobile Speed Test",
				"3 secs Load time on Gtmetrix",
				"Same design and functionality",
				"Detailed SEO Audit Report",
			],
			btn: {
				text: "Buy Now",
				href: "#",
			},
		},
		{
			name: "Expert",
			info: "For complex platforms demanding ultimate speed",
			price: {
				monthly: 1000,
				yearly: 750,
			},
			features: [
				"Core Web Vitals (LCP < 3s)",
				"A Grade with all Web Vitals green",
				"90+ Google Desktop & Mobile Speed Test",
				"2 secs Load time on Gtmetrix",
				"Same design and functionality",
				"Detailed SEO Audit Report",
			],
			btn: {
				text: "Buy Now",
				href: "#",
			},
		},
	],
	"cwv": [
		{
			name: "1 MONTH",
			info: "Short-term maintenance and monitoring",
			price: {
				monthly: 190,
				yearly: 150,
			},
			features: [
				"Maintain 90% Good URLs",
				"Maintain Core Web Vitals on GSC",
				"Ensure CWV Assessment: Passed",
				"Maintain 90+ Scores on Mobile & Desktop",
				"Maintain A Grade on GTmetrix",
				"Instant Chat Support",
			],
			btn: {
				text: "Buy Now",
				href: "#",
			},
		},
		{
			highlighted: true,
			name: "3 MONTH",
			info: "Quarterly performance guarantee",
			price: {
				monthly: 570,
				yearly: 400,
			},
			features: [
				"All 1-Month Plan Features",
				"Continuous 90-Day Monitoring",
				"Quarterly Performance Reports",
				"Priority Issue Resolution",
				"Proactive Metric Protection",
			],
			btn: {
				text: "Buy Now",
				href: "#",
			},
		},
		{
			name: "12 MONTH",
			info: "Long-term stability and optimization",
			price: {
				monthly: 2280,
				yearly: 1200,
			},
			features: [
				"All 3-Month Plan Features",
				"Year-Round Core Web Vitals Stability",
				"VIP Instant Chat Support",
				"Algorithm Update Protection",
				"Dedicated Technical Manager",
			],
			btn: {
				text: "Buy Now",
				href: "#",
			},
		},
	],
	"optimization-maintenance": [
		{
			name: "1 MONTH",
			info: "Short-term maintenance and monitoring",
			price: {
				monthly: 125,
				yearly: 100,
			},
			features: [
				"15-Day Optimization Report",
				"Resolve Optimization Issues",
				"Regular Performance Audits",
				"Maintain PSI Scores as per Plan",
				"Maintain GTmetrix Scores as per Plan",
				"Instant Chat Support",
			],
			btn: { text: "Buy Now", href: "#" },
		},
		{
			highlighted: true,
			name: "3 MONTH",
			info: "Quarterly performance guarantee",
			price: {
				monthly: 375,
				yearly: 250,
			},
			features: [
				"All 1-Month Plan Features",
				"Quarterly Strategy Adjustments",
				"Priority Bug Fixes & Resolutions",
				"Extended 90-Day Audits",
				"Consistent Score Protection",
			],
			btn: { text: "Buy Now", href: "#" },
		},
		{
			name: "12 MONTH",
			info: "Long-term stability and optimization",
			price: {
				monthly: 1500,
				yearly: 800,
			},
			features: [
				"All 3-Month Plan Features",
				"Year-Round Performance Stability",
				"VIP Support & Consultations",
				"Annual Growth & Speed Reports",
				"Dedicated Maintenance Team",
			],
			btn: { text: "Buy Now", href: "#" },
		},
	]
};

export function PricingSection() {
	const [frequency, setFrequency] = React.useState<"monthly" | "yearly">(
		"monthly"
	);
	const [activeCategory, setActiveCategory] = React.useState("seo");
	const containerRef = React.useRef<HTMLDivElement>(null);
	const [introFinished, setIntroFinished] = React.useState(false);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top 80%",
				once: true,
			}
		});

		tl.from(".gsap-fade-up", {
			y: 40,
			opacity: 0,
			filter: "blur(10px)",
			duration: 0.8,
			stagger: 0.15,
			ease: "power3.out"
		})
			.call(() => setIntroFinished(true), [], "-=0.4");
	}, { scope: containerRef });

	const categories = [
		{ id: "seo", label: "SEO" },
		{ id: "speed-optimization", label: "Speed Optimization" },
		{ id: "cwv", label: "CWV Maintenance" },
		{ id: "optimization-maintenance", label: "Optimization Maintenance" },
	];

	const currentPlans = pricingData[activeCategory] || [];

	return (
		<div
			ref={containerRef}
			className="relative flex w-full flex-col items-center justify-center space-y-7 p-4 font-inter pt-10"
		>
			<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent origin-center absolute top-0 left-0" />
			<div className="mx-auto max-w-xl space-y-5">
				<h2 className="gsap-fade-up text-center font-primary font-bold text-2xl tracking-tight md:text-3xl lg:font-extrabold lg:text-4xl">
					Plans That Scale With You
				</h2>
				<p className="gsap-fade-up text-center text-muted-foreground text-sm md:text-base">
					Whether you're just starting out or growing fast, our flexible pricing has you covered with no hidden costs.
				</p>
			</div>

			<div className="gsap-fade-up">
				<FrequencyToggle frequency={frequency} setFrequency={setFrequency} />
			</div>

			<div className="w-full relative gsap-fade-up">
				<div className="flex w-full overflow-x-auto scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
					<div className="flex items-center gap-3 sm:mx-auto">
						{categories.map((cat) => {
							const isActive = activeCategory === cat.id;

							return (
								<button
									key={cat.id}
									onClick={() => setActiveCategory(cat.id)}
									className={cn(
										"inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 rounded-xl px-4 sm:px-6 text-sm transition-all duration-300 relative overflow-hidden group/btn font-inter",
										isActive
											? "font-semibold border-2 border-primary bg-primary hover:bg-primary/95 text-primary-foreground shadow-[0_0_20px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.6)]"
											: "font-semibold border-2 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
									)}
								>
									{isActive && (
										<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
									)}
									<span className="relative z-10 text-nowrap">{cat.label}</span>
								</button>
							);
						})}
					</div>
				</div>
			</div>

			<div className="mx-auto w-full max-w-4xl min-h-[400px]">
				<AnimatePresence mode="wait">
					<motion.div
						key={activeCategory}
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
							exit: { opacity: 0, transition: { duration: 0.2 } }
						}}
						initial="hidden"
						animate={introFinished ? "visible" : "hidden"}
						exit="exit"
						className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full"
					>
						{currentPlans.length > 0 ? (
							currentPlans.map((plan) => (
								<motion.div
									key={plan.name}
									variants={{
										hidden: { opacity: 0, y: 20 },
										visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
										exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } }
									}}
									className="flex w-full"
								>
									<PricingCard frequency={frequency} plan={plan} className="w-full h-full" />
								</motion.div>
							))
						) : (
							<div className="col-span-full flex flex-col items-center justify-center py-20 text-muted-foreground bg-muted/20 rounded-2xl border-2 border-dashed">
								<div className="text-xl font-primary font-bold text-foreground mb-2">Pricing Coming Soon</div>
								<p className="text-sm max-w-sm text-center">We are currently finalising the pricing packages for this category. Check back soon!</p>
							</div>
						)}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

type PricingCardProps = React.ComponentProps<"div"> & {
	plan: Plan;
	frequency?: FREQUENCY;
};

export function PricingCard({
	plan,
	className,
	frequency = "monthly",
	...props
}: PricingCardProps) {
	return (
		<div
			className={cn(
				"relative flex w-full flex-col overflow-hidden rounded-lg border-2 shadow-xs",
				plan.highlighted && "md:scale-105 border-primary shadow-md z-10",
				className
			)}
			key={plan.name}
			{...props}
		>
			<div
				className={cn(
					"border-b p-4",
					plan.highlighted && "bg-card dark:bg-card/80"
				)}
			>
				<div className="absolute top-2 right-2 z-10 flex items-center gap-2">
					<AnimatePresence mode="popLayout">
						{plan.highlighted && (
							<motion.div
								className="flex items-center gap-1 rounded-md border-2 bg-background px-2 py-0.5 text-xs"
								key="popular-badge"
								layout
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{ type: "spring", stiffness: 400, damping: 25 }}
							>
								<StarIcon className="size-3 fill-current" />
								Popular
							</motion.div>
						)}

						{frequency === "yearly" &&
							plan.price.monthly > plan.price.yearly && (
								<motion.div
									animate={{ opacity: 1, scale: 1, x: 0 }}
									className="flex items-center gap-1 rounded-md border-2 bg-primary px-2 py-0.5 text-primary-foreground text-xs font-bold"
									exit={{ opacity: 0, scale: 0.8, x: 10 }}
									initial={{ opacity: 0, scale: 0.8, x: 10 }}
									key="discount-badge"
									layout
									transition={{ type: "spring", stiffness: 400, damping: 25 }}
								>
									{/* Calculate the actual discount percentage of the plan */}
									{Math.round(
										((plan.price.monthly - plan.price.yearly) /
											plan.price.monthly) *
										100
									)}
									% off
								</motion.div>
							)}
					</AnimatePresence>
				</div>

				<div className="font-primary font-bold text-xl">{plan.name}</div>
				<p className="mt-2 font-normal text-muted-foreground text-sm">{plan.info}</p>
				<h3 className="mt-6 mb-1 flex w-max items-end gap-1 font-primary">
					<NumberFlow
						className="font-extrabold text-3xl [&::part(suffix)]:font-normal [&::part(suffix)]:text-base [&::part(suffix)]:text-muted-foreground"
						format={{
							style: "currency",
							currency: "GBP",
							notation: "compact",
						}}
						suffix="/month"
						value={plan.price[frequency]}
					/>
				</h3>
				<p className="mb-2 font-normal text-muted-foreground text-xs">
					billed {frequency}
				</p>
			</div>
			<div
				className={cn(
					"space-y-3 px-4 pt-6 pb-8 text-muted-foreground text-sm",
					plan.highlighted && "bg-muted/10"
				)}
			>
				{plan.features.map((feature) => (
					<div className="flex items-center gap-2" key={feature}>
						<CheckCircleIcon className="size-3.5 text-foreground" />
						<p>{feature}</p>
					</div>
				))}
			</div>
			<div
				className={cn(
					"mt-auto w-full border-t p-3",
					plan.highlighted && "bg-card dark:bg-card/80"
				)}
			>
				<Button
					asChild
					className={cn(
						"w-full transition-all duration-300 font-semibold",
						plan.highlighted
							? "bg-gradient-to-b from-primary/95 to-primary text-primary-foreground shadow-sm hover:brightness-110 border border-primary/10"
							: "hover:bg-primary/5"
					)}
					variant={plan.highlighted ? "default" : "outline"}
				>
					<Link href={plan.btn.href}>{plan.btn.text}</Link>
				</Button>
			</div>
		</div>
	);
}
