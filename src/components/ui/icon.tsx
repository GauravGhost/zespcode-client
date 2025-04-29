import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"
import type { LucideProps, LucideIcon } from "lucide-react"

export type IconProps = {
  name: keyof typeof LucideIcons
  className?: string
} & Omit<LucideProps, "ref">

export function Icon({ name, className, ...props }: IconProps) {
  const LucideIcon = LucideIcons[name] as LucideIcon

  if (!LucideIcon) {
    return null
  }

  return <LucideIcon className={cn("h-6 w-6", className)} {...props} />
}
