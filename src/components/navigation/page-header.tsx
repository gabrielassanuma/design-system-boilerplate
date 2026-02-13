import * as React from "react"

import { cn } from "@/lib/utils"

type PageHeaderProps = {
  title: string
  description: string
  eyebrow?: string
  actions?: React.ReactNode
  className?: string
}

export function PageHeader({
  title,
  description,
  eyebrow,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <section
      data-slot="page-header"
      className={cn(
        "flex flex-col gap-4 rounded-xl border bg-background/70 p-4 md:flex-row md:items-start md:justify-between",
        className
      )}
    >
      <div className="space-y-1">
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
    </section>
  )
}
