import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

export type LinkItemType = {
	label: string;
	href: string;
	icon: LucideIcon;
	description?: string;
};

export function LinkItem({
	label,
	description,
	icon: Icon,
	className,
	href,
	...props
}: React.ComponentProps<typeof Link> & LinkItemType) {
	return (
		<Link
			className={cn("flex gap-x-2 rounded-md p-2 hover:bg-accent font-inter font-medium", className)}
			href={href}
			{...props}
		>
			<div className="flex aspect-square size-12 items-center justify-center rounded-md border-2 bg-card text-sm shadow-sm">
				<Icon className="size-5 text-foreground" />
			</div>
			<div className="flex flex-col items-start justify-center">
				<span className="font-semibold font-inter">{label}</span>
				<span className="line-clamp-2 text-muted-foreground text-xs font-inter font-medium">
					{description}
				</span>
			</div>
		</Link>
	);
}
