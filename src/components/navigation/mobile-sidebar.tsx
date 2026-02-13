"use client"

import Link from "next/link"

import { primaryNavItems, supportNavItems } from "@/components/navigation/nav-items"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type MobileSidebarProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileSidebar({ open, onOpenChange }: MobileSidebarProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="top-0 left-0 h-dvh w-[18rem] max-w-[85vw] translate-x-0 translate-y-0 rounded-none border-r p-0 sm:max-w-[18rem]"
        showCloseButton
      >
        <DialogHeader className="border-b px-4 py-3 text-left">
          <DialogTitle className="text-base">Navigation</DialogTitle>
          <DialogDescription>Design System Team workspace</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 p-4">
          <div className="rounded-lg border bg-background px-3 py-2">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Workspace</p>
            <p className="mt-1 text-sm font-semibold">Design System Team</p>
          </div>

          <div>
            <p className="mb-2 px-2 text-xs uppercase tracking-wider text-muted-foreground">Main</p>
            <nav className="space-y-1" aria-label="Primary">
              {primaryNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => onOpenChange(false)}
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
          </div>

          <div className="border-t pt-4">
            <p className="mb-2 px-2 text-xs uppercase tracking-wider text-muted-foreground">System</p>
            <nav className="space-y-1" aria-label="System">
              {supportNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => onOpenChange(false)}
                  className="flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <item.icon className="size-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
