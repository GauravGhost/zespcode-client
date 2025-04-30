"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,

} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"
import ProfileMenu from "./profile-menu"

export function TopNavbar() {
    return (
        <div className="flex justify-between items-center w-full px-4 py-2">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            Problems
                        </NavigationMenuLink>
                        {/* </Link> */}
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-4">
                <ModeToggle />
                <ProfileMenu />
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ComponentRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})

ListItem.displayName = "ListItem"
