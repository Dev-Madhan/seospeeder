import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { companyLinks, companyLinks2, productLinks } from "@/components/nav-links";
import { LinkItem } from "@/components/sheard";

export function DesktopNav() {
	return (
		<NavigationMenu className="hidden md:flex">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent">
						Products
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[700px]">
							{productLinks.map((item, i) => (
								<NavigationMenuLink
									asChild
									key={`item-${item.label}-${i}`}
								>
									<LinkItem {...item} />
								</NavigationMenuLink>
							))}
						</ul>
						<div className="border-t p-4">
							<p className="text-muted-foreground text-sm">
								Need help optimizing?{" "}
								<a
									className="font-medium text-foreground hover:underline"
									href="#"
								>
									Get a free audit
								</a>
							</p>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent">
						Digital Marketing
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[700px]">
							<div className="space-y-3 col-span-3">
								<h4 className="text-sm font-medium leading-none px-2">SEO Services</h4>
							</div>
							{companyLinks.map((item, i) => (
								<NavigationMenuLink
									asChild
									key={`item-${item.label}-${i}`}
								>
									<LinkItem {...item} />
								</NavigationMenuLink>
							))}
							<div className="space-y-3 col-span-3 border-t pt-3">
								<h4 className="text-sm font-medium leading-none px-2">Quick Links</h4>
							</div>
							{companyLinks2.map((item, i) => (
								<NavigationMenuLink
									className="flex flex-row items-center gap-2 rounded-md p-2 hover:bg-accent border-2 border-border"
									href={item.href}
									key={`item-${item.label}-${i}`}
								>
									<item.icon className="size-4 text-foreground" />
									<span className="font-medium text-sm">{item.label}</span>
								</NavigationMenuLink>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className="px-4">
						<a className="rounded-md p-2 text-sm font-medium hover:bg-accent" href="#">
							Pricing
						</a>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
