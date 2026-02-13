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
  { href: "/#overview", label: "Overview", icon: HomeIcon, isActive: true },
  { href: "/#components-showcase", label: "Components", icon: ComponentIcon, badge: "24" },
  { href: "/#tokens", label: "Tokens", icon: LayersIcon },
  { href: "/#plans", label: "Templates", icon: FolderKanbanIcon },
  { href: "/#docs-tabs", label: "Analytics", icon: BarChart3Icon },
]

export const supportNavItems: NavItem[] = [
  { href: "/#desktop-app-shell", label: "Quality Gates", icon: ShieldCheckIcon },
  { href: "/#banner-patterns", label: "Support", icon: LifeBuoyIcon },
  { href: "/#form-controls", label: "Settings", icon: SettingsIcon },
]
