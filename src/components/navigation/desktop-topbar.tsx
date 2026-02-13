"use client"

import { useEffect, useState } from "react"
import { BellIcon, MenuIcon, PlusIcon, SearchIcon } from "lucide-react"

import { DesktopCommandPalette } from "@/components/navigation/desktop-command-palette"
import { MobileSidebar } from "@/components/navigation/mobile-sidebar"
import { Button } from "@/components/ui/button"

export function DesktopTopbar() {
  const [openCommand, setOpenCommand] = useState(false)
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false)

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
      <header className="flex items-center justify-between gap-3 border-b bg-background/80 px-4 py-4 backdrop-blur sm:gap-4 sm:px-6">
        <div className="flex min-w-0 max-w-2xl items-start gap-2">
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label="Open navigation menu"
            onClick={() => setOpenMobileSidebar(true)}
          >
            <MenuIcon className="size-4" />
          </Button>
          <div className="min-w-0">
            <h2 className="text-base font-semibold">Navigation</h2>
            <p className="hidden text-balance text-sm text-muted-foreground sm:block">
              App shell patterns for complex design system products.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label="Open command palette"
            onClick={() => setOpenCommand(true)}
          >
            <SearchIcon className="size-4" />
          </Button>
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
          <Button className="hidden sm:inline-flex">
            <PlusIcon className="size-4" />
            New page
          </Button>
          <Button size="icon" className="sm:hidden" aria-label="Create new page">
            <PlusIcon className="size-4" />
          </Button>
        </div>
      </header>
      <MobileSidebar open={openMobileSidebar} onOpenChange={setOpenMobileSidebar} />
      <DesktopCommandPalette open={openCommand} onOpenChange={setOpenCommand} />
    </>
  )
}
