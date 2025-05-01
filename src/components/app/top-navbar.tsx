import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"
import ProfileMenu from "./profile-menu"
import { Button } from "../ui/button"
import { Icon } from "../ui/icon"
import { navItems, actionButtons } from "@/lib/config/navbar"
import { useLocation, useNavigate } from "react-router"

export function TopNavbar() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center w-full px-4 py-2">
            <NavigationMenu>
                <NavigationMenuList>
                    {navItems.map((item) => (
                        <NavigationMenuItem key={item.href}>
                            <NavigationMenuLink
                                className={cn(
                                    "cursor-pointer",
                                    location.pathname === item.href && "text-accent-foreground font-medium"
                                )}
                                onClick={() => navigate(item.href)}
                            >
                                {item.icon && <Icon name={item.icon} className="mr-2" />}
                                {item.title}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-0.5">
                {actionButtons.map((button) => (
                    <Button
                        key={button.title}
                        onClick={button.onClick}
                        className={cn("cursor-pointer", button.className)}
                    >
                        <Icon name={button.icon} /> {button.title}
                    </Button>
                ))}
            </div>
            <div className="flex items-center space-x-4">
                <ModeToggle />
                <ProfileMenu />
            </div>
        </div>
    )
}
