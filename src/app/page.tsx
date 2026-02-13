import Link from "next/link"
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  BellRingIcon,
  HomeIcon,
  SparklesIcon,
  TicketIcon,
} from "lucide-react"

import { AppShell } from "@/components/navigation/app-shell"
import { DesktopDataTable } from "@/components/navigation/desktop-data-table"
import { PageHeader } from "@/components/navigation/page-header"
import { Badge } from "@/components/ui/badge"
import { Banner, BannerActions, BannerDescription, BannerTitle } from "@/components/ui/banner"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
  { name: "Destructive", variable: "--destructive", on: "--destructive-foreground" },
]

const radiusTokens = [
  { label: "sm", value: "calc(var(--radius) - 4px)" },
  { label: "md", value: "calc(var(--radius) - 2px)" },
  { label: "lg", value: "var(--radius)" },
  { label: "xl", value: "calc(var(--radius) + 4px)" },
]

const cardSamples = [
  {
    name: "Starter Plan",
    price: "$19",
    description: "Best for small teams shipping internal products.",
    badge: "Popular",
  },
  {
    name: "Growth Plan",
    price: "$49",
    description: "Ideal for scaling design systems across squads.",
    badge: "Recommended",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For advanced governance, support, and integrations.",
    badge: "Contact Sales",
  },
]

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        className="ds-ambient-surface pointer-events-none absolute inset-0 -z-10"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 md:px-8">
        <header
          id="overview"
          className="scroll-mt-20 space-y-4 rounded-2xl border bg-card/70 p-6 backdrop-blur md:p-8"
        >
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

        <section id="desktop-app-shell" className="scroll-mt-20 space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Desktop App Shell</h2>
            <p className="text-sm text-muted-foreground">
              Topbar, Sidebar, Command Palette, and Pagination working together in one
              standardized navigation layout.
            </p>
          </div>

          <AppShell>
            <div className="space-y-6">
              <PageHeader
                eyebrow="Desktop Patterns"
                title="Navigation Routes"
                description="Standardized page header with scoped actions for desktop IA management."
                actions={
                  <>
                    <Button variant="outline" size="sm">
                      Export CSV
                    </Button>
                    <Button size="sm">Create route</Button>
                  </>
                }
              />

              <Card>
                <CardHeader>
                  <CardTitle>DataTable</CardTitle>
                  <CardDescription>
                    Includes filters, sorting, pagination, and integrated empty/loading/error states.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DesktopDataTable />
                </CardContent>
              </Card>
            </div>
          </AppShell>
        </section>

        <section id="components-showcase" className="scroll-mt-20 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>Quick status labels for semantic emphasis.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Critical</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Breadcrumbs</CardTitle>
              <CardDescription>Path and hierarchy for deep navigation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/#overview">
                        <HomeIcon className="size-3.5" />
                        Home
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/#components-showcase">Design System</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Components</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/#docs-tabs">Docs</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/#desktop-app-shell">Patterns</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Navigation</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </CardContent>
          </Card>
        </section>

        <Card id="banner-patterns" className="scroll-mt-20">
          <CardHeader>
            <CardTitle>Banner Patterns</CardTitle>
            <CardDescription>Inline communication for status and actionable updates.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Banner variant="info">
              <BellRingIcon className="mt-0.5 size-4" />
              <div>
                <BannerTitle>New release available</BannerTitle>
                <BannerDescription>Version 0.2.0 now includes Breadcrumb and Banner components.</BannerDescription>
              </div>
              <BannerActions>
                <Button size="sm">Read notes</Button>
              </BannerActions>
            </Banner>

            <Banner variant="success">
              <BadgeCheckIcon className="mt-0.5 size-4" />
              <div>
                <BannerTitle>Deployment successful</BannerTitle>
                <BannerDescription>All production checks passed and tokens are in sync.</BannerDescription>
              </div>
            </Banner>

            <Banner variant="warning">
              <AlertTriangleIcon className="mt-0.5 size-4" />
              <div>
                <BannerTitle>Action needed</BannerTitle>
                <BannerDescription>
                  Review contrast ratio on accent backgrounds before publishing.
                </BannerDescription>
              </div>
              <BannerActions>
                <Button size="sm" variant="outline">
                  Open task
                </Button>
              </BannerActions>
            </Banner>
          </CardContent>
        </Card>

        <section id="tokens" className="scroll-mt-20 grid gap-6 lg:grid-cols-[2fr_1fr]">
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
          <Card id="form-controls" className="scroll-mt-20">
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
            <CardContent className="space-y-5">
              <Input placeholder="Type a token name..." />
              <div className="flex gap-3 pt-2">
                <Button className="flex-1">Save</Button>
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="plans" className="scroll-mt-20 grid gap-6 lg:grid-cols-3">
          {cardSamples.map((plan) => (
            <Card key={plan.name}>
              <CardHeader>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <Badge variant="outline">
                    <TicketIcon className="size-3.5" />
                    {plan.badge}
                  </Badge>
                  <span className="text-xl font-semibold">{plan.price}</span>
                </div>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Choose plan</Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <Card id="docs-tabs" className="scroll-mt-20">
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
