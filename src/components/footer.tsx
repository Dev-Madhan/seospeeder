"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Mail, Instagram, Facebook, Loader2, Check } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import { TwitterIcon } from "@/components/ui/twitter";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
	{
		title: "Optimization",
		links: [
			{ name: "AI SEO Auditor", href: "#" },
			{ name: "Keyword Explorer", href: "#" },
			{ name: "Backlink Analyzer", href: "#" },
			{ name: "Content Optimizer", href: "#" },
			{ name: "Site Speed Pro", href: "#" },
		],
	},
	{
		title: "Solutions",
		links: [
			{ name: "E-commerce SEO", href: "#" },
			{ name: "SaaS Platforms", href: "#" },
			{ name: "Local Business", href: "#" },
			{ name: "Enterprise", href: "#" },
			{ name: "Digital Agencies", href: "#" },
		],
	},
	{
		title: "Company",
		links: [
			{ name: "About Us", href: "#" },
			{ name: "Case Studies", href: "#" },
			{ name: "Pricing", href: "#" },
			{ name: "Careers", href: "#" },
			{ name: "Contact", href: "#" },
		],
	},
];

const socialLinks = [
	{ icon: (props: any) => <TwitterIcon {...props} size={18} />, href: "#", label: "X" },
	{ icon: Instagram, href: "#", label: "Instagram" },
	{ icon: Facebook, href: "#", label: "Facebook" },
];

const legalLinks = [
	{ name: "Privacy Policy", href: "#" },
	{ name: "Terms of Service", href: "#" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<Link
			href={href}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="text-sm text-muted-foreground font-inter transition-colors duration-300 hover:text-foreground"
		>
			<span className="relative inline-block">
				{isHovered ? (
					<Highlighter action="underline" color="hsl(var(--primary))">
						{children}
					</Highlighter>
				) : (
					children
				)}
			</span>
		</Link>
	);
}

export default function FooterSection() {
	const containerRef = useRef<HTMLElement>(null);
	const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

	useGSAP(
		() => {
			const tl = gsap.timeline({
				defaults: { ease: "power2.out" },
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom-=50",
					toggleActions: "play none none none",
				},
			});

			tl.fromTo(
				".footer-brand",
				{ y: 30, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1 }
			)
				.fromTo(
					".footer-col",
					{ y: 25, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
					"-=0.6"
				)
				.fromTo(
					".footer-newsletter",
					{ y: 25, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.8 },
					"-=0.5"
				)
				.fromTo(
					".footer-bottom",
					{ y: 15, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.8 },
					"-=0.4"
				);
		},
		{ scope: containerRef }
	);

	return (
		<footer
			ref={containerRef}
			className="relative bg-background pt-16 md:pt-24 overflow-hidden"
		>
			<div className="mx-auto max-w-7xl px-4 md:px-8">
				{/* Main Grid */}
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
					{/* Brand */}
					<div className="footer-brand lg:col-span-3 space-y-6">
						<Link href="/" className="flex items-center gap-3 group">
							<Icons.logo className="-mt-1 size-6 transition-opacity duration-300 group-hover:opacity-70 text-primary" />
							<p className="text-primary ml-1 text-lg font-bold tracking-tight">
								SEO Speeder
							</p>
						</Link>
						<p className="max-w-xs text-sm text-muted-foreground font-inter leading-relaxed">
							Data-driven AI SEO strategies designed to outpace
							your competition, drive qualified leads, and
							maximize your digital growth.
						</p>
						<div className="flex items-center gap-3">
							{socialLinks.map((social, idx) => (
								<motion.a
									key={idx}
									href={social.href}
									whileHover={{ y: -3 }}
									whileTap={{ scale: 0.95 }}
									transition={{
										type: "spring",
										stiffness: 400,
										damping: 17,
									}}
									className="flex size-10 items-center justify-center rounded-full border-2 bg-background text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-primary/5 hover:scale-110 shadow-sm"
									aria-label={social.label}
								>
									<social.icon className="size-4.5" />
								</motion.a>
							))}
						</div>
					</div>

					{/* Link Columns */}
					<div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-10">
						{footerLinks.map((group, idx) => (
							<div
								key={idx}
								className="footer-col space-y-6"
							>
								<h3 className="text-sm font-bold uppercase tracking-widest text-foreground font-primary">
									{group.title}
								</h3>
								<ul className="space-y-3.5">
									{group.links.map((link, linkIdx) => (
										<li key={linkIdx}>
											<FooterLink href={link.href}>
												{link.name}
											</FooterLink>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					{/* Newsletter */}
					<div className="footer-newsletter lg:col-span-3 space-y-6">
						<div className="space-y-3">
							<h3 className="text-sm font-bold uppercase tracking-widest text-foreground font-primary">
								Stay Updated
							</h3>
							<p className="text-sm text-muted-foreground font-inter leading-relaxed">
								Get the latest SEO insights and tips delivered
								to your inbox.
							</p>
						</div>
						<form 
							onSubmit={async (e) => {
								e.preventDefault();
								if (status === 'loading') return;
								
								const form = e.currentTarget;
								const emailInput = form.elements.namedItem('email') as HTMLInputElement;
								const email = emailInput.value;

								if (!email) return;

								setStatus('loading');
								try {
									const response = await fetch('/api/subscribe', {
										method: 'POST',
										headers: { 'Content-Type': 'application/json' },
										body: JSON.stringify({ email }),
									});

									if (response.ok) {
										setStatus('success');
										emailInput.value = '';
										setTimeout(() => setStatus('idle'), 5000);
									} else {
										setStatus('error');
										setTimeout(() => setStatus('idle'), 5000);
									}
								} catch (error) {
									console.error('Subscription failed', error);
									setStatus('error');
									setTimeout(() => setStatus('idle'), 5000);
								}
							}}
							className="space-y-2.5"
						>
							<div className="relative">
								<Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50 pointer-events-none" />
								<Input
									name="email"
									type="email"
									required
									placeholder="you@company.com"
									className="h-11 pl-10 bg-card border-2 rounded-xl text-sm transition-all duration-300 focus:border-primary/50 focus:ring-0"
								/>
							</div>
							<Button 
								type="submit"
								className="w-full h-11 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold font-inter transition-all duration-300"
							>
								{status === 'loading' ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Processing...
									</>
								) : status === 'success' ? (
									<motion.div 
										initial={{ scale: 0.9, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										className="flex items-center gap-2"
									>
										<Check className="size-4" />
										Success!
									</motion.div>
								) : status === 'error' ? (
									'Failed! Try Again'
								) : (
									<>
										Subscribe
										<ArrowUpRight className="ml-1.5 size-4" />
									</>
								)}
							</Button>
						</form>
						<p className="text-xs text-muted-foreground/60 font-inter">
							No spam, unsubscribe anytime.
						</p>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="footer-bottom mt-20 pt-10 pb-12">
					<motion.div 
						initial={{ scaleX: 0, opacity: 0 }}
						whileInView={{ scaleX: 1, opacity: 1 }}
						transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
						viewport={{ once: true }}
						className="w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent mb-10 origin-center" 
					/>
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<p className="text-sm text-muted-foreground font-inter order-last md:order-first">
						© {new Date().getFullYear()} SEO Speeder. All rights
						reserved.
					</p>
					<div className="flex items-center gap-6">
						{legalLinks.map((link, idx) => (
							<FooterLink
								key={idx}
								href={link.href}
							>
								{link.name}
							</FooterLink>
						))}
					</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
