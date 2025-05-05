import type { IconProps } from "@/components/ui/icon";

export interface NavItem {
  title: string;
  href: string;
  icon?: IconProps["name"];
}

export const navItems: NavItem[] = [
  {
    title: "Problems",
    href: "/problems",
  },
  {
    title: "Home",
    href: "/",
  }
];

export interface ActionButton {
  title: string;
  icon: IconProps["name"];
  onClick?: () => void;
  className?: string;
}

