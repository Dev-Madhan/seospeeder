import {
	BarChart,
	Code2,
	FileText,
	Flame,
	Globe,
	Handshake,
	HelpCircle,
	Layers,
	Leaf,
	Server,
	Shield,
	ShoppingBag,
	Star,
	Users,
	Workflow,
	Zap,
} from "lucide-react";
import type { LinkItemType } from "@/components/sheard";

export const productLinks: LinkItemType[] = [
	{
		label: "WordPress",
		href: "#",
		description: "Speed optimization for WordPress sites",
		icon: Globe,
	},
	{
		label: "Magento",
		href: "#",
		description: "E-commerce performance optimization",
		icon: ShoppingBag,
	},
	{
		label: "Shopify",
		href: "#",
		description: "Boost your Shopify store speed",
		icon: ShoppingBag,
	},
	{
		label: "Laravel",
		href: "#",
		description: "Framework optimization services",
		icon: Code2,
	},
	{
		label: "CodeIgniter",
		href: "#",
		description: "PHP framework speed enhancement",
		icon: Flame,
	},
	{
		label: "Core PHP",
		href: "#",
		description: "Custom PHP application optimization",
		icon: Code2,
	},
	{
		label: "Wix",
		href: "#",
		description: "Website builder performance tuning",
		icon: Layers,
	},
	{
		label: "Webflow",
		href: "#",
		description: "No-code platform optimization",
		icon: Workflow,
	},
	{
		label: "Core Web Vitals",
		href: "#",
		description: "Improve LCP, FID, and CLS metrics",
		icon: Zap,
	},
	{
		label: "Server Side",
		href: "#",
		description: "Backend and server optimization",
		icon: Server,
	},
];

export const companyLinks: LinkItemType[] = [
	{
		label: "Search Engine Optimisation",
		href: "#",
		description: "Improve online visibility and rankings",
		icon: Globe,
	},
	{
		label: "Local SEO",
		href: "#",
		description: "Attract nearby customers effectively",
		icon: Globe,
	},
	{
		label: "On Page SEO",
		href: "#",
		description: "Optimise content for better ranking",
		icon: FileText,
	},
	{
		label: "Boost Organic Traffic",
		href: "#",
		description: "Increase website visitors naturally",
		icon: BarChart,
	},
	{
		label: "App Store Optimisation",
		href: "#",
		description: "Enhance app discoverability",
		icon: ShoppingBag,
	},
	{
		label: "Social Media Optimisation",
		href: "#",
		description: "Increase interaction on social networks",
		icon: Users,
	},
	{
		label: "Paid Advertising",
		href: "#",
		description: "Drive traffic with targeted ads",
		icon: Zap,
	},
	{
		label: "Content Marketing",
		href: "#",
		description: "Deliver valuable content consistently",
		icon: FileText,
	},
	{
		label: "Domain Authority",
		href: "#",
		description: "Strengthen website credibility",
		icon: Shield,
	},
];

export const companyLinks2: LinkItemType[] = [
	{
		label: "About Us",
		href: "#",
		icon: Users,
	},
	{
		label: "Contact",
		href: "#",
		icon: HelpCircle,
	},
	{
		label: "Blog",
		href: "#",
		icon: Leaf,
	},
	{
		label: "Privacy Policy",
		href: "#",
		icon: Shield,
	},
	{
		label: "Terms of Service",
		href: "#",
		icon: FileText,
	},
];
