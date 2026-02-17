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
		<NavigationMenu className="hidden lg:flex">
			<NavigationMenuList className="gap-2 lg:gap-5 space-x-0">
				<NavigationMenuItem>
					<NavigationMenuLink asChild className="px-4 text-[15px] font-semibold">
						<a className="rounded-md p-2 hover:bg-accent font-inter font-semibold" href="#about">
							About
						</a>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent text-[15px] font-semibold font-inter">
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
							<p className="text-muted-foreground text-sm font-inter font-medium">
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
					<NavigationMenuTrigger className="bg-transparent text-[15px] font-semibold font-inter">
						Digital Marketing
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[700px]">
							<div className="space-y-3 col-span-3">
								<h4 className="text-sm font-semibold leading-none px-2 font-inter">SEO Services</h4>
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
								<h4 className="text-sm font-semibold leading-none px-2 font-inter">Quick Links</h4>
							</div>
							{companyLinks2.map((item, i) => (
								<NavigationMenuLink
									className="flex flex-row items-center gap-2 rounded-md p-2 hover:bg-accent border-2 border-border font-inter font-medium"
									href={item.href}
									key={`item-${item.label}-${i}`}
								>
									<item.icon className="size-4 text-foreground" />
									<span className="font-semibold text-sm font-inter">{item.label}</span>
								</NavigationMenuLink>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className="px-4 text-[15px] font-semibold">
						<a className="rounded-md p-2 hover:bg-accent font-inter font-semibold" href="#contact">
							Contact
						</a>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
