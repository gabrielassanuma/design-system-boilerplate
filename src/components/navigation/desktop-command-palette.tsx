"use client"

import {
  BookOpenIcon,
  CompassIcon,
  FileTextIcon,
  LayoutGridIcon,
  PaintBucketIcon,
  SearchIcon,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

type DesktopCommandPaletteProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DesktopCommandPalette({ open, onOpenChange }: DesktopCommandPaletteProps) {
  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Desktop Navigation"
      description="Search routes, docs, and component pages"
    >
      <CommandInput placeholder="Search routes and commands..." />
      <CommandList>
        <CommandEmpty>No result found.</CommandEmpty>
        <CommandGroup heading="Jump to">
          <CommandItem onSelect={() => onOpenChange(false)}>
            <CompassIcon />
            Overview
            <CommandShortcut>G O</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => onOpenChange(false)}>
            <LayoutGridIcon />
            Components
            <CommandShortcut>G C</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => onOpenChange(false)}>
            <PaintBucketIcon />
            Tokens
            <CommandShortcut>G T</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => onOpenChange(false)}>
            <SearchIcon />
            Find component by name
            <CommandShortcut>⌘F</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => onOpenChange(false)}>
            <FileTextIcon />
            Create release note draft
            <CommandShortcut>⌘R</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => onOpenChange(false)}>
            <BookOpenIcon />
            Open documentation
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
