import { SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const colorTokens = [
  { name: "Background", variable: "--background", on: "--foreground" },
  { name: "Primary", variable: "--primary", on: "--primary-foreground" },
  { name: "Secondary", variable: "--secondary", on: "--secondary-foreground" },
  { name: "Accent", variable: "--accent", on: "--accent-foreground" },
  { name: "Muted", variable: "--muted", on: "--muted-foreground" },
  { name: "Destructive", variable: "--destructive", on: "--primary-foreground" },
]

const radiusTokens = [
  { label: "sm", value: "calc(var(--radius) - 4px)" },
  { label: "md", value: "calc(var(--radius) - 2px)" },
  { label: "lg", value: "var(--radius)" },
  { label: "xl", value: "calc(var(--radius) + 4px)" },
]

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 10% 0%, color-mix(in oklab, var(--primary) 24%, transparent), transparent 40%), radial-gradient(circle at 90% 20%, color-mix(in oklab, var(--chart-2) 20%, transparent), transparent 35%), linear-gradient(to bottom, color-mix(in oklab, var(--background) 90%, var(--muted) 10%), var(--background))",
        }}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 md:px-8">
        <header className="space-y-4 rounded-2xl border bg-card/70 p-6 backdrop-blur md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">Next.js + shadcn/ui</Badge>
            <Badge variant="outline">Starter Kit</Badge>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Design System Foundation
          </h1>
          <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
            Foundation to evolve typography scale, tokens, components, and documentation.
            This template already includes interactive components and visual examples for your
            system.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button>
              <SparklesIcon />
              Primary action
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Menu component</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Duplicate block</DropdownMenuItem>
                <DropdownMenuItem>Publish changes</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">Remove item</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog example</DialogTitle>
                  <DialogDescription>
                    Use this component for confirmations, quick flows, and onboarding.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter showCloseButton />
              </DialogContent>
            </Dialog>
          </div>
        </header>

        <Separator />

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Color Tokens</CardTitle>
              <CardDescription>Initial color roles for the system.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {colorTokens.map((token) => (
                <div key={token.name} className="space-y-2">
                  <div
                    className="flex h-20 items-end rounded-xl border p-3 text-xs font-medium uppercase tracking-wide"
                    style={{
                      backgroundColor: `var(${token.variable})`,
                      color: `var(${token.on})`,
                    }}
                  >
                    {token.name}
                  </div>
                  <p className="text-xs text-muted-foreground">{token.variable}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Radius Tokens</CardTitle>
              <CardDescription>Consistency for corners and surfaces.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {radiusTokens.map((radius) => (
                <div key={radius.label} className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium">{radius.label}</span>
                  <div
                    className="h-10 w-16 border bg-muted"
                    style={{ borderRadius: radius.value }}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>State and action hierarchy.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Form Controls</CardTitle>
              <CardDescription>Input plus a primary action in a short flow.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Type a token name..." />
              <div className="flex gap-3">
                <Button className="flex-1">Save</Button>
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Tabs Pattern</CardTitle>
            <CardDescription>Example pattern for documenting components.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
                <TabsTrigger value="a11y">A11y</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="rounded-md border bg-background p-4">
                Define when to use each variant and the action priority level.
              </TabsContent>
              <TabsContent value="usage" className="rounded-md border bg-background p-4">
                Describe component API, props, and composition examples.
              </TabsContent>
              <TabsContent value="a11y" className="rounded-md border bg-background p-4">
                Include keyboard navigation, minimum contrast, and required aria labels.
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
