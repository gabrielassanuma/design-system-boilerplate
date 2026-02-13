import { AlertCircleIcon, SearchXIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: {
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center gap-3 rounded-xl border border-dashed bg-muted/20 p-6 text-center">
      <span className="inline-flex size-10 items-center justify-center rounded-full bg-muted">
        <SearchXIcon className="size-4" />
      </span>
      <div className="space-y-1">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {actionLabel && onAction ? (
        <Button size="sm" variant="outline" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  )
}

export function ErrorState({
  title,
  description,
  actionLabel = "Try again",
  onAction,
}: {
  title: string
  description: string
  actionLabel?: string
  onAction: () => void
}) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center gap-3 rounded-xl border border-destructive/35 bg-destructive/5 p-6 text-center">
      <span className="inline-flex size-10 items-center justify-center rounded-full bg-destructive/15 text-destructive">
        <AlertCircleIcon className="size-4" />
      </span>
      <div className="space-y-1">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Button size="sm" variant="outline" onClick={onAction}>
        {actionLabel}
      </Button>
    </div>
  )
}

export function LoadingState() {
  return (
    <div className="space-y-2 rounded-xl border bg-background p-4">
      <div className="h-4 w-44 animate-pulse rounded bg-muted" />
      <div className="h-10 w-full animate-pulse rounded bg-muted" />
      <div className="h-10 w-full animate-pulse rounded bg-muted" />
      <div className="h-10 w-full animate-pulse rounded bg-muted" />
      <div className="h-10 w-full animate-pulse rounded bg-muted" />
    </div>
  )
}
