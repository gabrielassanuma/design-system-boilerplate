"use client"

import { useEffect, useState } from "react"
import { BellIcon, PlusIcon, SearchIcon } from "lucide-react"

import { DesktopCommandPalette } from "@/components/navigation/desktop-command-palette"
import { Button } from "@/components/ui/button"

export function DesktopTopbar() {
  const [openCommand, setOpenCommand] = useState(false)

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpenCommand(true)
      }
    }

    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
  }, [])

  return (
    <>
      <header className="flex items-center justify-between gap-4 border-b bg-background/80 px-6 py-4 backdrop-blur">
        <div className="min-w-0 max-w-2xl">
          <h2 className="text-base font-semibold">Desktop Navigation</h2>
          <p className="text-balance text-sm text-muted-foreground">
            App shell patterns for complex design system products.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="outline"
            className="hidden h-10 w-[34rem] max-w-[50vw] items-center justify-between md:flex"
            onClick={() => setOpenCommand(true)}
          >
            <span className="inline-flex min-w-0 items-center gap-2 text-muted-foreground">
              <SearchIcon className="size-4" />
              <span className="truncate">Search routes and commands</span>
            </span>
            <kbd className="inline-flex h-6 items-center rounded-md border border-border/80 bg-muted px-2 text-[11px] font-medium text-muted-foreground">
              ⌘K
            </kbd>
          </Button>
          <Button variant="outline" size="icon" aria-label="Notifications">
            <BellIcon className="size-4" />
          </Button>
          <Button>
            <PlusIcon className="size-4" />
            New page
          </Button>
        </div>
      </header>
      <DesktopCommandPalette open={openCommand} onOpenChange={setOpenCommand} />
    </>
  )
}
