import Link from "next/link"
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

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type NavItem = {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  isActive?: boolean
  badge?: string
}

const primaryItems: NavItem[] = [
  { href: "#", label: "Overview", icon: HomeIcon, isActive: true },
  { href: "#", label: "Components", icon: ComponentIcon, badge: "24" },
  { href: "#", label: "Tokens", icon: LayersIcon },
  { href: "#", label: "Templates", icon: FolderKanbanIcon },
  { href: "#", label: "Analytics", icon: BarChart3Icon },
]

const supportItems: NavItem[] = [
  { href: "#", label: "Quality Gates", icon: ShieldCheckIcon },
  { href: "#", label: "Support", icon: LifeBuoyIcon },
  { href: "#", label: "Settings", icon: SettingsIcon },
]

export function DesktopSidebar() {
  return (
    <aside className="hidden w-64 flex-col border-r bg-card/80 p-4 md:flex">
      <div className="mb-6 rounded-lg border bg-background px-3 py-2">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Workspace</p>
        <p className="mt-1 text-sm font-semibold">Design System Team</p>
      </div>

      <p className="mb-2 px-2 text-xs uppercase tracking-wider text-muted-foreground">Main</p>
      <nav className="space-y-1">
        {primaryItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-2 rounded-md px-2.5 py-2 text-sm transition-colors",
              item.isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="size-4" />
            <span className="flex-1">{item.label}</span>
            {item.badge ? (
              <Badge variant={item.isActive ? "outline" : "secondary"}>{item.badge}</Badge>
            ) : null}
          </Link>
        ))}
      </nav>

      <div className="my-4 border-t" />

      <p className="mb-2 px-2 text-xs uppercase tracking-wider text-muted-foreground">System</p>
      <nav className="space-y-1">
        {supportItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <item.icon className="size-4" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
