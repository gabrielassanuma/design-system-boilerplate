import Link from "next/link"

import { primaryNavItems, supportNavItems } from "@/components/navigation/nav-items"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function DesktopSidebar() {
  return (
    <aside className="hidden w-64 flex-col border-r bg-card/80 p-4 md:flex">
      <div className="mb-6 rounded-lg border bg-background px-3 py-2">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Workspace</p>
        <p className="mt-1 text-sm font-semibold">Design System Team</p>
      </div>

      <p className="mb-2 px-2 text-xs uppercase tracking-wider text-muted-foreground">Main</p>
      <nav className="space-y-1" aria-label="Primary">
        {primaryNavItems.map((item) => (
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
      <nav className="space-y-1" aria-label="System">
        {supportNavItems.map((item) => (
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
