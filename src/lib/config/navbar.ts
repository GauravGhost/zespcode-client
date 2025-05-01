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

export const actionButtons: ActionButton[] = [
  {
    title: "Run",
    icon: "Play",
    className: "bg-muted text-muted-foreground hover:bg-hover hover:text-accent-foreground"
  },
  {
    title: "Submit",
    icon: "UploadCloudIcon",
    className: "bg-muted text-easy hover:bg-hover"
  }
];
