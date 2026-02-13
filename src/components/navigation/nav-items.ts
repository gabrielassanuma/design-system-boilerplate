import type { LucideIcon } from "lucide-react"
import {
  BarChart3Icon,
  ComponentIcon,
  FolderKanbanIcon,
  HomeIcon,
  LayersIcon,
  LifeBuoyIcon,
  SettingsIcon,
  ShieldCheckIcon,
} from "lucide-react"

export type NavItem = {
  href: string
  label: string
  icon: LucideIcon
  isActive?: boolean
  badge?: string
}

export const primaryNavItems: NavItem[] = [
  { href: "#", label: "Overview", icon: HomeIcon, isActive: true },
  { href: "#", label: "Components", icon: ComponentIcon, badge: "24" },
  { href: "#", label: "Tokens", icon: LayersIcon },
  { href: "#", label: "Templates", icon: FolderKanbanIcon },
  { href: "#", label: "Analytics", icon: BarChart3Icon },
]

export const supportNavItems: NavItem[] = [
  { href: "#", label: "Quality Gates", icon: ShieldCheckIcon },
  { href: "#", label: "Support", icon: LifeBuoyIcon },
  { href: "#", label: "Settings", icon: SettingsIcon },
]
