import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const bannerVariants = cva(
  "relative flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-sm",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-border",
        info: "border-primary/35 bg-primary/10 text-foreground",
        success: "border-secondary/40 bg-secondary/15 text-foreground",
        warning: "border-accent/50 bg-accent/20 text-foreground",
        danger: "border-destructive/40 bg-destructive/15 text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Banner({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof bannerVariants>) {
  return (
    <div
      data-slot="banner"
      data-variant={variant}
      role="status"
      className={cn(bannerVariants({ variant }), className)}
      {...props}
    />
  )
}

function BannerTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="banner-title"
      className={cn("text-sm font-semibold leading-none", className)}
      {...props}
    />
  )
}

function BannerDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="banner-description"
      className={cn("text-muted-foreground mt-1 text-sm", className)}
      {...props}
    />
  )
}

function BannerActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="banner-actions"
      className={cn("ml-auto flex shrink-0 items-center gap-2", className)}
      {...props}
    />
  )
}

export { Banner, BannerActions, BannerDescription, BannerTitle, bannerVariants }
