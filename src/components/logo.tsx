import type React from "react";
import { Command } from "lucide-react";

export const LogoIcon = (props: React.ComponentProps<"svg">) => (
	<Command {...props} />
);

export const Logo = (props: React.ComponentProps<"div">) => (
	<div className="flex items-center gap-2" {...props}>
        <Command className="h-6 w-6" />
        <span className="font-bold">EldoraUI</span>
    </div>
);
